document.addEventListener("DOMContentLoaded", function() {
    const dynamicContentBtn = document.getElementById("dynamicContentBtn");

    dynamicContentBtn.addEventListener("click", function() {
        const newContent = document.createElement("p");
        newContent.textContent = "Conteúdo adicionado dinamicamente!";
        document.body.appendChild(newContent);
    });

    const photos = document.querySelectorAll(".photos img");
    photos.forEach(photo => {
        photo.addEventListener("mouseover", function() {
            photo.style.transform = "scale(1.1)";
        });
        photo.addEventListener("mouseout", function() {
            photo.style.transform = "scale(1)";
        });
    });

    const texts = document.querySelectorAll(".text-section div");
    texts.forEach(text => {
        text.addEventListener("click", function() {
            text.style.backgroundColor = "yellow";
        });
    });
});
