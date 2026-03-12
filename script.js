const tools = [

{
name:"Flipkart Ads Analyzer",
desc:"Campaign performance insights",
url:"https://yourlink1.com"
},

{
name:"Listing Matrix",
desc:"Marketplace SKU visibility",
url:"https://yourlink2.com"
},

{
name:"PDF Label Sorter",
desc:"Auto organize shipping labels",
url:"https://yourlink3.com"
},

{
name:"Payment Reconciliation",
desc:"Flipkart settlement analyzer",
url:"https://yourlink4.com"
},

{
name:"GMV Analytics",
desc:"Sales & return insights",
url:"https://yourlink5.com"
},

{
name:"Demand Planning Engine",
desc:"Inventory forecasting",
url:"https://yourlink6.com"
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
