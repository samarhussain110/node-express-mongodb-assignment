import productModel from "../models/product.js";

const Getallproducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({ msg: "All products fetched", data: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetproductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.status(200).json({ data: product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateProductById = async (req, res) => {
  try {
    const updated = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ msg: "Product updated", data: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addproduct = async (req, res) => {
  try {
    const newProduct = await productModel.create(req.body);
    res.status(201).json({ msg: "Product created", data: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletebyid = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { Getallproducts, GetproductById, UpdateProductById, addproduct, deletebyid };