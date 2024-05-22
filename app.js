let bookList = [
  {
    id: 1,
    title: "The Master and Margarita",
    author: "Mikhail Bulgakov",
    year: 1966,
    publisher: "Khudozhestvennaya Literatura",
    pages: 480,
    copiesInLibrary: 5,
  },
  {
    id: 2,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    year: 1866,
    publisher: "Russkiy Vestnik",
    pages: 671,
    copiesInLibrary: 3,
  },
  {
    id: 3,
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869,
    publisher: "Russkiy Vestnik",
    pages: 1225,
    copiesInLibrary: 7,
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    publisher: "Secker & Warburg",
    pages: 328,
    copiesInLibrary: 3,
  },
  {
    id: 5,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    year: 1877,
    publisher: "Russkiy Vestnik",
    pages: 864,
    copiesInLibrary: 4,
  },
  {
    id: 6,
    title: "Three Comrades",
    author: "Erich Maria Remarque",
    year: 1936,
    publisher: "AST",
    pages: 512,
    copiesInLibrary: 6,
  },
  {
    id: 7,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    publisher: "Bloomsbury",
    pages: 223,
    copiesInLibrary: 6,
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    publisher: "George Allen & Unwin",
    pages: 1178,
    copiesInLibrary: 3,
  },
  {
    id: 9,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    publisher: "Reynal & Hitchcock",
    pages: 91,
    copiesInLibrary: 4,
  },
  {
    id: 10,
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    year: 1936,
    publisher: "Macmillan Publishers",
    pages: 1037,
    copiesInLibrary: 2,
  },
  {
    id: 11,
    title: "Dead Souls",
    author: "Nikolai Gogol",
    year: 1842,
    publisher: "Sovremennik",
    pages: 352,
    copiesInLibrary: 5,
  },
  {
    id: 12,
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869,
    publisher: "Russkiy Vestnik",
    pages: 1225,
    copiesInLibrary: 7,
  },
  {
    id: 13,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    publisher: "J.B. Lippincott & Co.",
    pages: 281,
    copiesInLibrary: 5,
  },
  {
    id: 14,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    publisher: "Secker & Warburg",
    pages: 328,
    copiesInLibrary: 3,
  },
  {
    id: 15,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    publisher: "Charles Scribner's Sons",
    pages: 180,
    copiesInLibrary: 7,
  },
  {
    id: 16,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    publisher: "T. Egerton",
    pages: 279,
    copiesInLibrary: 4,
  },
  {
    id: 17,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    publisher: "Little, Brown and Company",
    pages: 277,
    copiesInLibrary: 6,
  },
  {
    id: 18,
    title: "Moby-Dick; or, The Whale",
    author: "Herman Melville",
    year: 1851,
    publisher: "Harper & Brothers",
    pages: 625,
    copiesInLibrary: 2,
  },
  {
    id: 19,
    title: "Lord of the Flies",
    author: "William Golding",
    year: 1954,
    publisher: "Faber and Faber",
    pages: 224,
    copiesInLibrary: 3,
  },
  {
    id: 20,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    publisher: "George Allen & Unwin",
    pages: 310,
    copiesInLibrary: 5,
  },
  {
    id: 21,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    publisher: "HarperOne",
    pages: 197,
    copiesInLibrary: 4,
  },
  {
    id: 22,
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    publisher: "Chatto & Windus",
    pages: 311,
    copiesInLibrary: 2,
  },
  {
    id: 23,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    publisher: "George Allen & Unwin",
    pages: 1178,
    copiesInLibrary: 3,
  },
  {
    id: 24,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    publisher: "Doubleday",
    pages: 454,
    copiesInLibrary: 5,
  },
  {
    id: 25,
    title: "The Shining",
    author: "Stephen King",
    year: 1977,
    publisher: "Doubleday",
    pages: 447,
    copiesInLibrary: 4,
  },
  {
    id: 26,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    publisher: "Bloomsbury",
    pages: 223,
    copiesInLibrary: 6,
  },
  {
    id: 27,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    publisher: "Scholastic",
    pages: 374,
    copiesInLibrary: 3,
  },
  {
    id: 28,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    year: 1967,
    publisher: "Harper & Row",
    pages: 417,
    copiesInLibrary: 5,
  },
  {
    id: 29,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    year: 1890,
    publisher: "Lippincott's Monthly Magazine",
    pages: 254,
    copiesInLibrary: 2,
  },
  {
    id: 30,
    title: "Shadow of the Mountain",
    author: "Gregory David Roberts",
    year: 1997,
    publisher: "Random House",
    pages: 304,
    copiesInLibrary: 4,
  },
];

