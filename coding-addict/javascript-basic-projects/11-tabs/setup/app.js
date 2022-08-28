const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other btns
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    // hide all articles and display the one with matching id
    articles.forEach((article) => {
      article.classList.remove("active");
      document.getElementById(id).classList.add("active");
    });
  }
});
