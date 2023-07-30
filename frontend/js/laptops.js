function fetchLaptops() {
  
    axios
      .get(`http://127.0.0.1:8000/api/buyers/laptops`)
      .then((response) => {
        console.log(response)
        const lapsData = response.data.laptops;
        const laptopsContainer = document.querySelector("#container-showroom");
  
        lapsData.forEach((lap) => {
          const laptopCard = document.createElement("div");
          laptopCard.classList.add("card");
  
          laptopCard.innerHTML = `
                <img src="${lap.cpu}"/>
            <div class="card-title"><h3>${(lap.description.toString())}</h3></div>
            <div class="card-title-classes"><h5>${lap.ram}</h5></div>
            <div class="card-title-classes"><h4>${lap.price}$</h4></div>
            <button  onclick="addToCart(${lap.id})" data-classid="$${lap.id}"> Add To Cart
            </button>
            <button onclick="addToCart(${lap.id}, '${lap.description}', ${lap.price})" data-classid="$${lap.id}"> Add To Cart</button>
            </button>
          `;
          laptopsContainer.appendChild(laptopCard);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
  }

  document.addEventListener("DOMContentLoaded", () => {
    fetchLaptops();
  });

  function addToCart(id, description, price) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingCartItem = cartItems.find((item) => item.id === id);
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      cartItems.push({
        id: id,
        description: description,
        price: price,
        quantity: 1,
      });
    }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  
  


