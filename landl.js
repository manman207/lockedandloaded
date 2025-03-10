const productItem = document.querySelectorAll('.product-items');

productItem.forEach(item => {
    item.addEventListener('click', function(){
        const itemData = {
            name: this.querySelector('small').textContent,
            image: this.querySelector('img').src,
            price: this.querySelector('h3').textContent
        }
    

        localStorage.setItem('selectedItem', JSON.stringify(itemData));

        window.location.href = 'checkout.html';
    });
});

