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