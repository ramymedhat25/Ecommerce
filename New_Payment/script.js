let productParent = document.getElementById("Products");

// Function to show products in the cart
function showProductsCart() {
  let products = JSON.parse(localStorage.getItem("cartItems"));
  if (products) {
    products.forEach((item) => {
      productParent.innerHTML += `
            <tr>
                <td><h3>${item.title}</h3></td>
                <td><p>${item.price}</p></td>
                <td><p>${item.description}</p></td>
            </tr>
            `;
    });
  }
}
