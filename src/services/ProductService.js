import axios from 'axios';

class ProductService {
	static getAllProducts = () =>
		axios.get('https://dummyjson.com/products');

	static getSingleProduct = (numProduct) =>
		axios.get(`https://dummyjson.com/products/${numProduct}`);
}

export default ProductService;
