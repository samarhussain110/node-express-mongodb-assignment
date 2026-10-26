import bookModel from "../models/book.js";

const GetallBooks = async (req, res) => {
  try {
    const data = await bookModel.find();
    res.status(200).json({ msg: "All books fetched", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetBookById = async (req, res) => {
  try {
    const data = await bookModel.findById(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateBookById = async (req, res) => {
  try {
    const data = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ msg: "Book updated", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addBook = async (req, res) => {
  try {
    const data = await bookModel.create(req.body);
    res.status(201).json({ msg: "Book created", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBookById = async (req, res) => {
  try {
    await bookModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Book deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { GetallBooks, GetBookById, UpdateBookById, addBook, deleteBookById };