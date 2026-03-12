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

title.innerText = `Commerce Tool Hub (${tools.length})`;


function renderTools(list){

grid.innerHTML="";

list.forEach(tool=>{

const card=document.createElement("div");

card.className="tool-card";

card.innerHTML=`

<div class="tool-name">${tool.name}</div>
<div class="tool-desc">${tool.desc}</div>

`;

card.onclick=()=>window.open(tool.url,"_blank");

grid.appendChild(card);

});

}

renderTools(tools);


/* SEARCH */

search.addEventListener("input",()=>{

const value=search.value.toLowerCase();

const filtered=tools.filter(t=>

t.name.toLowerCase().includes(value) ||

t.desc.toLowerCase().includes(value)

);

renderTools(filtered);

});
