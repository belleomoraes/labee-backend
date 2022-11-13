var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import connection from "../database/db.js";
function insertNewProduct(newProduct) {
    return __awaiter(this, void 0, void 0, function () {
        var brandId, typeId, insertQuery;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("SELECT id FROM brands WHERE name = $1", [
                        newProduct.brandName,
                    ])];
                case 1:
                    brandId = _a.sent();
                    return [4 /*yield*/, connection.query("SELECT id FROM producttype WHERE name = $1", [newProduct.typeName])];
                case 2:
                    typeId = _a.sent();
                    insertQuery = "INSERT INTO products (name, description, brandId, expirationDate, typeId, stock) VALUES ($1, $2, $3, $4, $5, $6)";
                    return [2 /*return*/, connection.query(insertQuery, [
                            newProduct.name,
                            newProduct.description,
                            brandId.rows[0].id,
                            newProduct.expirationDate,
                            typeId.rows[0].id,
                            newProduct.stock,
                        ])];
            }
        });
    });
}
function getProductBrand(brandName) {
    return __awaiter(this, void 0, void 0, function () {
        var brand;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("SELECT name FROM brands WHERE name = $1", [brandName])];
                case 1:
                    brand = _a.sent();
                    return [2 /*return*/, brand.rows];
            }
        });
    });
}
function getProductType(typeName) {
    return __awaiter(this, void 0, void 0, function () {
        var typeProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("SELECT name FROM producttype WHERE name = $1", [typeName])];
                case 1:
                    typeProduct = _a.sent();
                    return [2 /*return*/, typeProduct.rows];
            }
        });
    });
}
function insertProductBrand(brandName) {
    return __awaiter(this, void 0, void 0, function () {
        var insertQuery;
        return __generator(this, function (_a) {
            insertQuery = "INSERT INTO producttype (name) VALUES ($1)";
            return [2 /*return*/, connection.query(insertQuery, [brandName])];
        });
    });
}
function insertProductType(typeName) {
    return __awaiter(this, void 0, void 0, function () {
        var insertQuery;
        return __generator(this, function (_a) {
            insertQuery = "INSERT INTO producttype (name) VALUES ($1)";
            return [2 /*return*/, connection.query(insertQuery, [typeName])];
        });
    });
}
function getProductsData() {
    return __awaiter(this, void 0, void 0, function () {
        var productsData;
        return __generator(this, function (_a) {
            productsData = "SELECT \n\tproducts.id, \n\tproducts.name,  \n    products.description,\n\tproducttype.name AS type, \n\tbrands.name AS brand,\n\tproducts.stock\n\tFROM products \n\tJOIN producttype ON products.typeid = producttype.id \n\tJOIN brands ON products.brandid = brands.id \n\tGROUP BY products.typeid, products.id, producttype.name, brands.id";
            return [2 /*return*/, connection.query(productsData)];
        });
    });
}
function getProductsDataByType(_a) {
    var typeName = _a.typeName;
    return __awaiter(this, void 0, void 0, function () {
        var productsData;
        return __generator(this, function (_b) {
            productsData = "SELECT \n\tproducts.id, \n\tproducts.name,  \n\tproducts.description, \n\tproducttype.name AS type, \n\tbrands.name AS brand,\n\tproducts.stock\n\tFROM products \n\tJOIN producttype ON products.typeid = producttype.id \n\tJOIN brands ON products.brandid = brands.id \n    WHERE producttype.name = $1\n\tGROUP BY products.typeid, products.id, producttype.name, brands.id\n    ";
            return [2 /*return*/, connection.query(productsData, [typeName])];
        });
    });
}
function updateStock(_a) {
    var name = _a.name;
    return __awaiter(this, void 0, void 0, function () {
        var stock, stockUpdated, updateQuery;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, connection.query("SELECT stock FROM products WHERE name = $1", [name])];
                case 1:
                    stock = _b.sent();
                    stockUpdated = Number(stock.rows[0].stock) - 1;
                    updateQuery = "UPDATE products SET stock = $1 WHERE name = $2";
                    return [2 /*return*/, connection.query(updateQuery, [stockUpdated, name])];
            }
        });
    });
}
function deleteProduct(_a) {
    var name = _a.name;
    return __awaiter(this, void 0, void 0, function () {
        var deleteQuery;
        return __generator(this, function (_b) {
            deleteQuery = "DELETE FROM products WHERE name = $1";
            return [2 /*return*/, connection.query(deleteQuery, [name])];
        });
    });
}
var productsRepository = {
    insertNewProduct: insertNewProduct,
    getProductsData: getProductsData,
    getProductsDataByType: getProductsDataByType,
    updateStock: updateStock,
    deleteProduct: deleteProduct,
    getProductBrand: getProductBrand,
    getProductType: getProductType,
    insertProductBrand: insertProductBrand,
    insertProductType: insertProductType
};
export { productsRepository };
