const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const cards = document.querySelectorAll('.card');
const gridbtn = document.querySelector(".grid");
const tablebtn = document.querySelector(".table");
const rows = document.querySelectorAll(".tablerow");



menu.addEventListener("click", () => {
  // Toggle the 'active' class on the sidebar
  sidebar.classList.toggle("visible");
});

function navigateTo(url) {
  location.href = url;
}


function grid() {
  sessionStorage.setItem('displayPreference', 'grid');
  document.querySelector(".tableDisplay").style.display = "none";
  document.querySelector(".card").style.display = "flex";
  gridbtn.classList.add("activeDisplay");
  tablebtn.classList.remove("activeDisplay");
  document.querySelector(".tablepagination").style.display = "none";
  document.querySelector(".pagination").style.display = "flex";
}

function table() {
  sessionStorage.setItem('displayPreference', 'table');
  document.querySelector(".tableDisplay").style.display = "flex";
  document.querySelector(".card").style.display = "none";
  gridbtn.classList.remove("activeDisplay");
  tablebtn.classList.add("activeDisplay");
  document.querySelector(".tablepagination").style.display = "flex";
  document.querySelector(".pagination").style.display = "none";
}

gridbtn.addEventListener("click", grid);
tablebtn.addEventListener("click", table);

document.addEventListener("DOMContentLoaded", function () {
  // Remove the overlay once the page is fully loaded
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

const balance = document.querySelector(".balancebtn h4");
const lowbalwarning = document.querySelector(".lowBalWarning");
if (parseFloat(balance.innerText) < 5.00) lowbalwarning.style.display = "flex";
else lowbalwarning.style.display = "none";

const itemsPerPage = 5; // Change this value as per your requirement

// Calculate the total number of pages
const totalItems = cards.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

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
  currentPageButton.classList.add("active-page")
  currentPageButton.style.backgroundColor = "#7160e0";
  currentPageButton.style.color = "white";

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

const totalrows = rows.length;
const totalpagesrow = Math.ceil(totalrows / itemsPerPage);

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
  if (currentPage < totalrows) {
    navigateToPageTable(currentPage + 1);
  }
});



window.addEventListener('DOMContentLoaded', () =>{
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
generatepagenumbertable();
navigateToPageTable(1);
generatePageNumbers();
navigateToPage(1); 