let visitors = [
  {
    id: 1,
    fullName: "Ivanov Ivan Ivanovich",
    phoneNumber: "+1 (123) 456-7890",
  },
  {
    id: 2,
    fullName: "Petrov Petr Petrovich",
    phoneNumber: "+1 (234) 567-8901",
  },
  {
    id: 3,
    fullName: "Sidorov Alexey Vladimirovich",
    phoneNumber: "+1 (345) 678-9012",
  },
  {
    id: 4,
    fullName: "Smirnova Elena Sergeevna",
    phoneNumber: "+1 (456) 789-0123",
  },
  {
    id: 5,
    fullName: "Kozlov Valentin Pavlovich",
    phoneNumber: "+1 (567) 890-1234",
  },
  {
    id: 6,
    fullName: "Morozova Olga Nikolaevna",
    phoneNumber: "+1 (678) 901-2345",
  },
  {
    id: 7,
    fullName: "Pavlov Andrey Aleksandrovich",
    phoneNumber: "+1 (789) 012-3456",
  },
  {
    id: 8,
    fullName: "Vasilieva Anna Igorevna",
    phoneNumber: "+1 (890) 123-4567",
  },
  {
    id: 9,
    fullName: "Zaitsev Mikhail Viktorovich",
    phoneNumber: "+1 (901) 234-5678",
  },
  {
    id: 10,
    fullName: "Kuznetsova Ekaterina Valentinovna",
    phoneNumber: "+1 (012) 345-6789",
  },
  {
    id: 11,
    fullName: "Krylov Andrey Sergeevich",
    phoneNumber: "+1 (123) 456-7890",
  },
  {
    id: 12,
    fullName: "Lebedeva Anna Alekseevna",
    phoneNumber: "+1 (234) 567-8901",
  },
  {
    id: 13,
    fullName: "Maksimov Pavel Dmitrievich",
    phoneNumber: "+1 (345) 678-9012",
  },
  {
    id: 14,
    fullName: "Nikolaeva Larisa Viktorovna",
    phoneNumber: "+1 (456) 789-0123",
  },
  {
    id: 15,
    fullName: "Orlov Sergey Anatolyevich",
    phoneNumber: "+1 (567) 890-1234",
  },
  {
    id: 16,
    fullName: "Popov Artem Igorevich",
    phoneNumber: "+1 (678) 901-2345",
  },
  {
    id: 17,
    fullName: "Romanova Valentina Petrovna",
    phoneNumber: "+1 (789) 012-3456",
  },
  {
    id: 18,
    fullName: "Semenov Denis Vladimirovich",
    phoneNumber: "+1 (890) 123-4567",
  },
  {
    id: 19,
    fullName: "Tarasov Andrey Alekseevich",
    phoneNumber: "+1 (901) 234-5678",
  },
  {
    id: 20,
    fullName: "Fedorova Lyudmila Ivanovna",
    phoneNumber: "+1 (012) 345-6789",
  },
];
const buttonBooks = document.querySelectorAll("#Books");
const buttonVisitors = document.querySelectorAll("#Visitors");
const buttonCards = document.querySelectorAll("#Cards");
const buttonStatistics = document.querySelectorAll("#Statistics");

const buttons = document.querySelectorAll(".button");
let activeButton = document.querySelector(".activ_button");
const dataList = document.querySelector(".data_list");
const addition = document.querySelector(".addition");
const sort = document.querySelector(".sort");
const search = document.querySelector(".search");
const win = document.querySelector(".modal_window");
const cls = document.querySelector(".modal_close");
const body = document.querySelector("body");
const back = document.querySelector(".background");
const addBookContent = document.getElementById("addBookContent");
const changeContent = document.getElementById("changeContent");
const modal = document.querySelector(".modal_window");
const section = document.querySelector(".section");

let cardsList = [];

//Определяем какая кнопка нажата
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (activeButton) {
      activeButton.classList.remove("activ_button");
    }
    button.classList.add("activ_button");
    activeButton = button;
    initializePage();
  });
});

// Загрузка первой страницы
window.addEventListener("load", function () {
  bookList = loadFromLocalStorage();
  visitors = loadVisitorsFromLocalStorage();
  cardsList = loadCardsFromLocalStorage();
  initializePage();
});

// функция определяющая что будет на первой странице
function initializePage() {
  if (activeButton) {
    if (activeButton.id === "Books") {
      createBookTable();
      dataList.style.background = "#F2F2F0";
    }
    if (activeButton.id === "Visitors") {
      createVisitorsTable();
      dataList.style.background = "#F2F2F0";
    }
    if (activeButton.id === "Cards") {
      createCardsTable();
      dataList.style.background = "#F2F2F0";
    }
    if (activeButton.id === "Statistics") {
      createStatisticsPage();
      dataList.style.background = "#7297A6";
    }
  }
}
// Функция для сохранения массива книг в LocalStorage
function saveToLocalStorage() {
  localStorage.setItem("bookList", JSON.stringify(bookList));
}
// Функция для сохранения посетителей в LocalStorage
function saveVisitorsToLocalStorage() {
  localStorage.setItem("visitors", JSON.stringify(visitors));
}
// Функция для сохранения карты посетителя в LocalStorage
function saveCardsToLocalStorage() {
  localStorage.setItem("cardsList", JSON.stringify(cardsList));
}

// Функция для загрузки массива книг из LocalStorage
function loadFromLocalStorage() {
  const storedBooks = localStorage.getItem("bookList");
  return storedBooks ? JSON.parse(storedBooks) : bookList;
}
// Функция для загрузки посетителей из  LocalStorage
function loadVisitorsFromLocalStorage() {
  const storedVisitors = localStorage.getItem("visitors");
  return storedVisitors ? JSON.parse(storedVisitors) : visitors;
}
// Функция для загрузки карты посетителя из  LocalStorage
function loadCardsFromLocalStorage() {
  const storedCards = localStorage.getItem("cardsList");
  return storedCards ? JSON.parse(storedCards) : cardsList;
}

//Функция поиска книги на странице books
function filterBooks(arr, search) {
  const s = search.toLowerCase();
  return arr.filter((item) => {
    if (item.title && item.author && item.publisher) {
      return (
        item.title.toLowerCase().includes(s) ||
        item.author.toLowerCase().includes(s) ||
        item.publisher.toLowerCase().includes(s)
      );
    }
  });
}
//Функция поиска на странице cards
function filterCards(arr, search) {
  const s = search.toLowerCase();
  return arr.filter((item) => {
    if (item.visitors && item.title) {
      return (
        item.visitors.toLowerCase().includes(s) ||
        item.title.toLowerCase().includes(s)
      );
    }
  });
}
//Функция поиска на странице Visitors
function filterVisitors(arr, search) {
  const s = search.toLowerCase();
  return arr.filter((item) => {
    if (item.fullName && item.phoneNumber) {
      return (
        item.fullName.toLowerCase().includes(s) ||
        item.phoneNumber.toLowerCase().includes(s)
      );
    }
  });
}

