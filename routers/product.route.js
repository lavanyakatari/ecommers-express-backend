import express from 'express'
import { CreateProduct, getProductsByStoreId, DeleteProduct, GetAllProducts } from '../controllers/product.controller.js'
import { VerifyToken } from '../utils/verifyToken.js'


export const ProductRouter = express.Router()

ProductRouter.post('/', VerifyToken, CreateProduct)
ProductRouter.get('/:id', VerifyToken, getProductsByStoreId)
ProductRouter.delete("/:id", VerifyToken, DeleteProduct)
ProductRouter.get('/', GetAllProducts)