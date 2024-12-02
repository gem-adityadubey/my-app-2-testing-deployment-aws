async function fetchMessage() {
    try {
      const response = await fetch("http://54.145.62.2:3000/api/health");
      const data = await response.json();
      document.getElementById("api-message").innerText = data.message;
    } catch (error) {
      document.getElementById("api-message").innerText = "Failed to fetch message from the backend.";
      console.error("Error fetching message:", error);
    }
  }
  
