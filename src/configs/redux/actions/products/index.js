import axios from 'axios'

export const getProducts = () => {
    return {
        type: 'GET_PRODUCTS',
        payload : axios.get(`/products`)
    }
}

export const getProductById = id => {
    return {
        type: 'GET_PRODUCT_BY_ID',
        payload : axios.get(`/products/${id}`)
    }
}

export const createProduct = data => {
	return {
		type: 'CREATE_PRODUCT',
		payload: axios.post(`/products`, data)
	}
}

export const deleteProduct = id => {
	return {
		type: 'DELETE_PRODUCT',
		payload: axios.delete(`/products/delete/${id}`)
	}
}

export const updateProduct = (id, data) => {
	return {
		type: 'UPDATE_PRODUCT',
		payload: axios.put(`/products/update/${id}`, data)
	}
}