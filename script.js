const tools = [

{
name:"Demand Planning App",
desc:"Smart Planning",
url:"https://saurabhjopl-code.github.io/demand-engine-V2/"
},

{
name:"Shipment Planning",
desc:"DW 60-40 Enabled",
url:"https://saurabhjopl-code.github.io/DW-Shipment-Planning-Engine-V2-Structure/"
},

{
name:"Flipkart & Myntra Reverse SP Engine",
desc:"Reverse SP Engine",
url:"https://saurabhjopl-code.github.io/flipkart-sp-calculator/"
},

{
name:"PDF label sorter",
desc:"Sort by Size",
url:"https://saurabhjopl-code.github.io/pdf-size-sorter/"
},

{
name:"Flipkart Sales & PLA Analysis",
desc:"Sales & PLA intelligence",
url:"https://saurabhjopl-code.github.io/flipkart-sales-pla-test/"
},

{
name:"Listing Live Non-Live",
desc:"Listing intelligence",
url:"https://saurabhjopl-code.github.io/listing-intelligence-tool/"
},

{
name:"Image Finder",
desc:"SKU image viewer",
url:"https://saurabhjopl-code.github.io/sku-image-viewer/"
}

];


const grid = document.getElementById("toolGrid");
const search = document.getElementById("searchBox");
const title = document.getElementById("appTitle");

/* localStorage helpers */

function getPinned(){
return JSON.parse(localStorage.getItem("pinnedTools") || "[]");
}

function savePinned(pinned){
localStorage.setItem("pinnedTools", JSON.stringify(pinned));
}

function getUsage(){
return JSON.parse(localStorage.getItem("toolUsage") || "{}");
}

function saveUsage(usage){
localStorage.setItem("toolUsage", JSON.stringify(usage));
}


/* title counter */

title.innerText = `Commerce Tool Hub (${tools.length})`;


/* render */

function renderTools(list){

grid.innerHTML="";

const pinned = getPinned();
const usage = getUsage();

/* sort pinned first */

list.sort((a,b)=>{
return (pinned.includes(b.name) - pinned.includes(a.name));
});

list.forEach(tool=>{

const card=document.createElement("div");
card.className="tool-card";

const isPinned = pinned.includes(tool.name);
const count = usage[tool.name] || 0;

card.innerHTML = `

<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">

<span class="tool-name">${tool.name}</span>

<span class="pin" data-tool="${tool.name}" style="cursor:pointer">
${isPinned ? "⭐" : "☆"}
</span>

</div>

<div class="tool-desc">${tool.desc}</div>

<div style="font-size:12px;color:#888;margin-top:8px">
Opened ${count} times
</div>

`;

/* open tool */

card.onclick = (e)=>{

if(e.target.classList.contains("pin")) return;

const usage = getUsage();

usage[tool.name] = (usage[tool.name] || 0) + 1;

saveUsage(usage);

window.open(tool.url,"_blank");

renderTools(tools);

};

grid.appendChild(card);

});


/* pin buttons */

document.querySelectorAll(".pin").forEach(pin=>{

pin.onclick=(e)=>{

e.stopPropagation();

const toolName = pin.dataset.tool;

let pinned = getPinned();

if(pinned.includes(toolName)){

pinned = pinned.filter(t=>t!==toolName);

}else{

pinned.push(toolName);

}

savePinned(pinned);

renderTools(tools);

};

});

}


renderTools(tools);


/* search */

search.addEventListener("input",()=>{

const value = search.value.toLowerCase();

const filtered = tools.filter(t=>

t.name.toLowerCase().includes(value) ||

t.desc.toLowerCase().includes(value)

);

renderTools(filtered);

});
