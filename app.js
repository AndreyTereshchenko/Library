let bookList = [
  {
    id: 1,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1966,
    publisher: "Художественная литература",
    pages: 480,
    copiesInLibrary: 5,
  },
  {
    id: 2,
    title: "Преступление и наказание",
    author: "Федор Достоевский",
    year: 1866,
    publisher: "Русский вестник",
    pages: 671,
    copiesInLibrary: 3,
  },
  {
    id: 3,
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    publisher: "Русский вестник",
    pages: 1225,
    copiesInLibrary: 7,
  },
  {
    id: 4,
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    publisher: "Secker & Warburg",
    pages: 328,
    copiesInLibrary: 3,
  },
  {
    id: 5,
    title: "Анна Каренина",
    author: "Лев Толстой",
    year: 1877,
    publisher: "Русский вестник",
    pages: 864,
    copiesInLibrary: 4,
  },
  {
    id: 6,
    title: "Три товарища",
    author: "Эрих Мария Ремарк",
    year: 1936,
    publisher: "АСТ",
    pages: 512,
    copiesInLibrary: 6,
  },
  {
    id: 7,
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    publisher: "Bloomsbury",
    pages: 223,
    copiesInLibrary: 6,
  },
  {
    id: 8,
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    publisher: "George Allen & Unwin",
    pages: 1178,
    copiesInLibrary: 3,
  },
  {
    id: 9,
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    year: 1943,
    publisher: "Reynal & Hitchcock",
    pages: 91,
    copiesInLibrary: 4,
  },
  {
    id: 10,
    title: "Унесенные ветром",
    author: "Маргарет Митчелл",
    year: 1936,
    publisher: "Macmillan Publishers",
    pages: 1037,
    copiesInLibrary: 2,
  },
  {
    id: 11,
    title: "Мертвые души",
    author: "Николай Гоголь",
    year: 1842,
    publisher: "Современник",
    pages: 352,
    copiesInLibrary: 5,
  },
  {
    id: 12,
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    publisher: "Русский вестник",
    pages: 1225,
    copiesInLibrary: 7,
  },
  {
    id: 13,
    title: "Убить пересмешника",
    author: "Харпер Ли",
    year: 1960,
    publisher: "J. B. Lippincott & Co.",
    pages: 281,
    copiesInLibrary: 5,
  },
  {
    id: 14,
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    publisher: "Secker & Warburg",
    pages: 328,
    copiesInLibrary: 3,
  },
  {
    id: 15,
    title: "Великий Гэтсби",
    author: "Фрэнсис Скотт Фицджеральд",
    year: 1925,
    publisher: "Charles Scribner's Sons",
    pages: 180,
    copiesInLibrary: 7,
  },
  {
    id: 16,
    title: "Гордость и предубеждение",
    author: "Джейн Остин",
    year: 1813,
    publisher: "T. Egerton",
    pages: 279,
    copiesInLibrary: 4,
  },
  {
    id: 17,
    title: "Ловец в житомире",
    author: "Дж.Д. Сэлинджер",
    year: 1951,
    publisher: "Little, Brown and Company",
    pages: 277,
    copiesInLibrary: 6,
  },
  {
    id: 18,
    title: "Моби Дик; или, Кит",
    author: "Герман Мелвилл",
    year: 1851,
    publisher: "Harper & Brothers",
    pages: 625,
    copiesInLibrary: 2,
  },
  {
    id: 19,
    title: "Властелин мух",
    author: "Уильям Голдинг",
    year: 1954,
    publisher: "Faber and Faber",
    pages: 224,
    copiesInLibrary: 3,
  },
  {
    id: 20,
    title: "Хоббит",
    author: "Дж.Р.Р. Толкиен",
    year: 1937,
    publisher: "George Allen & Unwin",
    pages: 310,
    copiesInLibrary: 5,
  },
  {
    id: 21,
    title: "Алхимик",
    author: "Пауло Коэльо",
    year: 1988,
    publisher: "HarperOne",
    pages: 197,
    copiesInLibrary: 4,
  },
  {
    id: 22,
    title: "О дивный новый мир",
    author: "Олдос Хаксли",
    year: 1932,
    publisher: "Chatto & Windus",
    pages: 311,
    copiesInLibrary: 2,
  },
  {
    id: 23,
    title: "Властелин колец",
    author: "Дж.Р.Р. Толкиен",
    year: 1954,
    publisher: "George Allen & Unwin",
    pages: 1178,
    copiesInLibrary: 3,
  },
  {
    id: 24,
    title: "Код да Винчи",
    author: "Дэн Браун",
    year: 2003,
    publisher: "Doubleday",
    pages: 454,
    copiesInLibrary: 5,
  },
  {
    id: 25,
    title: "Сияние",
    author: "Стивен Кинг",
    year: 1977,
    publisher: "Doubleday",
    pages: 447,
    copiesInLibrary: 4,
  },
  {
    id: 26,
    title: "Гарри Поттер и философский камень",
    author: "Дж.К. Роулинг",
    year: 1997,
    publisher: "Bloomsbury",
    pages: 223,
    copiesInLibrary: 6,
  },
  {
    id: 27,
    title: "Игры голода",
    author: "Сьюзен Коллинз",
    year: 2008,
    publisher: "Scholastic",
    pages: 374,
    copiesInLibrary: 3,
  },
  {
    id: 28,
    title: "Сто лет одиночества",
    author: "Габриэль Гарсиа Маркес",
    year: 1967,
    publisher: "Харпер и Роу",
    pages: 417,
    copiesInLibrary: 5,
  },
  {
    id: 29,
    title: "Портрет Дориана Грея",
    author: "Оскар Уайльд",
    year: 1890,
    publisher: "Lippincott's Monthly Magazine",
    pages: 254,
    copiesInLibrary: 2,
  },
  {
    id: 30,
    title: "Тень горы",
    author: "Грегори Дэвид Робертс",
    year: 1997,
    publisher: "Random House",
    pages: 304,
    copiesInLibrary: 4,
  },
];

