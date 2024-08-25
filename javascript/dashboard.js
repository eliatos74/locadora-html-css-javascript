// CONSTRUIR GRÁFICO
const ctx = document.getElementById("graph");
Chart.defaults.color = "#000";
new Chart(ctx, {
    type: "bar",
    data: {
        labels: [""],
        datasets: [
            {
                label: "Dentro do Prazo",
                data: [50],
                backgroundColor: "#008000",
                borderWidth: 1,
            },
            {
                label: "Fora do Prazo",
                data: [12],
                backgroundColor: "#FF6347",
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 14,
                        family: "Montserrat",
                        weight: "bold",
                    },
                },
            },
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                font: {
                    size: 14,
                    family: "Montserrat",
                    weight: "bold",
                },
            },
        },
        plugins: {
            title: {
                display: true,
                text: "Livros devolvidos dentro e fora do prazo",
                font: {
                    size: 20,
                },
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    font: {
                        size:14,
                        family: "Montserrat",
                    }
                }
            },
        },
    },
});

// TOGGLE SIDEBAR
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebar");

    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("closed");
    });
});

// BOTÃO DE LOGOUT
document.getElementById("btnLogout").addEventListener("click", () => {
    window.location.href = "../index.html";
});


// MUDAR DE PAGINAS
const dashbord = document.getElementById("dashboard")
const aluguel = document.getElementById("aluguel")
const livros = document.getElementById("livros")
const editoras = document.getElementById("editoras")
const locatarios = document.getElementById("locatarios")
const usuarios = document.getElementById("usuarios")

dashbord.onclick = () => {
    window.location.href = "../html/dashboard.html";
}

aluguel.onclick = () => {
    window.location.href = "../html/rent.html";
}

livros.onclick = () => {
    window.location.href = "../html/books.html";
}

editoras.onclick = () => {
    window.location.href = "../html/publisher.html";
}

locatarios.onclick = () => {
    window.location.href = "../html/tenant.html";
}

usuarios.onclick = () => {
    window.location.href = "../html/users.html";
}