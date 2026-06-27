//const API_URL = "https://code-solve.onrender.com";
const API_URL = "http://127.0.0.1:8000";


// -------- PROTEGER PÁGINA --------
function protectPage() {
    const token = localStorage.getItem("token");
    
    if (!token) {
        window.location.href = "login.html";
    }
}

// -------- PEGAR TOKEN --------
function getToken() {
    return localStorage.getItem("token");
}

// -------- PEGAR USUÁRIO --------
async function getProfile() {
    const token = getToken();
    
    const response = await fetch(`${API_URL}/perfil`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    });
    
    return await response.json();
}

// -------- PEGAR INTERESSES DO USUÁRIO --------
async function getProfileInterests() {
    const token = getToken();

    const response = await fetch(`${API_URL}/perfil/interests`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    return await response.json();
}

// -------- REMOVER INTERESSE --------
async function removeInterest(languageId) {
    const token = getToken();

    const response = await fetch(`${API_URL}/interests/${languageId}`, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    return await response.json();
}

// -------- LOGOUT --------
function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}