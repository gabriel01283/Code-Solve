async function fazerLogin() {
    const email = document.getElementById("usuario").value;
    const password = document.getElementById("senha").value;

    const response = await fetch("https://code-solve.onrender.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        window.location.href = "perfil.html";
    } else {
        alert(data.error || "Login inválido");
    }
}