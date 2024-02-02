// document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
  // Replace 'http://localhost:3000/crypto/data' with your actual API endpoint
  fetch("http://localhost:3000/crypto/data")
    .then((response) => response.json())
    .then((data) => {
      // Handle the data as needed, for example, display it on the page
      displayCryptoData(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayCryptoData(data) {
  const cryptoDataElement = document.getElementById("cryptoData");

  // Assuming your data is an array of objects with some properties
  data.forEach((crypto) => {
    const cryptoElement = document.createElement("div");
    cryptoElement.innerHTML = `<p>${crypto.name}: ${crypto.price}</p>`;
    cryptoDataElement.appendChild(cryptoElement);
  });
}
