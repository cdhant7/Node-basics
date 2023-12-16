// Function that returns a promise to simulate an asynchronous operation
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const success = true; // Change this to false to simulate a failure
        if (success) {
          resolve("Data successfully fetched!");
        } else {
          reject("Error fetching data");
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Using async/await
  async function fetchDataAsync() {
    try {
      const data = await fetchData();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log("Finally block - This will be executed regardless of success or failure");
    }
  }
  
  // Call the async function
  fetchDataAsync();

  