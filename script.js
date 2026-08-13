function openStockModal() {
    document.getElementById('stockModal').style.display = 'flex';
}

function openProductModal(){
    document.getElementById('productModal').style.display = 'flex';
}

function closeStockModal() {
    document.getElementById('stockModal').style.display = 'none';
}

function closeProductModal(){
    document.getElementById('productModal').style.display = 'none';
}

function addStock() {
    const product = document.getElementById('productSelect').value;
    const quantity = document.getElementById('stockQuantity').value;
    
    if(!product){
        alert('Please enter a product name.');
        return;
    }

    if(!quantity || quantity <= 0){
        alert('Please enter a valid quantity.');
        return;
    }

const tableBody = document.getElementById("inventoryTableBody")

const date = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
});

const row = document.createElement("tr");

  row.innerHTML = `
    <td>${product}</td>
    <td>Stock In</td>
    <td>+${quantity} Pcs</td>
    <td>${date}</td>
  `;

 tableBody.appendChild(row);

 closeStockModal();

 document.getElementById('productSelect').value = '';
 document.getElementById('stockQuantity').value = '';
}