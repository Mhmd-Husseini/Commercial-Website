function showCart() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const tbody = document.getElementById("cart-items");

    tbody.innerHTML = "";

    cartItems.forEach((item) => {
      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      idCell.textContent = item.id;
      const quantityCell = document.createElement("td");
      quantityCell.textContent = item.quantity;
      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        showCart();
      });
      deleteCell.appendChild(deleteButton);
      row.appendChild(idCell);
      row.appendChild(quantityCell);
      row.appendChild(deleteCell);
      tbody.appendChild(row);
    });
  }
  showCart();

  document.getElementById('place-order').addEventListener('click', function () {
    let shipping_address = document.getElementById('shipping-address').value;
    let user_id = localStorage.getItem("user_id");
    let cart_array = JSON.parse(localStorage.getItem("cartItems"));

    let order = {
        shipping_address: shipping_address,
        user_id: user_id,
        cart_items: cart_array 
    };
    console.log(order);

    let formData = new URLSearchParams();
    formData.append('shipping_address', shipping_address);
    formData.append('user_id', user_id);
    cart_array.forEach((item, index) => {
        formData.append(`cart_items[${index}][item_id]`, item.id);
        formData.append(`cart_items[${index}][quantity]`, item.quantity);
    });

    let token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.post('http://127.0.0.1:8000/api/buyers/order', formData,)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
});