// Функция закрытия модального окна
function closeModal() {
  if (cls) {
    cls.addEventListener("click", function () {
      win.classList.remove("active");
      back.classList.remove("active1");
      document.body.style.overflow = "auto";
    });
  }
  if (back) {
    back.addEventListener("click", function () {
      win.classList.remove("active");
      back.classList.remove("active1");
      document.body.style.overflow = "auto";
    });
  }
}

// Вызов модального окна на изменение либо удаления книги
function changeModal() {
  let change = document.querySelectorAll(".change");
  change.forEach((button) => {
    button.addEventListener("click", function () {
      activeButton.id === "Visitors"
        ? (modal.style.height = "250px")
        : (modal.style.height = "500px");
      addBookContent.style.display = "none";
      changeContent.style.display = "flex";
      win.classList.add("active");
      back.classList.add("active1");
      document.body.style.overflow = "hidden";

      const bookId = button.getAttribute("data-id");

      const btnDelete = document.querySelector(".btnDelete");
      const btnChange = document.querySelector(".btnChange");
      btnChange.setAttribute("data-id", bookId);
      btnDelete.setAttribute("data-id", bookId);
    });
  });
  closeModal();
}
// Функции сортировки
function sortByNumber(f, arr) {
  arr.sort((a, b) => a[f] - b[f]);
  return arr;
}
function sortByString(f, arr) {
  arr.sort((a, b) => a[f].localeCompare(b[f]));
  return arr;
}

// Создание кнопок удалить и добавить изменения для модального окна
function dataId() {
  const changeButtons = document.createElement("div");
  changeButtons.classList.add("changeButtons");
  changeContent.appendChild(changeButtons);

  const btnChange = document.createElement("button");
  btnChange.classList.add("btnChange");
  btnChange.textContent = "Make a change";
  changeButtons.appendChild(btnChange);

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btnDelete");
  btnDelete.textContent = "Remove a book";
  changeButtons.appendChild(btnDelete);

  const buttonsDelete = document.querySelectorAll(".change");
  buttonsDelete.forEach((button) => {
    button.addEventListener("click", function () {
      const bookId = button.getAttribute("data-id");
      console.log(bookId);
      const btnDelete = document.querySelector(".btnDelete");
      const btnChange = document.querySelector(".btnChange");
      btnChange.setAttribute("data-id", bookId);
      btnDelete.setAttribute("data-id", bookId);
    });
  });
}

