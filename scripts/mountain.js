document.addEventListener("DOMContentLoaded", () =>{

    const mountain = document.getElementById("mountains");
    const photo = document.getElementById("photo");

    for(let i = 0; i< mountainsArray.length;i++){
        mountain.innerHTML +=`<option value="${mountainsArray[i].name}">${mountainsArray[i].name}</option>`;

    }
    mountain.addEventListener("change", (e) =>{
        for(let i =0; i < mountainsArray.length; i++){
            if(e.target.value == mountainsArray[i].name){
                photo.src ="./images/"+ mountainsArray[i].img;
                const namePath = mountainsArray[i].name;
                const nameElement = document.getElementById("description");
                
                const descPath = mountainsArray[i].desc;
                const elevPath = mountainsArray[i].elevation;
                nameElement.innerHTML = `<h1>${namePath}</h1>`;
                nameElement.innerHTML += descPath;
                nameElement.innerHTML += `<h3>${elevPath}</h3>`;
               
                
            }
        }
    })
})