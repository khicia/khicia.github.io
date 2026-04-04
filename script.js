// SELECT ELEMENTS
const filterButtons = document.querySelectorAll(".filter-btn");
const techCards = document.querySelectorAll(".tech-card");
const searchInput = document.getElementById("tech-search");

let currentFilter = "all";


// FILTER FUNCTION
function filterTech() {

    const searchValue = searchInput.value.toLowerCase();

    techCards.forEach(card => {

        const category = card.dataset.category;
        const name = card.dataset.name;

        const matchesFilter =
            currentFilter === "all" || category === currentFilter;

        const matchesSearch =
            name.includes(searchValue);

        if (matchesFilter && matchesSearch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// FILTER BUTTON CLICK
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        filterTech();

    });

});


// SEARCH INPUT
searchInput.addEventListener("keyup", filterTech);

