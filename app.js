console.log("app.js");

function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// display constrctor

function Display() {}

// add methods to display prototype

Display.prototype.add = function (book) {
  console.log("Adding to UI");
  tableBody = document.getElementById("tableBody");
  let uiString = `
                 <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                  </tr>
                  `;
    tableBody.innerHTML+=uiString;
};

Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

// add submit eventlistner to libraryForm

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("You have submitted library form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  display.add(book);
  display.clear();
  e.preventDefault(); // remove reload issue
}
