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
    async fetchOrders(token) {
        let resp = await fetch(api_url + "/orders", {
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
        if (resp.status == "401") {
            alert("Du är intre inloggad som admin");
        } else {
            const data = await resp.json()
            return data.product
        }
    },
    async fetchProductById(productId) {
        let resp = await fetch(api_url + "/products/" + productId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (resp.status == "404") {
            alert("Hittade ingen produkt med ID: " + productId.id);
        } else {
            const data = await resp.json()
            return data
        }
    },
    async postUpdateProductByIdRequest(updatedProduct, token) {
        let productId= updatedProduct._id
        const RequestBody = JSON.stringify(updatedProduct)
        console.log(RequestBody)
        let resp = await fetch(api_url + "/products/" + productId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: RequestBody
        })
        if (resp.status == "401") {
            alert("Du är intre inloggad som admin");
        } else if (resp.status == "400") {
            alert("Formatfel i inskickad order.");
        } else if (resp.status != "200") {
            alert("Tyvärr kunde inte produkten uppdateras. Varför? Se här: " +resp.status);
        } else {
            alert("Produkt har uppdaterats korrekt!");
        }
    },


}