// функция построения и заполнения страницы Books
function createBookTable() {
  dataList.innerHTML = "";
  sort.innerHTML = "";
  search.innerHTML = "";
  addition.innerHTML = "";
  addBookContent.innerHTML = "";
  changeContent.innerHTML = "";

  const genreSelect = document.createElement("select");
  genreSelect.innerHTML = `
      <option value="ID">ID</option>
      <option value="Title">Title</Title>
      <option value="Author">Author</option>
      <option value="Copies">Copies</option>
  `;
  genreSelect.id = "genreSelect";
  sort.appendChild(genreSelect);

  let selectedValue = "";
  genreSelect.addEventListener("change", () => {
    selectedValue = genreSelect.options[genreSelect.selectedIndex].value;
  });

  const table = document.createElement("table");
  table.setAttribute("id", "books");
  dataList.appendChild(table);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  const btnSort = document.createElement("button");
  btnSort.classList.add("btnSort");
  btnSort.textContent = "Sort";
  sort.appendChild(btnSort);

  let arr = [...bookList];

  //Сортировка данных
  btnSort.addEventListener("click", () => {
    console.log(selectedValue);

    if (selectedValue === "Author") {
      arr = sortByString("author", arr);
    }
    if (selectedValue === "Title") {
      arr = sortByString("title", arr);
    }
    if (selectedValue === "ID") {
      arr = sortByNumber("id", arr);
    }
    if (selectedValue === "Copies") {
      arr = sortByNumber("copiesInLibrary", arr);
    }
    document.getElementById("books").innerHTML = "";
    const thead = document.createElement("thead");
    table.appendChild(thead);

    const headerRow = document.createElement("tr");
    headerRow.innerHTML =
      "<th>ID</th><th>Title</th><th>Author</th><th>Year</th><th>Publisher</th><th>Pages</th><th>Copies</th><th>Change</th>";
    thead.appendChild(headerRow);
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    createTableData(arr, tbody);
    changeModal();
  });

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search";
  search.appendChild(searchInput);
  let searchText = "";

  // Обработчик события для поля поиска
  searchInput.addEventListener("input", (e) => {
    searchText = e.target.value;
    if (searchText !== "") {
      arr = filterBooks(bookList, searchText);
    } else {
      arr = [...bookList];
    }
    document.getElementById("books").innerHTML = "";
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const headerRow = document.createElement("tr");
    headerRow.innerHTML =
      "<th>ID</th><th>Title</th><th>Author</th><th>Year</th><th>Publisher</th><th>Pages</th><th>Copies</th><th>Change</th>";
    thead.appendChild(headerRow);
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    createTableData(arr, tbody);
    changeModal();
  });

  const addBook = document.createElement("button");
  addBook.classList.add("addBook");
  addBook.textContent = "Add Book";
  addition.appendChild(addBook);

  const thead = document.createElement("thead");
  table.appendChild(thead);

  const headerRow = document.createElement("tr");
  headerRow.innerHTML =
    "<th>ID</th><th>Title</th><th>Author</th><th>Year</th><th>Publisher</th><th>Pages</th><th>Copies</th><th>Change</th>";
  thead.appendChild(headerRow);
  createTableData(arr, tbody);

  // Вызов модального окна на добавление новой книги
  if (addBook) {
    addBook.addEventListener("click", function () {
      addBookContent.style.display = "flex";
      modal.style.height = "500px";
      changeContent.style.display = "none";
      win.classList.add("active");
      back.classList.add("active1");
      document.body.style.overflow = "hidden";
    });
  }
  closeModal();

  const textAddBook = document.createElement("h5");
  textAddBook.textContent = "Add a new book:";
  addBookContent.appendChild(textAddBook);

  const modalTitle = document.createElement("input");
  modalTitle.type = "text";
  modalTitle.placeholder = "Book title";
  addBookContent.appendChild(modalTitle);

  const modalAuthor = document.createElement("input");
  modalAuthor.type = "text";
  modalAuthor.placeholder = "Author";
  addBookContent.appendChild(modalAuthor);

  const modalYear = document.createElement("input");
  modalYear.type = "text";
  modalYear.placeholder = "Year of publication";
  addBookContent.appendChild(modalYear);

  const modalPublisher = document.createElement("input");
  modalPublisher.type = "text";
  modalPublisher.placeholder = "Publisher";
  addBookContent.appendChild(modalPublisher);

  const modalPages = document.createElement("input");
  modalPages.type = "text";
  modalPages.placeholder = "Number of pages";
  addBookContent.appendChild(modalPages);

  const modalCopies = document.createElement("input");
  modalCopies.type = "text";
  modalCopies.placeholder = "Number of copies";
  addBookContent.appendChild(modalCopies);

  const btnAddBook = document.createElement("button");
  btnAddBook.classList.add("btnAddBook");
  btnAddBook.textContent = "Add a book";
  addBookContent.appendChild(btnAddBook);

  // Добовление новой книги
  if (btnAddBook) {
    btnAddBook.addEventListener("click", function () {
      const newTitle = modalTitle.value.trim();
      const newAuthor = modalAuthor.value.trim();
      const newYear = modalYear.value.trim();
      const newPublisher = modalPublisher.value.trim();
      const newPages = modalPages.value.trim();
      const newCopies = modalCopies.value.trim();
      if (
        newTitle === "" ||
        newAuthor === "" ||
        newYear === "" ||
        newPublisher === "" ||
        newPages === "" ||
        newCopies === ""
      ) {
        textAddBook.textContent = "Please fill in all the fields.";
        textAddBook.classList.add("error-message");
        textAddBook.style.fontSize = "24px";
        textAddBook.style.color = "#592547";
        return;
      }
      const newYearValue = parseInt(modalYear.value, 10);
      if (
        !/^\d+$/.test(newYear) ||
        isNaN(newYearValue) ||
        newYearValue < 0 ||
        newYearValue > 2023
      ) {
        textAddBook.textContent = "Please enter the year correctly.";
        textAddBook.classList.add("error-message");
        textAddBook.style.fontSize = "24px";
        textAddBook.style.color = "#592547";
        return;
      }
      if (!/^\d+$/.test(newPages) || newPages < 0) {
        textAddBook.textContent = "Please enter the number of pages correctly.";
        textAddBook.classList.add("error-message");
        textAddBook.style.fontSize = "16px";
        textAddBook.style.color = "#592547";
        return;
      }
      if (!/^\d+$/.test(newCopies) || newCopies < 0) {
        textAddBook.textContent =
          "Please enter the number of copies correctly.";
        textAddBook.classList.add("error-message");
        textAddBook.style.fontSize = "16px";
        textAddBook.style.color = "#592547";
        return;
      }
      const newBook = {
        id: bookList.length + 1,
        title: modalTitle.value,
        author: modalAuthor.value,
        year: modalYear.value,
        publisher: modalPublisher.value,
        pages: modalPages.value,
        copiesInLibrary: modalCopies.value,
      };
      bookList.push(newBook);
      saveToLocalStorage();
      createBookTable();
      document.body.style.overflow = "auto";
      win.classList.remove("active");
      back.classList.remove("active1");
    });
  }

  changeModal();

  const textChangeBook = document.createElement("h5");
  textChangeBook.textContent = "Enter changes:";
  changeContent.appendChild(textChangeBook);

  const changeTitle = document.createElement("input");
  changeTitle.type = "text";
  changeTitle.placeholder = "Book title";
  changeContent.appendChild(changeTitle);

  const changeAuthor = document.createElement("input");
  changeAuthor.type = "text";
  changeAuthor.placeholder = "Author";
  changeContent.appendChild(changeAuthor);

  const changeYear = document.createElement("input");
  changeYear.type = "text";
  changeYear.placeholder = "Year of publication";
  changeContent.appendChild(changeYear);

  const changePublisher = document.createElement("input");
  changePublisher.type = "text";
  changePublisher.placeholder = "Publisher";
  changeContent.appendChild(changePublisher);

  const changePages = document.createElement("input");
  changePages.type = "text";
  changePages.placeholder = "Number of pages";
  changeContent.appendChild(changePages);

  const changeCopies = document.createElement("input");
  changeCopies.type = "text";
  changeCopies.placeholder = "Number of copies";
  changeContent.appendChild(changeCopies);

  dataId();

  deleteBook();

  // Изменение данных книги
  const btnChange = document.querySelector(".btnChange");
  btnChange.addEventListener("click", function () {
    const bookId = btnChange.getAttribute("data-id");
    const bookIndex = bookList.findIndex(
      (book) => book.id === parseInt(bookId)
    );

    if (bookIndex > -1) {
      const newTitle = changeTitle.value;
      const newAuthor = changeAuthor.value;
      const newYear = changeYear.value;
      const newPublisher = changePublisher.value;
      const newPages = changePages.value;
      const newCopies = changeCopies.value;

      if (
        newTitle === "" ||
        newAuthor === "" ||
        newYear === "" ||
        newPublisher === "" ||
        newPages === "" ||
        newCopies === ""
      ) {
        textChangeBook.textContent = "Please fill in all the fields.";
        textChangeBook.classList.add("error-message");
        textChangeBook.style.fontSize = "24px";
        textChangeBook.style.color = "#592547";
        return;
      }
      if (
        !/^\d+$/.test(newYear) ||
        isNaN(newYear) ||
        newYear < 0 ||
        newYear > 2023
      ) {
        textChangeBook.textContent = "Please enter the year correctly.";
        textChangeBook.classList.add("error-message");
        textChangeBook.style.fontSize = "24px";
        textChangeBook.style.color = "#592547";
        return;
      }
      if (!/^\d+$/.test(newPages) || newPages < 0) {
        textChangeBook.textContent =
          "Please enter the number of pages correctly.";
        textChangeBook.classList.add("error-message");
        textChangeBook.style.fontSize = "16px";
        textChangeBook.style.color = "#592547";
        return;
      }
      if (!/^\d+$/.test(newCopies) || newCopies < 0) {
        textChangeBook.textContent =
          "Please enter the number of copies correctly.";
        textChangeBook.classList.add("error-message");
        textChangeBook.style.fontSize = "16px";
        textChangeBook.style.color = "#592547";
        return;
      }
      bookList[bookIndex].title = newTitle;
      bookList[bookIndex].author = newAuthor;
      bookList[bookIndex].year = newYear;
      bookList[bookIndex].publisher = newPublisher;
      bookList[bookIndex].pages = newPages;
      bookList[bookIndex].copiesInLibrary = newCopies;
      saveToLocalStorage();
      createBookTable();
      win.classList.remove("active");
      back.classList.remove("active1");
      document.body.style.overflow = "auto";
    }
  });
}

