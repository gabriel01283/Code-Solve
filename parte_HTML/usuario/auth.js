const API_URL = "http://127.0.0.1:8000";

// -------- PROTEGER PÁGINA --------
function protectPage() {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "login.html";
    }
}

// -------- PEGAR USUÁRIO --------
async function getProfile() {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/perfil`, {
        method: "GET",
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