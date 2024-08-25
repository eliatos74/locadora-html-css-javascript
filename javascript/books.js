// SAIR DO SISTEMA
document.getElementById("btnLogout").addEventListener("click", function () {
    console.log("Sair do sistema");
    window.location.href = "../html/login.html";
});

// TOGGLE SIDEBAR
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebar");

    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("closed");
    });
});


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

// EXIBIR MENSAGEM DE CADASTRO DE SUCESSO
submitButton.onclick = function (event) {
    event.preventDefault(); 
    modal.style.display = "none";
    showToast(mensagemLivroCadastro);
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
    showToast(mensagemLivroEdicao);
}

// CAPTURA DE ELEMENTOS DO MODAL DE EXCLUSÃO
const modalDelete = document.getElementById("modal-delete");
const deleteButton = document.getElementById("delete-button1");
const closeDeleteModalButton = document.getElementById("closeModalDeleteButton");
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
    showToast(mensagemLivroExclusao);
}

// LOGICA DA MENSAGEM DE NOTIFICAÇÃO
let toastBox = document.getElementById("toastBox");
let mensagemLivroCadastro = "Livro adiconado com sucesso!";
let mensagemLivroEdicao = "Livro editado com sucesso!";
let mensagemLivroExclusao = "Livro excluído com sucesso!";

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = msg;
    toastBox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

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