// Удаление книги
function deleteBook() {
  const btnDelete = document.querySelector(".btnDelete");
  btnDelete.addEventListener("click", function () {
    const bookId = btnDelete.getAttribute("data-id");
    win.classList.remove("active");
    back.classList.remove("active1");

    const bookIndex = bookList.findIndex(
      (book) => book.id === parseInt(bookId)
    );

    if (bookIndex > -1) {
      bookList.splice(bookIndex, 1);

      bookList.forEach((book, index) => {
        book.id = index + 1;
      });

      saveToLocalStorage();
      createBookTable();
      document.body.style.overflow = "auto";
    }
  });
}

// Фунция построения таблицы с книгами
function createTableDataVisitors(arr, tbody) {
  arr.forEach((visitor) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${visitor.id}</td><td>${visitor.fullName}</td><td>${visitor.phoneNumber}</td><td><button class="change" data-id="${visitor.id}">
    &#9998;</button></td>`;
    tbody.appendChild(row);
  });
}
// Фунция построения таблицы с посетителями
function createTableData(arr, tbody) {
  arr.forEach((book) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.id}</td><td>${book.title}</td><td>${book.author}</td><td>${book.year}</td><td>${book.publisher}</td><td>${book.pages}</td><td>${book.copiesInLibrary}</td><td><button class="change" data-id="${book.id}">
    &#9998;</button></td>`;
    tbody.appendChild(row);
  });
}
// Фунция построения таблицы с картами посетителей
function createTableDataCards(arr, tbody) {
  arr.forEach((card) => {
    const row = document.createElement("tr");
    if (card.returneDate) {
      row.innerHTML = `<td>${card.id}</td><td>${card.visitors}</td><td>${card.title}</td><td>${card.borrowDate}</td><td>${card.returneDate}</td>`;
    } else {
      row.innerHTML = `<td>${card.id}</td><td>${card.visitors}</td><td>${card.title}</td><td>${card.borrowDate}</td><td><button class="change" data-id="${card.id}">&#8630;</button></td>`;
    }
    tbody.appendChild(row);
  });
}

