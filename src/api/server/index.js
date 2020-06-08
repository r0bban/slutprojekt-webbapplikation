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
    async postOrderRequest(orderRequestBody, token) {
        const RequestBody = JSON.stringify(orderRequestBody)
        console.log(RequestBody)
        let resp = await fetch(api_url + "/orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: RequestBody
        })
        if (resp.status == "401") {
            alert("Du måste vara inloggad för att lägeg en order.");
        } else if (resp.status == "400") {
            alert("Formatfel i inskickad order.");
        } else if (resp.status != "200") {
            alert("Tyvärr kunde inte ordern läggas");
        } else {
            alert("Order har lagts korrekt!");
        }

    },
    async postProductRequest(newProduct, token) {
        // let result;
        try {
            const RequestBody = JSON.stringify(newProduct)
            let resp = await fetch(api_url + "/products", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: RequestBody
            })
            console.log(resp)
            if (resp.ok) {
                // alert("Du är inte inloggad som admin");
                const data = await resp.json()
                return data.product

            } else {
                // console.log(resp)
                // return { success: resp.ok, data: undefined, errorMessage: "Unauthorized" }
                throw new Error("Kontakt men inte 200");
            }
        } catch (error) {
            //WHAT WEE WANT TO DO UPON NETWORK ERROR....
            // return { success: false, data: undefined, errorMessage: "Connection Error" }
            throw new Error(error);
        }

    },

    async deleteProductById(productId, token) {
        let resp = await fetch(api_url + "/products/" + productId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        })
        if (resp.status == "401") {
            alert("Du är inte inloggad som admin");
        } else if (resp.status != "200") {
            alert("Något gick fel, kunde inte ta bort produkt.");
        } else {
            alert("Produkt raderad!");
        }
    },
    async fetchProductById(productId) {
        let resp = await fetch(api_url + "/products/" + productId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(await resp.error)
        if (resp.status == "404") {


            alert("Hittade ingen produkt med ID: " + productId);
        } else {
            const data = await resp.json()
            return data
        }
    },

    async postUpdateProductByIdRequest(updatedProduct, token) {
        let productId = updatedProduct._id
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
            alert("Tyvärr kunde inte produkten uppdateras. Varför? Se här: " + resp.status);
        } else {
            alert("Produkt har uppdaterats korrekt!");
        }
    },



}