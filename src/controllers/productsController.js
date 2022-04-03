const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		return res.render ("products", {products, toThousand});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		const id = req.params.id
		const product = products.find(product => product.id == id);
		return res.render("detail", {product, toThousand})
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		return res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		return res.send("Producto Creado")
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		const id = req.params.id
		const product = products.find(product => product.id == id);
		return res.render("product-edit-form", {product})
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		return res.send("Producto editado")
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		return fs.res.send("Producto eliminado")
	}
};

module.exports = controller;