// функция построения и заполнения страницы Visitors
function createVisitorsTable() {
  dataList.innerHTML = "";
  sort.innerHTML = "";
  search.innerHTML = "";
  addition.innerHTML = "";
  addBookContent.innerHTML = "";
  changeContent.innerHTML = "";

  visitors = loadVisitorsFromLocalStorage();

  const genreSelect = document.createElement("select");
  genreSelect.innerHTML = `
      <option value="ID">ID</option>
      <option value="Name">Name</Title>
      <option value="Phone">Phone</option>
      `;
  genreSelect.id = "genreSelect";
  sort.appendChild(genreSelect);

  let selectedValue = "";
  genreSelect.addEventListener("change", () => {
    selectedValue = genreSelect.options[genreSelect.selectedIndex].value;
  });

  const table = document.createElement("table");
  table.setAttribute("id", "visitors");
  dataList.appendChild(table);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  const btnSort = document.createElement("button");
  btnSort.classList.add("btnSort");
  btnSort.textContent = "Sort";
  sort.appendChild(btnSort);

  let arr = [...visitors];

  btnSort.addEventListener("click", () => {
    console.log(selectedValue);

    if (selectedValue === "Name") {
      arr = sortByString("fullName", arr);
    }
    if (selectedValue === "Phone") {
      arr = sortByString("phoneNumber", arr);
    }
    if (selectedValue === "ID") {
      arr = sortByNumber("id", arr);
    }

    document.getElementById("visitors").innerHTML = "";
    const thead = document.createElement("thead");
    table.appendChild(thead);

    const headerRow = document.createElement("tr");
    headerRow.innerHTML =
      "<th>ID</th><th>Name</th><th>Phone</th><th>Change</th>";
    thead.appendChild(headerRow);
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    createTableDataVisitors(arr, tbody);
    changeModal();
  });

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search";
  search.appendChild(searchInput);

  let searchText = "";
  searchInput.addEventListener("input", (e) => {
    searchText = e.target.value;

    if (searchText !== "") {
      arr = filterVisitors(visitors, searchText);
    } else {
      arr = [...visitors];
    }

    document.getElementById("visitors").innerHTML = "";
    const thead = document.createElement("thead");
    table.appendChild(thead);

    const headerRow = document.createElement("tr");
    headerRow.innerHTML =
      "<th>ID</th><th>Name</th><th>Phone</th><th>Change</th>";
    thead.appendChild(headerRow);
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    createTableDataVisitors(arr, tbody);
    changeModal();
  });

  const addVisitors = document.createElement("button");
  addVisitors.classList.add("addVisitors");
  addVisitors.textContent = "Add visitors";
  addition.appendChild(addVisitors);

  const thead = document.createElement("thead");
  table.appendChild(thead);
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>ID</th><th>Name</th><th>Phone</th><th>Change</th>";
  thead.appendChild(headerRow);
  createTableDataVisitors(arr, tbody);

  // Вызов модального окна на добавление нового посетителя
  if (addVisitors) {
    addVisitors.addEventListener("click", function () {
      addBookContent.style.display = "flex";
      modal.style.height = "250px";
      changeContent.style.display = "none";
      win.classList.add("active");
      back.classList.add("active1");
      document.body.style.overflow = "hidden";
    });
  }
  closeModal();
  const textAddVisitors = document.createElement("h5");
  textAddVisitors.textContent = "Add a new visitor:";
  addBookContent.appendChild(textAddVisitors);

  const modalName = document.createElement("input");
  modalName.type = "text";
  modalName.placeholder = "Enter first name and last name";
  addBookContent.appendChild(modalName);

  const modalPhone = document.createElement("input");
  modalPhone.type = "text";
  modalPhone.placeholder = "Enter phone numbe";
  addBookContent.appendChild(modalPhone);

  const btnAddVisitors = document.createElement("button");
  btnAddVisitors.classList.add("btnAVisitors");
  btnAddVisitors.textContent = "Add a new visitor";
  addBookContent.appendChild(btnAddVisitors);

  // Добовление нового посетителя
  if (btnAddVisitors) {
    btnAddVisitors.addEventListener("click", function () {
      const newPhone = modalPhone.value.trim();
      const newName = modalName.value.trim();

      if (newPhone === "" || newName === "") {
        textAddVisitors.textContent = "Please fill in all the fields";
        textAddVisitors.classList.add("error-message");
        textAddVisitors.style.fontSize = "24px";
        textAddVisitors.style.color = "#592547";
        return;
      }
      if (!/^[-+()\d]+$/.test(newPhone)) {
        textAddVisitors.textContent = "Please enter a valid phone numbe";
        textAddVisitors.classList.add("error-message");
        textAddVisitors.style.fontSize = "16px";
        textAddVisitors.style.color = "#592547";
        return;
      }
      if (!/^[a-zA-Zа-яА-Я\s]+$/.test(newName)) {
        textAddVisitors.textContent = "Please enter a valid name";
        textAddVisitors.classList.add("error-message");
        textAddVisitors.style.fontSize = "16px";
        textAddVisitors.style.color = "#592547";
        return;
      }
      const newVisitors = {
        id: visitors.length + 1,
        fullName: modalName.value,
        phoneNumber: modalPhone.value,
      };
      visitors.push(newVisitors);
      saveVisitorsToLocalStorage();
      createVisitorsTable();
      win.classList.remove("active");
      back.classList.remove("active1");
      document.body.style.overflow = "auto";
    });
  }
  changeModal();

  const textChangeVisitors = document.createElement("h5");
  textChangeVisitors.textContent = "Enter changes:";
  changeContent.appendChild(textChangeVisitors);

  const changeName = document.createElement("input");
  changeName.type = "text";
  changeName.placeholder = "Enter first name and last name";
  changeContent.appendChild(changeName);

  const changePhone = document.createElement("input");
  changePhone.type = "text";
  changePhone.placeholder = "Enter phone number";
  changeContent.appendChild(changePhone);

  const changeButtons = document.createElement("div");
  changeButtons.classList.add("changeButtons");
  changeContent.appendChild(changeButtons);

  const btnChange = document.createElement("button");
  btnChange.classList.add("btnChange");
  btnChange.textContent = "Add changes";
  changeButtons.appendChild(btnChange);

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btnDelete");
  btnDelete.textContent = "Delete visitor";
  changeButtons.appendChild(btnDelete);

  const buttonsDelete = document.querySelectorAll(".change");
  buttonsDelete.forEach((button) => {
    button.addEventListener("click", function () {
      const bookId = button.getAttribute("data-id");
      console.log(bookId);
      const btnDelete = document.querySelector(".btnDelete");
      const btnChange = document.querySelector(".btnChange");
      btnChange.setAttribute("data-id", bookId);
      btnDelete.setAttribute("data-id", bookId);
    });
  });

  // Удаление посeтителя

  btnDelete.addEventListener("click", function () {
    win.classList.remove("active");
    back.classList.remove("active1");
    const visitorId = btnDelete.getAttribute("data-id");
    const visitorIndex = visitors.findIndex(
      (visitor) => visitor.id === parseInt(visitorId)
    );
    if (visitorIndex > -1) {
      visitors.splice(visitorIndex, 1);
      visitors.forEach((visitor, index) => {
        visitor.id = index + 1;
      });
      saveVisitorsToLocalStorage();
      createVisitorsTable();
      document.body.style.overflow = "auto";
    }
  });

  //Изменения данных посетителя

  btnChange.addEventListener("click", function () {
    const visitorId = btnChange.getAttribute("data-id");
    const visitorIndex = visitors.findIndex(
      (visitor) => visitor.id === parseInt(visitorId)
    );
    if (visitorIndex > -1) {
      const newName = changeName.value;
      const newPhone = changePhone.value;
      if (newPhone === "" || newName === "") {
        textChangeVisitors.textContent = "Please fill in all the fields";
        textChangeVisitors.classList.add("error-message");
        textChangeVisitors.style.fontSize = "24px";
        textChangeVisitors.style.color = "#592547";
        return;
      }

      if (!/^[-+()\d]+$/.test(newPhone)) {
        textChangeVisitors.textContent = "Please enter a valid phone number";
        textChangeVisitors.classList.add("error-message");
        textChangeVisitors.style.fontSize = "16px";
        textChangeVisitors.style.color = "#592547";
        return;
      }
      if (!/^[a-zA-Zа-яА-Я\s]+$/.test(newName)) {
        textChangeVisitors.textContent = "Please enter a valid name";
        textChangeVisitors.classList.add("error-message");
        textChangeVisitors.style.fontSize = "16px";
        textChangeVisitors.style.color = "#592547";
        return;
      }

      visitors[visitorIndex].fullName = newName;
      visitors[visitorIndex].phoneNumber = newPhone;

      saveVisitorsToLocalStorage();
      createVisitorsTable();
      win.classList.remove("active");
      back.classList.remove("active1");
      document.body.style.overflow = "auto";
    }
  });
}

