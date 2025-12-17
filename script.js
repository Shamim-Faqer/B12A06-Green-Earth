const showLoad = () => {
  document.getElementById("loader").classList.remove("hidden");
};



const hideLoad = () => {
  document.getElementById("loader").classList.add("hidden");
};



// Load Categories
const loadCatagories = () => {
  fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => {
      displayCatagories(data.categories);
    })
    .catch(err => console.error(err));
};



// Display Categories
const displayCatagories = (categories) => {
  const catDiv = document.getElementById("catDiv");
  catDiv.innerHTML = "";

  categories.forEach(category => {
    const div = document.createElement("div");
    div.innerHTML = `
      <button 
        onclick="cataLoad(${category.id})"
        class="btn justify-start w-full btn-soft btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg cursor-pointer font-semibold">
        ${category.category_name}
      </button>
    `;
    catDiv.appendChild(div);
  });
};



// Load All Plants
const loadAllPlants = () => {
  showLoad();
  fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(data => {
      renderPlants(data.plants);
      hideLoad();
    })
    .catch(err => console.error(err));
    hideLoad();
};



// Load Category Wise Plants
const cataLoad = (id) => {
  showLoad();
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => {
      renderPlants(data.plants);
      hideLoad();
    })
    .catch(err => console.error(err));
    hideLoad();
};



// All merged function
const renderPlants = (plants) => {
  const container = document.getElementById("allPlantsDiv");
  container.innerHTML = "";

  plants.forEach(plant => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="bg-white rounded shadow p-4">
        <div class="h-fit bg-gray-200 rounded mb-3">
          <img src="${plant.image}" alt="${plant.name}">
        </div>



        <h3 
          onclick="plantDetails(${plant.id})"
          class="font-bold cursor-pointer hover:text-green-600 mb-1">
          ${plant.name}
        </h3>


        <p class="text-sm text-gray-600 mb-3">
          ${plant.description}
        </p>

        <div class="flex justify-between mb-3">
          <span class="badge badge-success badge-outline">
            ${plant.category}
          </span>
          <span class="font-bold text-green-700">
            ${plant.price}
          </span>
        </div>

        <button onclick="loadCart(${plant.id})" class="btn btn-success btn-sm w-full">
          Add to Cart
        </button>
      </div>
    `;
    container.appendChild(card);
  });
};



// Load Plant details
const plantDetails = (id) => {
  showLoad();
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      displayPlantDetails(data.plants);
      hideLoad();
    })
    .catch(err => console.error(err));
    hideLoad();
  
};



// Display Plant details
const displayPlantDetails = (details) => {
  console.log(details);
  const detailsDiv = document.getElementById("detailsDiv");
  detailsDiv.innerHTML=`<h3 class="text-lg font-bold">Name - ${details.name}</h3>
    <p class="py-4">Info - ${details.description}</p>
    <p class="py-4">Price - ${details.price}</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>`;
  document.getElementById("my_modal_5").showModal();
  
  
};



// Add to Cart Load
const loadCart = (id) => {
  showLoad();
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      displayCart(data.plants);
      hideLoad();
    })
    .catch(err => console.error(err));
    hideLoad();
};

// Add to Cart Display
let total = 0;

const displayCart = (item) => {
  const cartDiv = document.getElementById("cartDiv");

  const cartEle = document.createElement("div");
  cartEle.className = "flex justify-between p-2 border-b items-center";

  cartEle.innerHTML = `
    <span>${item.name}</span>

    <div class="flex gap-2 items-center">
      <span class="price">${item.price}</span>
      <button class="btn btn-xs btn-error">X</button>
    </div>
  `;

  //  REMOVE BUTTON 
  const removeBtn = cartEle.querySelector("button");
  removeBtn.addEventListener("click", () => {
    total -= Number(item.price);
    document.getElementById("totalsDiv").innerText = total;
    cartEle.remove(); 
  });

  cartDiv.appendChild(cartEle);

  total += Number(item.price);
  document.getElementById("totalsDiv").innerText = total;
};



// Initial Calls
loadCatagories();
loadAllPlants();