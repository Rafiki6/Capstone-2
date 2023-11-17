
locationsArray.forEach(location => locationsList.innerHTML += `<option>${location}</option>`);
parkTypesArray.forEach(park => parksList.innerHTML += `<option>${park}</option>`);

let selectLocation = "";
let selectParkType = "";


locationsList.addEventListener("change", e => {
    selectLocation = e.target.value;
    showResults();
});

parksList.addEventListener("change", e => {
    selectParkType = e.target.value;
    showResults();
})

function showResults() {
     const result = document.getElementById("result");
    result.innerHTML = "";
    nationalParksArray.filter(
        p => (p.selectLocation == "" || p.State == selectLocation) &&
        (p.selectParkType == "" || p.LocationName.includes(selectParkType))
    ).forEach(p =>
        result.innerHTML += `<div class="card">${p.LocationName}
        <div><b>${p.State}</b></div`)
}
showResults();