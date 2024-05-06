const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
let cards = document.querySelectorAll('.card');
const gridbtn = document.querySelector(".grid");
const tablebtn = document.querySelector(".table");
let rows = document.querySelectorAll(".tablerow");
const formdiv = document.querySelector(".form");
const cardsContainer = document.querySelector(".innercards");
const tableContainer = document.querySelector(".tableDisplay");
let products = [1,2];


menu.addEventListener("click", () => {
  // Toggle the 'active' class on the sidebar
  sidebar.classList.toggle("visible");
});

function navigateTo(url) {
  location.href = url;
}


const dokanApiUrl = 'https://mediumorchid-cod-200838.hostingersite.com//wp-json/dokan/v1/products';
const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21lZGl1bW9yY2hpZC1jb2QtMjAwODM4Lmhvc3RpbmdlcnNpdGUuY29tIiwiaWF0IjoxNzE0NDYzODU5LCJuYmYiOjE3MTQ0NjM4NTksImV4cCI6MTcxNTA2ODY1OSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.aC--5jOIsFyMSVgp3sAesq2rmhtXnPwk5zopG0hk0D8';


function fetchgrid(products){
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card'); 
    const cardcontent = document.createElement('div');
    cardcontent.classList.add('card-content');
    card.appendChild(cardcontent);
    const tags = document.createElement('div');
    tags.classList.add('tags');
    product.categories.forEach(tag => {
      const span = document.createElement('span');
      const img = document.createElement('img');
      img.src = "../icons/icons8-check-30.png"; // Set image source correctly
      const spantag = document.createElement('span');
      spantag.textContent = tag.name;
      tags.appendChild(span);
      span.appendChild(img);
      span.appendChild(spantag);
    });
    
    const website = document.createElement('div');
    website.classList.add('website');
    const websitelink = document.createElement('a');
    websitelink.href = product.permalink;
    websitelink.textContent = product.slug;
    website.appendChild(websitelink);


    const websitename = document.createElement('div');
    websitename.classList.add('website-name');
    const hname = document.createElement('h5');
    hname.textContent=product.name;
    websitename.appendChild(hname);

    const category = document.createElement('div');
    category.classList.add('categories');
    product.tags.forEach(tag=>{
      const span = document.createElement('span');
      span.textContent= tag.name;
      category.appendChild(span);
    })

    const info = document.createElement('div');
    info.classList.add('info');
    const imginfo = document.createElement('img');
    imginfo.src="../icons/icons8-info-30 (1).png";
    const spaninfo = document.createElement('span');
    spaninfo.textContent="View Site Info";
    info.appendChild(imginfo);
    info.appendChild(spaninfo);
    
    cardsContainer.appendChild(card); 
    cardcontent.appendChild(tags); 
    cardcontent.appendChild(website);
    cardcontent.appendChild(websitename)
    cardcontent.appendChild(category);
    cardcontent.appendChild(info);




    const pricecontainer = document.createElement('div');
    pricecontainer.classList.add('price');
    const h2price = document.createElement('h2');
    h2price.textContent=`$ ${product.price}`;
    const buttonprice = document.createElement('button');
    buttonprice.textContent="Buy Now";
    const aprice = document.createElement('a');
    aprice.textContent="Add to Campaigns";
    pricecontainer.appendChild(h2price);
    pricecontainer.appendChild(buttonprice);
    pricecontainer.appendChild(aprice);
    card.appendChild(pricecontainer);




    cards = document.querySelectorAll('.card');
    totalItems = cards.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);


    generatePageNumbers();
    navigateToPage(1); 
  })
}
function fetchtable(products){
  products.forEach(product => {
    const table = document.querySelector('table');
    const tr = document.createElement('tr');
    tr.classList.add('tablerow');
    const tdname = document.createElement('td');
    tdname.classList.add('tabledata');
    const spanname = document.createElement('span');
    spanname.textContent=product.name;
    const camp = document.createElement('a');
    camp.textContent="Add to Campaign";
    tdname.appendChild(spanname);
    tdname.appendChild(camp);

    const tdda = document.createElement('td');
    const spanda = document.createElement('span');
    spanda.classList.add('box');
    spanda.textContent=product.da?product.da:"n/a";
    tdda.appendChild(spanda);
    

    const tddr = document.createElement('td');
    const spandr = document.createElement('span');
    spandr.classList.add('box');
    spandr.textContent=product.dr?product.dr:"n/a";
    tddr.appendChild(spandr);
    

    const tdtraffic = document.createElement('td');
    const spantraffic = document.createElement('span');
    spantraffic.classList.add('box');
    spantraffic.textContent=product.traffic?product.traffic:"n/a";
    tdda.appendChild(spantraffic);
    

    const tdsc = document.createElement('td');
    const spansc = document.createElement('span');
    spansc.classList.add('box');
    spansc.textContent=product.sc?product.sc:"n/a";
    tdsc.appendChild(spansc);
    

    const tdlinks = document.createElement('td');
    const spanlinks = document.createElement('span');
    spanlinks.classList.add('box');
    spanlinks.textContent=product.links?product.links:"dofollow";
    tdda.appendChild(spanlinks);
    

    const tdgp = document.createElement('td');
    tdgp.classList.add('linkbox');
    const buttongp = document.createElement('button');
    const spangp = document.createElement('span');
    spangp.textContent = "Buy";
    h4gp = document.createElement('h4');
    h4gp.textContent=`($${product.price})`;
    buttongp.appendChild(spangp);
    buttongp.appendChild(h4gp);
    tdgp.appendChild(buttongp);
    

    const tdli = document.createElement('td');
    tdli.classList.add('linkbox');
    const buttonli = document.createElement('button');
    const spanli = document.createElement('span');
    spanli.textContent = "Buy";
    h4li = document.createElement('h4');
    h4li.textContent=`($${product.price})`;
    buttonli.appendChild(spanli);
    buttonli.appendChild(h4li);
    tdli.appendChild(buttonli);
    

    const tdgn = document.createElement('td');
    tdgn.classList.add('gn');
    tdgn.textContent="View all";
    

    const tdaction = document.createElement('td');
    tdaction.classList.add('action')
    const actionbtn = document.createElement('button');
    actionbtn.textContent="View";
    tdaction.appendChild(actionbtn);
    

    tr.appendChild(tdname);
    tr.appendChild(tdda);
    tr.appendChild(tddr);
    tr.appendChild(tdtraffic);
    tr.appendChild(tdsc);
    tr.appendChild(tdlinks);
    tr.appendChild(tdgp);
    tr.appendChild(tdli);
    tr.appendChild(tdgn);
    tr.appendChild(tdaction);
    table.appendChild(tr);


  rows = document.querySelectorAll('.tablerow');
  totalrows = rows.length;
  totalpagesrow = Math.ceil(totalrows / itemsPerPage);

    generatepagenumbertable();
    navigateToPageTable(1);
  });
}

