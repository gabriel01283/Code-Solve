const API_URL = "https://code-solve.onrender.com";

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

// -------- Exclusão de conta --------
// function excludeAccount(){
//     localStorage.removeItem("token")

// }