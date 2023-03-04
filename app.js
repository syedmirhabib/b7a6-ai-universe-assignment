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