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



function addProduct(){

    const productName = document.getElementById('productName').value.trim();
    const productPrice = document.getElementById('productPrice').value;
    const productUnit = document.getElementById('productUnit').value;

    if(!productName){
        alert('Please enter a product name.');
        return;
    }

    if(!productPrice || productPrice <= 0){
        alert('Please enter a valid price.');
        return;
    }

    if(!productUnit){
        alert('Please select a product unit.');
    }

    const productsContainer = document.getElementById('productsContainer');

    const productItem = document.createElement('div');
    
    productItem.className = 'product-item';

    productItem.innerHTML = `
      <div class="product-card">
        <h3>${productName}</h3>

        <h2>
          <span>0</span> ${productUnit}
        </h2>

        <p>On hand</p>
    </div>
    `;

    productsContainer.appendChild(productItem);



    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productUnit").value = "";
}