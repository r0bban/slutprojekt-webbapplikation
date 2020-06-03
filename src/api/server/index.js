const api_url = "http://localhost:5000/api"


export default {
    async fetchProducts(token) {
        let resp = await fetch(api_url + "/products", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
        )
        let data = await resp.json()
        return data
    },
    async postProductRequest(newProduct, token) {
        const RequestBody = JSON.stringify(newProduct)
        let resp = await fetch(api_url + "/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: RequestBody
        })
        const data = await resp.json()
        return data.product
    },
    async fetchProductById(productId) {
        let resp = await fetch(api_url + "/products/" + productId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await resp.json()
        return data
    },
}