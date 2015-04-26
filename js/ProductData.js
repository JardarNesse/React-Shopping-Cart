module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Forsikring',
        image: 'forsikringer.png',
        description: 'Velg blandt våre forsikringer',
        variants: [
          {
            sku: '123123',
            type: 'Reise',
            price: 250.00,
            inventory: 6

          },
          {
            sku: '123124',
            type: 'Ulykke',
            price: 300.00,
            inventory: 10
          },
          {
            sku: '1231235',
            type: 'Bolig',
            price: 800.00,
            inventory: 10
          }
        ]
      }
    ]));
  }

};