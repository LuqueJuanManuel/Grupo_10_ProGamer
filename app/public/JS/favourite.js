let favourite = document.querySelectorAll(".fa-heart")

favourite.forEach(heart => {
    heart.addEventListener('click', ()=>heart.classList.toggle("active"));
})