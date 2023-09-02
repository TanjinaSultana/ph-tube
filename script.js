const buttonCategory = async () => {
    const res = await fetch(" https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
   
    const buttonContainer =document.getElementById("button-container");
    
    data.data.forEach(category => {
       //console.log(category.category_id)
        const button = document.createElement("button");
        button.innerHTML = `
        <button onclick="loadNews('${category.category_id}')" class="btn normal-case btn-active">${category.category}</button>`;
        buttonContainer.appendChild(button);
        
       
    });
  
   
}


const loadNews = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json();
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerText = "";
    const noContainer = document.getElementById("no-container");
    noContainer.innerHTML = ""
    if(data.status === true){
       
        data.data.forEach(category => {
            const sec = category.others.posted_date;
            const hrs = Math.floor(sec / 3600); 
             const mins = Math.floor((sec % 3600) / 60);

        console.log(category)
                    const div = document.createElement("div");
                   
                    div.innerHTML = ` <div class="card w-72 bg-base-100 shadow-xl">
                    <figure >
                      <img src="${category.thumbnail}" alt="" class=" relative  rounded-xl h-[200px] w-[100%]" />
                      <button  class=" normal-case bg-black text-white text-sm absolute inline-block -mb-40 ml-48">${hrs} hrs ${mins} min ago</button>
                    </figure>
                    <div class="card-body items-center text-center">
                        <div class="flex flex-row  gap-4">
                            <img src="${category?.authors[0]?.profile_picture}" class="rounded-full w-12 h-12 ml-0" />
                            <h2 class="card-title">${category.title}</h2>
                        </div>
                     
                      <p> ${category?.authors[0]?.profile_name}</p>
                      <p> ${category.others.views} views</p>
                      
                    </div>
                  </div>`;
                    cardContainer.appendChild(div);
                   } );
    }else{
        
    const div = document.createElement("div");
   div.innerHTML = `
   <div class="">
        <img src="Icon.png" class=" w-20 h-20 ml-[570px]">
        <p class="text-xl font-medium ml-[500px] mt-4">Oops!! Sorry, There is no content here</p>
    </div>`;
    noContainer.appendChild(div);
    
    }
   
          

}
buttonCategory();
