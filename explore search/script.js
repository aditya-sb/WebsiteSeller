const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

menu.addEventListener("click", () => {
  // Toggle the 'active' class on the sidebar
  sidebar.classList.toggle("visible");
});

function navigateTo(url) {
  location.href = url;
}


const itemsPerPage = 2; // Change this value as per your requirement

// Calculate the total number of pages
const totalItems = document.querySelectorAll('.card').length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

// Function to generate page numbers
function generatePageNumbers() {
    const pageNumbersContainer = document.getElementById('pageNumbers');
    pageNumbersContainer.innerHTML = ''; // Clear previous page numbers

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
