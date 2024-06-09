// Function to fetch and display JSON data in Bootstrap cards
async function fetchAndDisplayProductData() {
    try {
        const response = await fetch('products.json');
        //const response = await fetch('https://spx.mk/collections/katalog.oembed');
        const data = await response.json();

        const productCardsContainer = document.getElementById('product-cards');
        console.log(data);
        data.forEach(product => {
            //const productLink = `https://spx.mk/products/${product.product_id}`;
            //const imageUrl = product.thumbnail_url.startsWith('//') ? `https:${product.thumbnail_url}` : product.thumbnail_url;
            const cardHtml = `
            <div class="col-md-4 mb-4">
                <a href="${product.ProductLink}" target="_blank" class="text-decoration-none text-dark">
                    <div class="card h-100">
                        <img src="${product.ImageUrl}" class="card-img-top" alt="${product.Title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.Title}</h5>
                            <!-- <p class="card-text"></p> -->
                            <!-- <p class="card-text"><strong>Brand:</strong></p> -->
                            <p class="card-text">
                                <strong>Price:</strong> ${product.PriceRegular}<br>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        `;
            // const cardHtml = `
            //     <div class="col-md-4 mb-4">
            //         <a href="${productLink}" target="_blank" class="text-decoration-none text-dark">
            //             <div class="card h-100">
            //                 <img src="${imageUrl}" class="card-img-top" alt="${product.title}">
            //                 <div class="card-body">
            //                     <h5 class="card-title">${product.title}</h5>
            //                     <p class="card-text">${product.description}</p>
            //                     <p class="card-text"><strong>Brand:</strong> ${product.brand}</p>
            //                     ${product.offers.map(offer => `
            //                         <p class="card-text">
            //                             <strong>Offer:</strong> ${offer.title}<br>
            //                             <strong>Price:</strong> ${offer.price} ${offer.currency_code}<br>
            //                             <strong>In Stock:</strong> ${offer.in_stock ? 'Yes' : 'No'}
            //                         </p>
            //                     `).join('')}
            //                 </div>
            //             </div>
            //         </a>
            //     </div>
            // `;
            productCardsContainer.insertAdjacentHTML('beforeend', cardHtml);
        });
    } catch (error) {
        console.error('Error fetching or parsing JSON data:', error);
    }
}

// Call the function to fetch and display the data
fetchAndDisplayProductData();

