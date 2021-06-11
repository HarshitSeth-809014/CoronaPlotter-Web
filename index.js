function updateMap() {
    fetch('https://www.trackcorona.live/api/countries')
        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                latitude = element.latitude
                longitude = element.longitude
                cases = element.confirmed

                if (cases > 1500000) { color = "rgb(255, 0, 0)" }
                else if (cases <= 1500000 && cases > 500000) { color = "rgb(125, 14, 14)" }
                else if (cases <= 500000 && cases > 15000) { color = "rgb(77, 8, 8)" }
                else { color = "rgb(38, 3, 3)" }

                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
            });
        }
        )
}

updateMap()
setInterval(updateMap(), 900000);