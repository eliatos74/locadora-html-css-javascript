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
    window.location.href = "../html/login.html";
});

// LOGICA DA MENSAGEM DE NOTIFICAÇÃO
let toastBox = document.getElementById("toastBox");
let aluguelRegistrado = "Aluguel registrado com sucesso!!";
let devolucaoRegistrada = "Devolução registrada com sucesso!!";

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = msg;
    toastBox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// CAPTURA DE ELEMENTOS DO MODAL DE CRIÇÃO
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const closeButton = document.getElementById("closeModalFooterButton");
const submitButton = document.getElementById("submit-button");

// ABRIR MODAL
openModalButton.onclick = function () {
    modal.style.display = "block";
};

// FECHAR MODAL COM CLIQUE NO "X"
closeModalButton.onclick = function () {
    modal.style.display = "none";
};

// FECHAR MODAL CLIQUE NO BOTÃO DE FECHAR
closeButton.onclick = function () {
    modal.style.display = "none";
};

// FECHAR MODAL CLIQUE FORA DO MODAL
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// EXIBIR MENSAGEM DE CADASTRO DE SUCESSO
submitButton.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "none";
    showToast(aluguelRegistrado);
};

// CAPTURA DE ELEMENTOS DO MODAL DE EXCLUSÃO
const modalDelete = document.getElementById("modal-delete");
const deleteButton = document.getElementById("delete-button");
const closeDeleteModalButton = document.getElementById(
    "closeModalDeleteButton"
);
const closeDeleteButton = document.getElementById("closeDeleteButton");
const submitDeleteButton = document.getElementById("submit-delete-button");
const classeDevolução = document.getElementById("color_refund");

// ABRIR MODAL DE EXCLUSÃO
deleteButton.onclick = function () {
    modalDelete.style.display = "block";
};

// FECHAR MODAL DE EXCLUSAO COM CLIQUE NO "X"
closeDeleteModalButton.onclick = function () {
    modalDelete.style.display = "none";
};

// FECHAR MODAL DE EXCLUSAO COM CLIQUE NO BOTÃO DE FECHAR
closeDeleteButton.onclick = function () {
    modalDelete.style.display = "none";
};

// FECHAR MODAL DE EXCLUSAO COM CLIQUE FORA DO MODAL
window.onclick = function (event) {
    if (event.target == modalDelete) {
        modalDelete.style.display = "none";
    }
};

// EXIBIR MENSAGEM DE EXCLUSÃO DE SUCESSO
submitDeleteButton.onclick = function (event) {
    event.preventDefault();
    modalDelete.style.display = "none";
    showToast(devolucaoRegistrada);
    alterarCorStatus();
};

function alterarCorStatus() {
    console.log(classeDevolução);
    classeDevolução.classList.remove("refund_color_blue");
    classeDevolução.classList.add("refund_color_green");
    classeDevolução.textContent = "DEVOLVIDO";
}
