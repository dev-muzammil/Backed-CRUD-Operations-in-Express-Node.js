import express from "express"
const router = express.Router()
import { updateBook, getOneBook, getAllBooks, addBooks, deleteBook } from "./controller.js"

router.route("/books").post(addBooks)
router.route("/books").get(getAllBooks)
router.route("/books/:id").get(getOneBook)
router.route("/books/:id").put(updateBook)
router.route("/books/:id").delete(deleteBook)

export default router