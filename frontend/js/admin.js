function fetchAndDisplayLaptops() {
    const tableBody = document.getElementById('tbody');
    let token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
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

document.addEventListener('DOMContentLoaded', function () {

document.getElementById('add').addEventListener('click', function () {
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quant').value;
    let ram = document.getElementById('ram').value;
    let cpu = document.getElementById('img').value;
    let brand_id = document.getElementById('brand_id').value;
    let description = document.getElementById('description').value;

    let item = {
        price: price,
        quantity: quantity,
        ram: ram,
        cpu: cpu,
        brand_id: brand_id,
        description: description,
    };

    let token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    axios.post('http://127.0.0.1:8000/api/admin/add', item)
        .then(response => {
            if(response.data.success){
            alert("Item Added Successfully")}
            location.reload();
        })
        .catch(error => {
            console.error(error);
        });
});
})

document.getElementById('logout').addEventListener('click', function () {
    localStorage.clear();
    window.location.href = 'login.html';
})

