function fetchAndDisplayLaptops() {
    const tableBody = document.getElementById('tbody');

    axios.get('http://127.0.0.1:8000/api/admin/laptops') 
        .then(response => {
            const laptops = response.data.laptops;

            laptops.forEach(laptop => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${laptop.id}</td>
                    <td>${laptop.price}</td>
                    <td>${laptop.quantity}</td>
                    <td>${laptop.ram}</td>
                    <td>${laptop.cpu}</td>
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

window.onload = fetchAndDisplayLaptops;


function deleteLaptop(laptopId) {
    axios.get(`http://127.0.0.1:8000/api/admin/delete/${laptopId}`)
        .then(response => {
            if(response.data.success){alert("Item deleted")};
            location.reload();
        })
        .catch(error => {
            console.error(error);
        });
}