// функция построения и заполнения страницы Cards
function createCardsTable() {
  dataList.innerHTML = "";
  sort.innerHTML = "";
  search.innerHTML = "";
  addition.innerHTML = "";
  addBookContent.innerHTML = "";
  changeContent.innerHTML = "";

  cardsList = loadCardsFromLocalStorage();

  const genreSelect = document.createElement("select");
  genreSelect.innerHTML = `
      <option value="ID">ID</option>
      <option value="Name">Name</Title>
      <option value="Book">Book</option>
      `;
  genreSelect.id = "genreSelect";
  sort.appendChild(genreSelect);

  let selectedValue = "";
  genreSelect.addEventListener("change", () => {
    selectedValue = genreSelect.options[genreSelect.selectedIndex].value;
  });

  const addNewCard = document.createElement("button");
  addNewCard.classList.add("newCard");
  addNewCard.textContent = "New card";
  addition.appendChild(addNewCard);
  let arr = [...cardsList];

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search";
  search.appendChild(searchInput);

  const btnSort = document.createElement("button");
  btnSort.classList.add("btnSort");
  btnSort.textContent = "Sort";
  sort.appendChild(btnSort);

  if (cardsList.length > 0) {
    const table = document.createElement("table");
    table.setAttribute("id", "cards");
    dataList.appendChild(table);

    const thead = document.createElement("thead");
    table.appendChild(thead);

    const headerRow = document.createElement("tr");
    headerRow.innerHTML =
      "<th>ID</th><th>Visitor</th><th>Book</th><th>Borrow date</th><th>Returne date</th>";
    thead.appendChild(headerRow);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    createTableDataCards(arr, tbody);

    btnSort.addEventListener("click", () => {
      console.log(selectedValue);

      if (selectedValue === "Name") {
        arr = sortByString("visitors", arr);
      }
      if (selectedValue === "Book") {
        arr = sortByString("title", arr);
      }
      if (selectedValue === "ID") {
        arr = sortByNumber("id", arr);
      }

      document.getElementById("cards").innerHTML = "";
      const thead = document.createElement("thead");
      table.appendChild(thead);

      const headerRow = document.createElement("tr");
      headerRow.innerHTML =
        "<th>ID</th><th>Visitor</th><th>Book</th><th>Borrow date</th><th>Returne date</th>";
      thead.appendChild(headerRow);
      const tbody = document.createElement("tbody");
      table.appendChild(tbody);
      createTableDataCards(arr, tbody);
      comBack();
    });

    let searchText = "";
    searchInput.addEventListener("input", (e) => {
      searchText = e.target.value;
      if (searchText !== "") {
        arr = filterCards(cardsList, searchText);
      } else {
        arr = [...cardsList];
      }

      document.getElementById("cards").innerHTML = "";
      const thead = document.createElement("thead");
      table.appendChild(thead);

      const headerRow = document.createElement("tr");
      headerRow.innerHTML =
        "<th>ID</th><th>Visitor</th><th>Book</th><th>Borrow date</th><th>Returne date</th>";
      thead.appendChild(headerRow);
      const tbody = document.createElement("tbody");
      table.appendChild(tbody);
      createTableDataCards(arr, tbody);
      comBack();
    });
  }

  // Вызов модального окна на добавление новой карты
  if (addNewCard) {
    addNewCard.addEventListener("click", function () {
      addBookContent.style.display = "flex";
      modal.style.height = "250px";
      changeContent.style.display = "none";
      win.classList.add("active");
      back.classList.add("active1");
      document.body.style.overflow = "hidden";
    });
  }
  closeModal();

  const textAddCard = document.createElement("h5");
  textAddCard.textContent = "Add a new visitor card:";
  addBookContent.appendChild(textAddCard);

  const visitorsList = document.createElement("select");
  addBookContent.appendChild(visitorsList);
  visitors.forEach((visitor) => {
    const option = document.createElement("option");
    option.value = visitor.id;
    option.textContent = visitor.fullName;
    visitorsList.appendChild(option);
  });

  const booksRow = document.createElement("select");
  addBookContent.appendChild(booksRow);
  bookList.forEach((book) => {
    const option = document.createElement("option");
    option.value = book.id;
    option.textContent = book.title;
    booksRow.appendChild(option);
  });

  const btnAddCard = document.createElement("button");
  btnAddCard.classList.add("btnAddCard");
  btnAddCard.textContent = "Add a new card";
  addBookContent.appendChild(btnAddCard);

  if (btnAddCard) {
    btnAddCard.addEventListener("click", function () {
      const selectedVisitor =
        visitorsList.options[visitorsList.selectedIndex].textContent;
      const selectedBooks =
        booksRow.options[booksRow.selectedIndex].textContent;
      const selectedBookIndex = booksRow.selectedIndex;

      if (selectedBookIndex !== -1) {
        const selectedBook = bookList[selectedBookIndex];

        if (selectedBook.copiesInLibrary > 0) {
          const newCard = {
            id: cardsList.length + 1,
            visitors: selectedVisitor,
            title: selectedBooks,
            borrowDate: new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            }),
          };
          cardsList.push(newCard);
          selectedBook.copiesInLibrary--;
          saveCardsToLocalStorage();
          createCardsTable();
          saveToLocalStorage();

          win.classList.remove("active");
          back.classList.remove("active1");
        } else {
          textAddCard.textContent =
            "No available copies of the book, please choose another book.";
          textAddCard.classList.add("error-message");
          textAddCard.style.fontSize = "14px";
          textAddCard.style.color = "#592547";
        }
      }
    });
  }
  // Возврат книги
  function comBack() {
    let change = document.querySelectorAll(".change");
    if (change) {
      change.forEach((button) => {
        button.addEventListener("click", function () {
          const newDiv = document.createElement("div");
          newDiv.textContent = new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          });
          const cardId = button.getAttribute("data-id");
          const cardIndex = cardsList.findIndex(
            (card) => card.id === parseInt(cardId)
          );

          cardsList[cardIndex].returneDate = newDiv.textContent;
          saveCardsToLocalStorage();

          const parentElement = button.parentNode;
          parentElement.replaceChild(newDiv, button);
          const selectedBookId = button.getAttribute("data-id");
          const selectedBookCard = cardsList.find(
            (book) => book.id === parseInt(selectedBookId)
          );
          const selectedBook = bookList.find(
            (book) => book.id === parseInt(selectedBookId)
          );
          bookList.forEach((book) => {
            if (selectedBookCard.title === book.title) {
              book.copiesInLibrary++;
              saveToLocalStorage();
              console.log("Selected Book Title:", selectedBook.title);
            }
          });
        });
      });
    }
  }
  comBack();
  document.body.style.overflow = "auto";
}

