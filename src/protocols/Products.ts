type ProductEntity = {
    id: number,
    name: string, 
    description: string, 
    brandName: string, 
    expirationDate: string | number | Date, 
    typeName: string, 
    stock: string | number
}
type Product = Omit<ProductEntity, "id">
type ProductTypeName = Pick<ProductEntity,  "typeName">
type ProductBrandName = Pick<ProductEntity,"brandName">
type ProductStock = Pick<ProductEntity,"stock">
type ProductName = Pick<ProductEntity,"name">
type Id = Pick<ProductEntity,  "id">

export {
    ProductEntity,
    Product,
    ProductBrandName,
    ProductTypeName,
    ProductName,
    Id,
    ProductStock
}