document.addEventListener("DOMContentLoaded", () =>{

    const mountain = document.getElementById("mountains");
    const photo = document.getElementById("photo");

    for(let i = 0; i<mountainsArray.length;i++){
        mountainsArray.innerHTML +=`option value ${mountainsArray[i].name}</option>`;

    }
    mountain.addEventListener("change", (e) =>{
        for(let i =0; i < mountainsArray.length; i++){
            if(e.target.value == mountainsArray[i].name){
                photo.src ="./images/"+ mountainsArray[i].img;
                const namePath = mountainsArray[i].name;
                const nameElement = document.getElementById("description");
            }
        }
    })
})