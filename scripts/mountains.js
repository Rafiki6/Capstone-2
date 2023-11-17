document.addEventListener("DOMContentLoaded", async () => {
     const mountain = document.getElementById("mountains");
     const photo = document.getElementById("photo");
    const description = document.getElementById("description");
    const sunriseSunsetInfo = document.getElementById("sunriseSunsetInfo");

    // Populate dropdown with mountain names
    for (let i = 0; i < mountainsArray.length; i++) {
        mountain.innerHTML += `<option value="${mountainsArray[i].name}">${mountainsArray[i].name}</option>`;
    }

    mountain.addEventListener("change", async (e) => {
        const selectedMountain = mountainsArray.find(mtn => mtn.name === e.target.value);

        if (selectedMountain) {
            // Display mountain image
            photo.src = `./images/${selectedMountain.img}`;

            // Display mountain information
            description.innerHTML = `<h1>${selectedMountain.name}</h1>`;
            description.innerHTML += `<p>${selectedMountain.desc}</p>`;
            description.innerHTML += `<h3>Elevation: ${selectedMountain.elevation}</h3>`;

            // Fetch sunrise/sunset times for the selected mountain's coordinates
            const sunsetData = await getSunsetForMountain(selectedMountain.coords.lat, selectedMountain.coords.lng);
            
            if (sunsetData && sunsetData.results) {
                const { sunrise, sunset } = sunsetData.results;
                sunriseSunsetInfo.innerHTML = `<h3>Sunrise: ${sunrise}</h3><h3>Sunset: ${sunset}</h3>`;
            } else {
                sunriseSunsetInfo.innerHTML = '<h3>Sunrise/sunset data not available</h3>';
            }
        }
    });
});

// Function to fetch sunrise/sunset times for a given latitude and longitude
async function getSunsetForMountain(lat, lng) {
    try {
        const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching sunrise/sunset data:', error);
        return null;
    }
}