const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = ()=>axiosClient.get('/products?populate=*')
const getProductById = (id)=>axiosClient.get(`/products/${id}?populate=*`)

const getProductsByCategory = (Category)=>axiosClient.get(`/products?filters[Category][$eq]=${Category}&populate=*`)

export default {
	getLatestProducts,
	getProductById,
	getProductsByCategory
}