// функция построения и заполнения страницы Statistic
function createStatisticsPage() {
  dataList.innerHTML = "";
  sort.innerHTML = "";
  search.innerHTML = "";
  addition.innerHTML = "";
  cardsList = loadCardsFromLocalStorage();

  const top = document.createElement("div");
  top.classList.add("top");
  dataList.appendChild(top);

  if (cardsList.length > 0) {
    // Топ 5 книг
    const best5Book = document.createElement("div");
    best5Book.classList.add("best5Book");
    top.appendChild(best5Book);

    const bestBook = document.createElement("h2");
    bestBook.textContent = "List of popular books";
    best5Book.appendChild(bestBook);

    const titleCount = {};
    cardsList.forEach((card) => {
      const title = card.title;
      titleCount[title] = (titleCount[title] || 0) + 1;
    });
    const sortedTitles = Object.keys(titleCount).sort(
      (a, b) => titleCount[b] - titleCount[a]
    );
    const top5Titles = sortedTitles.slice(0, 5);

    const listElementT = document.createElement("ol");
    top5Titles.forEach((title, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${index + 1}. ${title}`;
      listElementT.appendChild(listItem);
    });
    best5Book.appendChild(listElementT);

    // Топ 5 посетителей
    const best5Visitors = document.createElement("div");
    best5Visitors.classList.add("best5Visitors");
    top.appendChild(best5Visitors);

    const bestVisitors = document.createElement("h2");
    bestVisitors.textContent = "List of popular visitors";
    best5Visitors.appendChild(bestVisitors);

    const visitorsCount = {};
    cardsList.forEach((card) => {
      const visitors = card.visitors;
      visitorsCount[visitors] = (visitorsCount[visitors] || 0) + 1;
    });
    const sortedVisitors = Object.keys(visitorsCount).sort(
      (a, b) => visitorsCount[b] - visitorsCount[a]
    );
    const top5Visitors = sortedVisitors.slice(0, 5);

    const listElementV = document.createElement("ol");
    top5Visitors.forEach((visitors, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${index + 1}. ${visitors}`;
      listElementV.appendChild(listItem);
    });
    best5Visitors.appendChild(listElementV);
  } else {
    const message = document.createElement("p");
    message.textContent = "No books have been borrowed from the library yet.";
    top.appendChild(message);
  }
}
