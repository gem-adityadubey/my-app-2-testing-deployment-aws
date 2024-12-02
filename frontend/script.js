async function fetchMessage() {
    try {
      const response = await fetch("http://<EC2_PUBLIC_IP>:3000/api/health");
      const data = await response.json();
      document.getElementById("api-message").innerText = data.message;
    } catch (error) {
      document.getElementById("api-message").innerText = "Failed to fetch message from the backend.";
      console.error("Error fetching message:", error);
    }
  }
  