let visitors = [
  {
    id: 1,
    fullName: "Иванов Иван Иванович",
    phoneNumber: "+1 (123) 456-7890",
  },
  {
    id: 2,
    fullName: "Петров Петр Петрович",
    phoneNumber: "+1 (234) 567-8901",
  },
  {
    id: 3,
    fullName: "Сидоров Алексей Владимирович",
    phoneNumber: "+1 (345) 678-9012",
  },
  {
    id: 4,
    fullName: "Смирнова Елена Сергеевна",
    phoneNumber: "+1 (456) 789-0123",
  },
  {
    id: 5,
    fullName: "Козлов Валентин Павлович",
    phoneNumber: "+1 (567) 890-1234",
  },
  {
    id: 6,
    fullName: "Морозова Ольга Николаевна",
    phoneNumber: "+1 (678) 901-2345",
  },
  {
    id: 7,
    fullName: "Павлов Андрей Александрович",
    phoneNumber: "+1 (789) 012-3456",
  },
  {
    id: 8,
    fullName: "Васильева Анна Игоревна",
    phoneNumber: "+1 (890) 123-4567",
  },
  {
    id: 9,
    fullName: "Зайцев Михаил Викторович",
    phoneNumber: "+1 (901) 234-5678",
  },
  {
    id: 10,
    fullName: "Кузнецова Екатерина Валентиновна",
    phoneNumber: "+1 (012) 345-6789",
  },
  {
    id: 11,
    fullName: "Крылов Андрей Сергеевич",
    phoneNumber: "+1 (123) 456-7890",
  },
  {
    id: 12,
    fullName: "Лебедева Анна Алексеевна",
    phoneNumber: "+1 (234) 567-8901",
  },
  {
    id: 13,
    fullName: "Максимов Павел Дмитриевич",
    phoneNumber: "+1 (345) 678-9012",
  },
  {
    id: 14,
    fullName: "Николаева Лариса Викторовна",
    phoneNumber: "+1 (456) 789-0123",
  },
  {
    id: 15,
    fullName: "Орлов Сергей Анатольевич",
    phoneNumber: "+1 (567) 890-1234",
  },
  {
    id: 16,
    fullName: "Попов Артем Игоревич",
    phoneNumber: "+1 (678) 901-2345",
  },
  {
    id: 17,
    fullName: "Романова Валентина Петровна",
    phoneNumber: "+1 (789) 012-3456",
  },
  {
    id: 18,
    fullName: "Семенов Денис Владимирович",
    phoneNumber: "+1 (890) 123-4567",
  },
  {
    id: 19,
    fullName: "Тарасов Андрей Алексеевич",
    phoneNumber: "+1 (901) 234-5678",
  },
  {
    id: 20,
    fullName: "Федорова Людмила Ивановна",
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
    }
    if (activeButton.id === "Visitors") {
      createVisitorsTable();
    }
    if (activeButton.id === "Cards") {
      createCardsTable();
    }
    if (activeButton.id === "Statistics") {
      createStatisticsPage();
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
        item.title.toLowerCase().includes(s)||
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
        item.visitors.toLowerCase().includes(s)||
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
      document.body.style.overflow = 'auto';
    });
  }
  if (back) {
    back.addEventListener("click", function () {
      win.classList.remove("active");
      back.classList.remove("active1");
      document.body.style.overflow = 'auto';
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
      document.body.style.overflow = 'hidden';

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
  btnChange.textContent = "Добавить изменение";
  changeButtons.appendChild(btnChange);

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btnDelete");
  btnDelete.textContent = "Удалить книгу";
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
  // Обновление текста поиска при изменении ввода
  searchText = e.target.value;
  // Фильтрация данных по введенному тексту
  if (searchText !== "") {
    arr = filterBooks(bookList, searchText);
  } else {
    arr = [...bookList];
  }
  // Очистка таблицы и создание новой после фильтрации
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

  const btnSearch = document.createElement("button");
  btnSearch.classList.add("btnSearch");
  btnSearch.textContent = "Search";
  search.appendChild(btnSearch);
  btnSearch.addEventListener("click", () => {
    console.log(searchText);
    if (searchText !== "") {
      arr = filterBooks(arr, searchText);
    } else {
      arr = [...bookList];
    }
    console.log(arr);
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
      document.body.style.overflow = 'hidden';
    });
  }
  closeModal();

  const textAddBook = document.createElement("h5");
  textAddBook.textContent = "Добавить новую книгу:";
  addBookContent.appendChild(textAddBook);

  const modalTitle = document.createElement("input");
  modalTitle.type = "text";
  modalTitle.placeholder = "Название книги";
  addBookContent.appendChild(modalTitle);

  const modalAuthor = document.createElement("input");
  modalAuthor.type = "text";
  modalAuthor.placeholder = "Автор";
  addBookContent.appendChild(modalAuthor);

  const modalYear = document.createElement("input");
  modalYear.type = "text";
  modalYear.placeholder = "Год публикации";
  addBookContent.appendChild(modalYear);

  const modalPublisher = document.createElement("input");
  modalPublisher.type = "text";
  modalPublisher.placeholder = "Издательство";
  addBookContent.appendChild(modalPublisher);

  const modalPages = document.createElement("input");
  modalPages.type = "text";
  modalPages.placeholder = "Колличество страниц";
  addBookContent.appendChild(modalPages);

  const modalCopies = document.createElement("input");
  modalCopies.type = "text";
  modalCopies.placeholder = "Коллчество экземпляров";
  addBookContent.appendChild(modalCopies);

  const btnAddBook = document.createElement("button");
  btnAddBook.classList.add("btnAddBook");
  btnAddBook.textContent = "Добаивить книгу";
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
        textAddBook.textContent = "Пожалуйста, заполните все поля.";
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
        textAddBook.textContent = "Пожалуйста, введите правельно год.";
        textAddBook.classList.add("error-message");
        textAddBook.style.fontSize = "24px";
        textAddBook.style.color = "#592547";
        return;
      }
      if (!/^\d+$/.test(newPages) || newPages < 0) {
        textAddBook.textContent =
          "Пожалуйста, введите правельно количество страниц.";
        textAddBook.classList.add("error-message");
        textAddBook.style.fontSize = "16px";
        textAddBook.style.color = "#592547";
        return;
      }
      if (!/^\d+$/.test(newCopies) || newCopies < 0) {
        textAddBook.textContent =
          "Пожалуйста, введите правельно количество копий.";
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
      document.body.style.overflow = 'auto';
      win.classList.remove("active");
      back.classList.remove("active1");
    });
  }

  changeModal();

  const textChangeBook = document.createElement("h5");
  textChangeBook.textContent = "Введите изменения:";
  changeContent.appendChild(textChangeBook);

  const changeTitle = document.createElement("input");
  changeTitle.type = "text";
  changeTitle.placeholder = "Название книги";
  changeContent.appendChild(changeTitle);

  const changeAuthor = document.createElement("input");
  changeAuthor.type = "text";
  changeAuthor.placeholder = "Автор";
  changeContent.appendChild(changeAuthor);

  const changeYear = document.createElement("input");
  changeYear.type = "text";
  changeYear.placeholder = "Год публикации";
  changeContent.appendChild(changeYear);

  const changePublisher = document.createElement("input");
  changePublisher.type = "text";
  changePublisher.placeholder = "Издательство";
  changeContent.appendChild(changePublisher);

  const changePages = document.createElement("input");
  changePages.type = "text";
  changePages.placeholder = "Колличество страниц";
  changeContent.appendChild(changePages);

  const changeCopies = document.createElement("input");
  changeCopies.type = "text";
  changeCopies.placeholder = "Коллчество экземпляров";
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
        textChangeBook.textContent = "Пожалуйста, заполните все поля.";
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
        textChangeBook.textContent = "Пожалуйста, введите правельно год.";
        textChangeBook.classList.add("error-message");
        textChangeBook.style.fontSize = "24px";
        textChangeBook.style.color = "#592547";
        return;
      }
      if (!/^\d+$/.test(newPages) || newPages < 0) {
        textChangeBook.textContent =
          "Пожалуйста, введите правельно количество страниц.";
        textChangeBook.classList.add("error-message");
        textChangeBook.style.fontSize = "16px";
        textChangeBook.style.color = "#592547";
        return;
      }
      if (!/^\d+$/.test(newCopies) || newCopies < 0) {
        textChangeBook.textContent =
          "Пожалуйста, введите правельно количество копий.";
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
      document.body.style.overflow = 'auto';
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
      document.body.style.overflow = 'auto';
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
      const newDiv = document.createElement("div");
      newDiv.textContent = card.returndate;
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
  });

  const btnSearch = document.createElement("button");
  btnSearch.classList.add("btnSearch");
  btnSearch.textContent = "Search";
  search.appendChild(btnSearch);
  btnSearch.addEventListener("click", () => {
    console.log(searchText);
    if (searchText !== "") {
      arr = filterVisitors(arr, searchText);
    } else {
      arr = [...visitors];
    }
    console.log(arr);
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
      document.body.style.overflow = 'hidden';
    });
  }
  closeModal();
  const textAddVisitors = document.createElement("h5");
  textAddVisitors.textContent = "Добавить нового посетителя:";
  addBookContent.appendChild(textAddVisitors);

  const modalName = document.createElement("input");
  modalName.type = "text";
  modalName.placeholder = "Введите имя и фамилию";
  addBookContent.appendChild(modalName);

  const modalPhone = document.createElement("input");
  modalPhone.type = "text";
  modalPhone.placeholder = "Введите номер телефона";
  addBookContent.appendChild(modalPhone);

  const btnAddVisitors = document.createElement("button");
  btnAddVisitors.classList.add("btnAVisitors");
  btnAddVisitors.textContent = "Добавить нового посетителя";
  addBookContent.appendChild(btnAddVisitors);

  // Добовление нового посетителя
  if (btnAddVisitors) {
    btnAddVisitors.addEventListener("click", function () {
      const newPhone = modalPhone.value.trim();
      const newName = modalName.value.trim();
      
      if (newPhone === "" || newName === "") {
        textAddVisitors.textContent = "Пожалуйста, заполните все поля.";
        textAddVisitors.classList.add("error-message");
        textAddVisitors.style.fontSize = "24px";
        textAddVisitors.style.color = "#592547";
        return;
      }
      if (!/^[-+()\d]+$/.test(newPhone)){
        textAddVisitors.textContent = "Пожалуйста, введите корректный номер телефона";
        textAddVisitors.classList.add("error-message");
        textAddVisitors.style.fontSize = "16px";
        textAddVisitors.style.color = "#592547";
        return;
      }
      if (!/^[a-zA-Zа-яА-Я\s]+$/.test(newName)) {
        textAddVisitors.textContent = "Пожалуйста, введите корректное имя";
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
      document.body.style.overflow = 'auto';
   });
  
  }
  changeModal();

  const textChangeVisitors = document.createElement("h5");
  textChangeVisitors.textContent = "Введите изменения:";
  changeContent.appendChild(textChangeVisitors);

  const changeName = document.createElement("input");
  changeName.type = "text";
  changeName.placeholder = "Введите имя и фамилию";
  changeContent.appendChild(changeName);

  const changePhone = document.createElement("input");
  changePhone.type = "text";
  changePhone.placeholder = "Введите номер телефона";
  changeContent.appendChild(changePhone);

  const changeButtons = document.createElement("div");
  changeButtons.classList.add("changeButtons");
  changeContent.appendChild(changeButtons);

  const btnChange = document.createElement("button");
  btnChange.classList.add("btnChange");
  btnChange.textContent = "Добавить изменения";
  changeButtons.appendChild(btnChange);

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btnDelete");
  btnDelete.textContent = "Удалить посетителя";
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
      document.body.style.overflow = 'auto';
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
        textChangeVisitors.textContent = "Пожалуйста, заполните все поля.";
        textChangeVisitors.classList.add("error-message");
        textChangeVisitors.style.fontSize = "24px";
        textChangeVisitors.style.color = "#592547";
        return;
      }
      
      if (!/^[-+()\d]+$/.test(newPhone)){
        textChangeVisitors.textContent = "Пожалуйста, введите корректный номер телефона";
        textChangeVisitors.classList.add("error-message");
        textChangeVisitors.style.fontSize = "16px";
        textChangeVisitors.style.color = "#592547";
        return;
      }
      if (!/^[a-zA-Zа-яА-Я\s]+$/.test(newName)) {
        textChangeVisitors.textContent = "Пожалуйста, введите корректное имя";
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
      document.body.style.overflow = 'auto';
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
  let searchText = "";
  searchInput.addEventListener("input", (e) => {
    searchText = e.target.value;
  });

  const btnSearch = document.createElement("button");
  btnSearch.classList.add("btnSearch");
  btnSearch.textContent = "Search";
  search.appendChild(btnSearch);
  btnSearch.addEventListener("click", () => {
    console.log(searchText);
    if (searchText !== "") {
      arr = filterCards(arr, searchText);
    } else {
      arr = [...cardsList];
    }
    console.log(arr);
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
      deleteBook();
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
      document.body.style.overflow = 'hidden';
    });
  }
  closeModal();

  const textAddCard = document.createElement("h5");
  textAddCard.textContent = "Добавить новую карту посетителя:";
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
  btnAddCard.textContent = "Добавить новую карту";
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
            "Нет доступных копий книги, пожалуйста, выберете другую книгу.";
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
  document.body.style.overflow = 'auto';
}

// функция построения и заполнения страницы Statistic
function createStatisticsPage() {
  dataList.innerHTML = "";
  sort.innerHTML = "";
  search.innerHTML = "";
  addition.innerHTML = "";
  cardsList = loadCardsFromLocalStorage();

  if (cardsList.length > 0) {
    // Топ 5 книг
    const best5Book = document.createElement("div");
    best5Book.classList.add("best5Book");
    dataList.appendChild(best5Book);

    const bestBook = document.createElement("h2");
    bestBook.textContent = "Список популярных книг";
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
    dataList.appendChild(best5Visitors);

    const bestVisitors = document.createElement("h2");
    bestVisitors.textContent = "Список популярных посетителей";
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
  }
}