async function fetchProducts() {
  try {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${jwtToken}`);
    
    const response = await fetch(dokanApiUrl, {
      method: 'GET',
      headers: headers
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} - ${response.statusText}`);
    }
    
    products = await response.json();
    
    
    products.forEach(product =>{
      console.log(product);
    }
  )

  fetchtable(products);
  fetchgrid(products);

  } catch (error) {
    console.error(error);
  }
}

function grid() {
  sessionStorage.setItem('displayPreference', 'grid');
  tableContainer.style.display = "none";
  cardsContainer.style.display="block";
  gridbtn.classList.add("activeDisplay");
  tablebtn.classList.remove("activeDisplay");
  document.querySelector(".tablepagination").style.display = "none";
  document.querySelector(".pagination").style.display = "flex";
  
}

function table() {
  sessionStorage.setItem('displayPreference', 'table');
  tableContainer.style.display = "flex";
  cardsContainer.style.display="none";
  gridbtn.classList.remove("activeDisplay");
  tablebtn.classList.add("activeDisplay");
  document.querySelector(".tablepagination").style.display = "flex";
  document.querySelector(".pagination").style.display = "none";
}

// Fetch products when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

// Initialize variables for totalItems and totalPages
let totalItems = 0;
let totalPages = 0;

const balance = document.querySelector(".balancebtn h4");
const lowbalwarning = document.querySelector(".lowBalWarning");
if (parseFloat(balance.innerText) < 5.00) lowbalwarning.style.display = "flex";
else lowbalwarning.style.display = "none";

