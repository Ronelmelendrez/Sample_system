function openStockModal() {
    document.getElementById('stockModal').style.display = 'flex';
}

function closeStockModal() {
    document.getElementById('stockModal').style.display = 'none';
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


console.log("Product:", product);
console.log("Quantity:", quantity);

 closeStockModal();

 document.getElementById('productSelect').value = '';
 document.getElementById('stockQuantity').value = '';
}