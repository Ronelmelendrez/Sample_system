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

function deleteProduct(button, productId){
    const row = button.closest("tr");
    const productItem = document.getElementById('productId');

     if (confirm("Are you sure you want to delete this product?")) {
     row.remove();
  
       if(productItem){
          productItem.remove();
       }
     }
}function deleteProduct(button, productId) {

    if (!confirm("Are you sure you want to delete this product?")) {
        return;
    }

    const row = button.closest("tr");

    if (row) {
        row.remove();
    }

    const productItem = document.getElementById(productId);

    if (productItem) {
        productItem.remove();
    }
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

    const productId = "product-" + Date.now();

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
    productItem.id = productId;

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


    const productListBody = document.getElementById('productListBody');

    const row = document.createElement('tr');

    row.id = `${productId}-row`;

    row.innerHTML = `
    <td>
      <div class="product-list-item">

        <h3>${productName}</h3>

        <div class="product-list-details">

          <p>₱${Number(productPrice).toFixed(2)}</p>

          <button
            class="actions-button"
            onclick="editProduct(this)"
          >
            <i class="fas fa-edit"></i>
          </button>

          <button
            class="actions-button"
            onclick="deleteProduct(this, '${productId}')"
          >
            <i class="fas fa-trash"></i>
          </button>

        </div>

      </div>
    </td>
  `;

    productListBody.appendChild(row);

    closeProductModal();

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productUnit").value = "";
}