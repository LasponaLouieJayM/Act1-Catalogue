const apiUrl = 'json_data.json';

async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const productList = document.getElementById('apps');

        productList.innerHTML = '';
            //   Elements
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productDescription = document.createElement('h5');
            productDescription.textContent = product.Description;

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: $${product.price}`;

            const productDate = document.createElement('h4');
            productDate.textContent = product.Date;

            const productButs = document.createElement('button');
            productDate.textContent = product.button;
      
            const productline = document.createElement('hr');
            productCard.classList.add('product-line');

        //  Products
            productCard.appendChild(productName);

            productCard.appendChild(productDescription);  

            productCard.appendChild(productPrice);

            productCard.appendChild(productDate);
            
            productCard.appendChild(productline);

            productCard.appendChild(productButs);

            productList.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndDisplayProducts();

