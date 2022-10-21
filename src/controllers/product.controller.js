import {Product} from "../models/Product.js";

export const createProduct = async (req, res) => {
    const {name, description, price, providerId} = req.body
    try {
        let newProduct = await Product.create({
            name,
            description,
            price,
            providerId,
        }, {
            fields: ["name", "description", "price", "providerId"]
        });
        if (newProduct) {
            return res.json({
                message: "Product created successfully",
                data: newProduct
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export const getProducts = async (req, res) => {
    let products = await Product.findAll();
    res.json(products);
}

export const getProduct = async (req, res) => {
    const {id} = req.params;
    const product = await Product.findOne({
        where: {
            id
        }
    });
    res.json(product);
}

// update unique product
export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const {name, description, price, stock, providerId, categoryId} = req.body;

    const product = await Product.findOne({
        attributes: ["id", "name", "description", "price", "stock", "providerId", "categoryId"],
    });
    await product.update({
        name,
        description,
        price,
        stock,
        providerId,
        categoryId
    });

    return res.json({
        message: "Product updated successfully",
        data: product
    });
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    const deleteRowCount = await Product.destroy({
        where: {
            id
        }
    });
    res.json({
        message: "Product deleted successfully",
        count: deleteRowCount
    });
}