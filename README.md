# labee-backend
Labee is an API for organizing laboratory material inventory.

- About

Differents laboratories have some difficulty to organize their inventory. Labee intend to facilitate this proccess. With this API, profissionals can control their inventory from 5 product informations: name, description, brandName, expirationDate, typeName, stock. The database, build with Postgres, have three tables: productType, products and brands.

Here, we have 5 routers:

1. GET / - show all inventory
2.POST / - create a new product within inventory. 
- Object example: {"name": "Vortex", "description": "for plates", brandName: "ThermoFisher", expirationDate: "06/09/2100", typeName: "Equipamento", stock: "1"}
- If brand name and/or type name are not registred in database, it will be inserted.
3. GET /products/:productType - search product by product type
4. POST /products - take a product out of stock
- Object example: {"name": "Vortex"}
5. DELETE /products - take a product out of inventory
- Object example: {"name": "Vortex"}


- Technologies
Node.js, Express, TypeScript, SQL

- How to run
1. Clone this repository
2. Install dependencies: npm i
3. Run with: npm start
4. Access 

