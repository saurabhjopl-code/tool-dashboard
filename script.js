const apps = [

{
name: "Flipkart Ads Analyzer",
url: "https://yourlink1.com"
},

{
name: "Listing Matrix Tool",
url: "https://yourlink2.com"
},

{
name: "PDF Label Sorter",
url: "https://yourlink3.com"
},

{
name: "Payment Reconciliation",
url: "https://yourlink4.com"
},

{
name: "GMV Analytics",
url: "https://yourlink5.com"
},

{
name: "Demand Planning Engine",
url: "https://yourlink6.com"
}

];

const grid = document.getElementById("appGrid");

apps.forEach(app => {

const card = document.createElement("div");

card.className = "app-card";

card.innerHTML = `<div class="app-title">${app.name}</div>`;

card.onclick = () => {
window.open(app.url, "_blank");
};

grid.appendChild(card);

});
