const buttonCategory = async () => {
    const res = await fetch(" https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    console.log(data.data[0].category)
    const buttonContainer =document.getElementById("button-container");
    data.data.forEach(category => {
        console.log(category.category)
        const button = document.createElement("button");
        button.innerHTML = `<button class="btn normal-case btn-active">${category.category}</button>`;
        buttonContainer.appendChild(button);
       
    });
}
buttonCategory();