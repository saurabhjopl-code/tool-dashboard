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
name:"PDF label sorted",
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
}

{
name:"Image FInder",
desc:"Image FInder",
url:"https://saurabhjopl-code.github.io/sku-image-viewer/"
}

];


const grid = document.getElementById("toolGrid");


tools.forEach(tool=>{

const card = document.createElement("div");

card.className="tool-card";

card.innerHTML=`

<div class="tool-name">${tool.name}</div>

<div class="tool-desc">${tool.desc}</div>

`;

card.onclick=()=>{

window.open(tool.url,"_blank");

};

grid.appendChild(card);

});
