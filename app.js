// make a book class

class Book {
    constructor(title, author, code){
        this.title = title;
        this.author = author;
        this.code = code;
    }
}

class UI {
    addBookToList(book){
        const tbody = document.querySelector(".display-book");
        const newRow = document.createElement("tr");
        const btnDelete = document.createElement("td");

        newRow.className = "newRow";
        btnDelete.className = "btn-hapus";

        newRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.code}</td>
        `;
        btnDelete.innerHTML= "X";

        btnDelete.addEventListener("click", function(e) {
            const element = e.target;
            element.parentElement.remove();
        });
        
        newRow.appendChild(btnDelete);
        tbody.appendChild(newRow);
    }

    clearInput(){
        document.getElementById("form-input-book").reset();
    }

}


document.querySelector("#form-input-book").addEventListener("submit", function(e) {
    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const code = document.querySelector(".code").value;


    //instantiate Book

    const book = new Book(title, author, code);

    //instantiate UI

    const ui = new UI();

    if (title === "" || author === "" || code === ""){
        alert("please fill the form")
    } else{

        ui.addBookToList(book);

        ui.clearInput();
    }

    e.preventDefault();  

})


// document.body.addEventListener("click", function(e){
//     const rows = document.querySelector(".newRow")
//     if (e.target.parentElement.className.contains("hapus")){

//         console.log("hapus")
//         e.target.parentElement.remove();
//     }
    
// })


console.log("a  ")