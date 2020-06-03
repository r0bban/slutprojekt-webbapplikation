async function authorizeUser(payload) {
    // Simple POST request with a JSON body using fetch


    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json",
    "Content-Length":"3495" },
        body: JSON.stringify({"email": payload.email, "password": payload.password })
    };


    const response = await fetch('http://localhost:5000/api/auth/', requestOptions);
    const data = await response.json();
        return data;
}

export { authorizeUser }