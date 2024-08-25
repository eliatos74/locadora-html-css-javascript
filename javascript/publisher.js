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
    window.location.href = "/index.html";
});

// LOGICA DA MENSAGEM DE NOTIFICAÇÃO
let toastBox = document.getElementById("toastBox");
let mensagemEditoraCadastro = "Editora adicionada com sucesso!";
let mensagemEditoraEdicao = "Editora editada com sucesso!";
let mensagemEditoraExclusao = "Editora excluida com sucesso!";

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
    showToast(mensagemEditoraCadastro);
};

// CAPTURA DE ELEMENTOS DO MODAL DE VISUALIZAÇÃO //
const modalView = document.getElementById("modal-view");
const viewButton = document.getElementById("view-button");
const closeViewModalButton = document.getElementById("closeModalViewButton");
const closeViewButton = document.getElementById("closeViewButton");

viewButton.onclick = function () {
    modalView.style.display = "block";
};

closeViewModalButton.onclick = function () {
    console.log("entrou");
    modalView.style.display = "none";
};

closeViewButton.onclick = function () {
    modalView.style.display = "none";
};

// CAPTURA DE ELEMENTOS DO MODAL DE EDIÇÃO //
const modalEdit = document.getElementById("modal-edit");
const editButton = document.getElementById("edit-button1");
const closeEditModalButton = document.getElementById("closeModalEditButton");
const closeEditButton = document.getElementById("closeEditButton");
const submitEditButton = document.getElementById("submit-edit-button");

// ABRIR MODAL DE EDIÇÃO
editButton.onclick = function () {
    modalEdit.style.display = "block";
};

// FECHAR MODAL DE EDIÇÃO COM CLIQUE NO "X"
closeEditModalButton.onclick = function () {
    modalEdit.style.display = "none";
};

// FECHAR MODAL DE EDIÇÃO COM CLIQUE NO BOTÃO DE FECHAR
closeEditButton.onclick = function () {
    modalEdit.style.display = "none";
};

// EXIBIR MENSAGEM DE EDIÇÃO DE SUCESSO
submitEditButton.onclick = function (event) {
    event.preventDefault();
    modalEdit.style.display = "none";
    showToast(mensagemEditoraEdicao);
};

// CAPTURA DE ELEMENTOS DO MODAL DE EXCLUSÃO
const modalDelete = document.getElementById("modal-delete");
const deleteButton = document.getElementById("delete-button1");
const closeDeleteModalButton = document.getElementById(
    "closeModalDeleteButton"
);
const closeDeleteButton = document.getElementById("closeDeleteButton");
const submitDeleteButton = document.getElementById("submit-delete-button");

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

// EXIBIR MENSAGEM DE EXCLUSÃO DE SUCESSO
submitDeleteButton.onclick = function (event) {
    event.preventDefault();
    modalDelete.style.display = "none";
    showToast(mensagemEditoraExclusao);
};

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