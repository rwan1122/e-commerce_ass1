const products =[
    {
    id:1,
    name:"Black Wooden Chair",
    price:"1500 LE",
    image:"../images/chair1.jpg"
    },
    {
    id:2,
    name:"Brown Wooden Chair",
    price:"1200 LE",
    image:"../images/chair2.jpg"
    },
    {
    id:3,
    name:"Wooden and leather chair",
    price:"1750 LE",
    image:"../images/chair3.jpg"
    },
    {
    id:4,
    name:"Wooden Chair",
    price:"2000 LE",
    image:"../images/chair4.jpg"
    },
    {
    id:5,
    name:"Purple Chair",
    price:"1500 LE",
    image:"../images/chair5.jpg"
    },
    {
    id:6,
    name:"A chair made of wicker",
    price:"1300 LE",
    image:"../images/chair6.jpg"
    },
]

const searchBox =document.querySelector(".searchBox") 
const searchInput = document.querySelector(".searchInput")
const searchBtn = document.querySelector(".searchBtn")

searchProducts = () => {
    searchBox.classList.add("active-search");
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchValue);
    });
    searchInput.value = "";

    const searchResultsDiv = document.createElement("div");
    searchResultsDiv.classList.add("search-results");
    searchBox.appendChild(searchResultsDiv);

    if (filteredProducts.length === 0) {
        searchResultsDiv.innerHTML = "<p>No products found</p>";
        return;
    }

    filteredProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("search-result");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h6>${product.name}</h6>
            <p>${product.price}</p>
        `;
        searchResultsDiv.appendChild(productDiv);
    });
    
};

clearSearchResults = () => {
    searchBox.classList.remove("active-search");
    const searchResults = document.querySelector(".search-results");
    if (searchResults) {
        searchResults.remove();
    }
};

searchBtn.addEventListener("click", () => {
    clearSearchResults();
    if (searchInput.value === "") return;
    searchProducts();
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (searchInput.value === "") return;
        searchProducts();
    }
});

document.addEventListener("click", (e) => {
    const inInsideSearchBox = searchBox.contains(e.target);
    if (!inInsideSearchBox) {
        clearSearchResults();
    }
});