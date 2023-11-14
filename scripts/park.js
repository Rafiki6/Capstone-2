
document.addEventListener("DOMContentLoaded",()=>{
    const location = document.getElementById("parks");

    for(let i = 0; i < locationsArray.length;i++){
        location.innerHTML += `option value="${locationsArray[i]}"`
    }
    location.addEventListener("change", (e) =>{
        for(let i = 0; i< locationsArray.length;i++){
            
        }
    })
})