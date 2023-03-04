// Function to fetch all data from the API
async function fetchAllData() {
    const url = "https://openapi.programming-hero.com/api/ai/tools";
    
    // Activate loader
    loaderActive(true);
    
    try {
    // Fetch data from API
    const response = await fetch(url);
    const data = await response.json();
  
     // Display first 6 tools
  displayAllData(data.data.tools.slice(0, 6));
  
    } catch (error) {
      console.log(error);
    }
  };



  //  Displays all the data in the card container.
const displayAllData = (data) => {
    const cardContainer = document.getElementById("card__container");
    cardContainer.innerHTML = "";
    
    // Add event listener to the sort button
    const sortBtn = document.getElementById("sort");
    sortBtn.addEventListener("click", () => {
    objectSort(data);
    });
    
    // Loop through each item in the data array and create a card element
    data.forEach((item) => {
    const { image, features, name, published_in, id } = item;
      // Create the card element
  const card = document.createElement("div");
  card.classList.add("card", "bg-base-100", "shadow-xl", "border", "hover:-translate-y-3", "transition");
  card.innerHTML = `
     <figure class="p-3">
       <img
         class="h-[16rem] w-full rounded-md"
         src=${image}
         alt="Shoes"
       />
     </figure>
     <div class="card-body">
       <h2 class="card-title">Features</h2>
       <ul>
         ${featureContentDisplay(features)}
         <hr class="my-5 h-[1px] bg-teal-300/30">
       </ul>
  
       <div class="flex justify-between items-center">
         <div class="space-y-3">
           <p class="card-title">${name}</p>
           <p class="flex items-center gap-2 text-[12px] font-semibold text-gray-600">
             <i class="ri-calendar-2-line text-lg"></i>
             ${published_in}
           </p>
         </div>
  
         <div class="cursor-pointer">
           <label for='my-modal'>
             <i onclick="fetchSingleData('${id}')"
               class="ri-arrow-right-line w-10 h-10 bg-rose-400/30 p-2 rounded-full text-rose-700 transition hover:bg-rose-400/40 text-lg"
             ></i>
           </label>
         </div>
       </div>
     </div>
   `;
  
  // Append the card element to the card container
  cardContainer.appendChild(card);
  
  });
  
  // Hide the loader
  loaderActive(false);
  };



  // Function to display social contact information
function displaySocialContact(items) {
    // If there are no social contact items available, show a default message
    items = items ? items : "No Data Available";
    
    let liHtml = "";
    // Loop through each social contact item and generate the HTML
    items.forEach((item) => {
    liHtml += <li> ${item ? item : "No Data found"}</li> ;
    });
    
    // Return the HTML
    return liHtml;
  }