const itemsPerPage = 5; // Change this value as per your requirement


// Function to generate page numbers
function generatePageNumbers() {
  const pageNumbersContainer = document.getElementById('pageNumbers');
  pageNumbersContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement('button');
    pageNumber.textContent = i;
    pageNumber.addEventListener('click', () => navigateToPage(i));
    pageNumbersContainer.appendChild(pageNumber);
  }
}

// Function to navigate to a specific page
function navigateToPage(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const allpagebutton = document.querySelectorAll("#pageNumbers button");
  allpagebutton.forEach(button => {
    button.classList.remove("active-page")
  button.style.backgroundColor = "";
  button.style.color = "";
  });

  const currentPageButton = document.querySelector(`#pageNumbers button:nth-child(${pageNumber})`);
  if (currentPageButton) {
    currentPageButton.classList.add("active-page");
    currentPageButton.style.backgroundColor = "#7160e0";
    currentPageButton.style.color = "white";
  }

  cards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Event listeners for previous and next buttons
document.getElementById('previousPage').addEventListener('click', () => {
  const currentPage = parseInt(document.querySelector('.active-page').textContent);
  if (currentPage > 1) {
    navigateToPage(currentPage - 1);
  }
});

document.getElementById('nextPage').addEventListener('click', () => {
  const currentPage = parseInt(document.querySelector('.active-page').textContent);
  if (currentPage < totalPages) {
    navigateToPage(currentPage + 1);
  }
});

let totalrows = 0;
let totalpagesrow = 0;

function generatepagenumbertable() {
  const pageNumbersContainerrow = document.getElementById('tpageNumbers');
  pageNumbersContainerrow.innerHTML = '';

  for (let i = 1; i <= totalpagesrow; i++) {
    const pageNumberrow = document.createElement('button');
    pageNumberrow.textContent = i;
    pageNumberrow.addEventListener('click', () => navigateToPageTable(i));
    pageNumbersContainerrow.appendChild(pageNumberrow);
  }
}
function navigateToPageTable(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const allpagebutton = document.querySelectorAll("#tpageNumbers button");
  allpagebutton.forEach(button => {
    button.classList.remove("tactive-page")
  button.style.backgroundColor = "";
  button.style.color = "";
  });

  const currentPageButton = document.querySelector(`#tpageNumbers button:nth-child(${pageNumber})`);
  currentPageButton.classList.add("tactive-page")
  currentPageButton.style.backgroundColor = "#7160e0";
  currentPageButton.style.color = "white";

  rows.forEach((row, index) => {
    if (index >= startIndex && index < endIndex) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  });
}

document.getElementById('tpreviousPage').addEventListener('click', () => {
  const currentPage = parseInt(document.querySelector('.tactive-page').textContent);
  if (currentPage > 1) {
    navigateToPageTable(currentPage - 1);
  }
});

document.getElementById('tnextPage').addEventListener('click', () => {
  const currentPage = parseInt(document.querySelector('.tactive-page').textContent);
  if (currentPage < totalpagesrow) {
    navigateToPageTable(currentPage + 1);
  }
});


gridbtn.addEventListener('click',grid);
tablebtn.addEventListener('click',table);


window.addEventListener('DOMContentLoaded', () =>{
  fetchProducts();
  const displayPreference = sessionStorage.getItem('displayPreference');

// Set initial display based on localStorage value or default to grid
if (displayPreference === 'table') {
  table();
  
} else if(displayPreference === 'grid') {
  grid();
}
else{
  grid();
}
});
