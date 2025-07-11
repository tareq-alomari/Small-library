// بيانات أولية
// let books = [
//   { title: "الخيميائي", author: "باولو كويلو", id: 1 },
//   { title: "أوليفر تويست", author: "تشارلز ديكنز", id: 2 }
// ];

let books = JSON.parse(localStorage.getItem("books")) || [];
displayBooks(books);

// عرض الكتب
function displayBooks(list) {
  const container = document.getElementById("bookList");
  container.innerHTML = '';
  list.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>✍️ ${book.author}</p>
      <a href="book-details.html?id=${book.id}">عرض التفاصيل</a>
    `;
    container.appendChild(card);
  });
}

displayBooks(books);

// بحث
document.getElementById("searchInput").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = books.filter(book => book.title.toLowerCase().includes(value));
  displayBooks(filtered);
});
