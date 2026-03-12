const tools = [

{
title: "Flipkart Ads Analyzer",
desc: "Analyze campaign performance",
icon: "icons/ads.png",
url: "https://yourlink1.com"
},

{
title: "Listing Matrix",
desc: "Marketplace SKU visibility",
icon: "icons/listing.png",
url: "https://yourlink2.com"
},

{
title: "PDF Label Sorter",
desc: "Auto organize shipping labels",
icon: "icons/pdf.png",
url: "https://yourlink3.com"
},

{
title: "Payment Reconciliation",
desc: "Flipkart settlement analyzer",
icon: "icons/payment.png",
url: "https://yourlink4.com"
},

{
title: "GMV Analytics",
desc: "Sales and return insights",
icon: "icons/gmv.png",
url: "https://yourlink5.com"
},

{
title: "Demand Planning Engine",
desc: "Inventory forecasting tool",
icon: "icons/demand.png",
url: "https://yourlink6.com"
}

];

const grid = document.getElementById("toolGrid");

tools.forEach(tool => {

const card = document.createElement("div");

card.className = "tool-card";

card.innerHTML = `

<img src="${tool.icon}" class="tool-icon">

<div class="tool-title">${tool.title}</div>

<div class="tool-desc">${tool.desc}</div>

`;

card.onclick = () => {

window.open(tool.url,"_blank");

};

grid.appendChild(card);

});
