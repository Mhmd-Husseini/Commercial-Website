// laptops.js

// Function to fetch laptops data and display it in the table
function fetchAndDisplayLaptops() {
    const tableBody = document.getElementById('tbody');

    axios.get('http://127.0.0.1:8000/api/admin/laptops') // Replace 'your_api_url_here' with the actual API endpoint URL
        .then(response => {
            // Handle the response data
            const laptops = response.data.laptops;

            laptops.forEach(laptop => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${laptop.id}</td>
                    <td>${laptop.price}</td>
                    <td>${laptop.quantity}</td>
                    <td>${laptop.ram}</td>
                    <td><img src="${laptop.cpu}" alt="CPU Image"></td>
                    <td>${laptop.brand_id}</td>
                    <td>
                        <button onclick="editLaptop(${laptop.id})">Edit</button>
                        <button onclick="deleteLaptop(${laptop.id})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error(error);
        });
}

function editLaptop(laptopId) {
    console.log(`Edit laptop with ID: ${laptopId}`);
}

function deleteLaptop(laptopId) {
    console.log(`Delete laptop with ID: ${laptopId}`);
}

window.onload = fetchAndDisplayLaptops;
