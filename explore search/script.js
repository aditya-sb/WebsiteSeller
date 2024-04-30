const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const cards = document.querySelectorAll('.card');
const gridbtn = document.querySelector(".grid");
const tablebtn = document.querySelector(".table");


const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const dokanApiUrl = 'https://mediumorchid-cod-200838.hostingersite.com//wp-json/dokan/v1/products';
const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21lZGl1bW9yY2hpZC1jb2QtMjAwODM4Lmhvc3RpbmdlcnNpdGUuY29tIiwiaWF0IjoxNzE0NDYzODU5LCJuYmYiOjE3MTQ0NjM4NTksImV4cCI6MTcxNTA2ODY1OSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.aC--5jOIsFyMSVgp3sAesq2rmhtXnPwk5zopG0hk0D8';

// Set up headers for authentication
const headers = new Headers();
headers.append('Authorization', `Bearer ${jwtToken}`);

// Fetch products using the Dokan API
fetch(proxyUrl+dokanApiUrl, {
  method: 'GET',
  headers: headers
})      
.then(response => {
  // Check if the response is successful (status code 200)
  if (response.ok) {
    return response.json(); // Parse JSON data
  } else {
    throw new Error(`Failed to fetch products: ${response.status} - ${response.statusText}`);
  }
})
.then(products => {
  // Process the fetched products
  products.forEach(product => {
    // Example: Log the name of each product
    console.log(product.name);
  });
})
.catch(error => {
  // Handle errors
  console.error(error);
});



menu.addEventListener("click", () => {
  // Toggle the 'active' class on the sidebar
  sidebar.classList.toggle("visible");
});

function navigateTo(url) {
  location.href = url;
}

document.querySelector(".tableDisplay").style.display="none"
gridbtn.classList.add("activeDisplay");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("grid") || e.target.parentNode.classList.contains("grid")) {
      document.querySelector(".tableDisplay").style.display="none"
      document.querySelector(".card").style.display="flex"
      gridbtn.classList.add("activeDisplay");
      tablebtn.classList.remove("activeDisplay");
  }
  if (e.target.classList.contains("table") || e.target.parentNode.classList.contains("table")) {
    document.querySelector(".tableDisplay").style.display="flex"  
      document.querySelector(".card").style.display="none"
      gridbtn.classList.remove("activeDisplay");
      tablebtn.classList.add("activeDisplay");
  }
});


document.addEventListener("DOMContentLoaded", function() {
  // Remove the overlay once the page is fully loaded
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});


const balance = document.querySelector(".balancebtn h4");
const lowbalwarning = document.querySelector(".lowBalWarning");
if(parseFloat(balance.innerText)<5.00)lowbalwarning.style.display="flex";
else lowbalwarning.style.display="none";




const itemsPerPage = 2; // Change this value as per your requirement

// Calculate the total number of pages
const totalItems = cards.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

// Function to generate page numbers
function generatePageNumbers() {
    const pageNumbersContainer = document.getElementById('pageNumbers');
    // pageNumbersContainer.innerHTML = ''; 

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.textContent = i;
        pageNumber.addEventListener('click', () => navigateToPage(i));
        pageNumbersContainer.appendChild(pageNumber);
    }
}

// Function to navigate to a specific page
function navigateToPage(pageNumber) {
    const cards = document.querySelectorAll('.card');
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentPageButton = document.querySelector(`#pageNumbers button:nth-child(${pageNumber})`);
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

// Initial setup
generatePageNumbers();
navigateToPage(1); // Display the first page initially

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
