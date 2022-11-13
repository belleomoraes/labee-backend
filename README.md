# labee-backend
Labee is an API for organizing laboratory material inventory.

Try it out now at https://labee-backend.herokuapp.com/

## About

Different laboratories have some difficulty to organize their inventory. Labee intend to facilitate this proccess. 

With this API, profissionals can control their inventory from 5 product informations: name, description, brandName, expirationDate, typeName, stock. 

The database, build with Postgres, have three tables: productType, products and brands.

Below are the implemented features:
1. List all inventory <b>(route GET('/'))</b>
2. Create a new product within inventory <b>(route POST('/'))</b> 
- JSON example: 
```bash
{
    "name": "Vortex", 
    "description": "for plates",
    "brandName": "ThermoFisher", 
    "expirationDate": "06/09/2100", 
    "typeName": "Equipamento", 
    "stock": "1"
}
```

- If brand name and/or type name are not registred in database, it will be inserted.
3. Search product by product type <b>(route GET ('/products/:productType')</b>
4. Take a product out of stock <b>(route POST ('/products')) </b>
- JSON example: 
```bash
{"name": "Vortex"}
```
5. Take a product out of inventory <b>(route DELETE(/products))</b> 
- JSON example: 
```bash
{"name": "Vortex"}
```


## Technologies
Node.js, Express, TypeScript, PostgresSQL, Joi, Cors

## How to run
1. Clone this repository
2. Install dependencies: npm i
3. Run with: npm start
4. Access in ThunderCLient: https://labee-backend.herokuapp.com/


