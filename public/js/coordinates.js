async function geocode(location) {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`,
        {
            headers: {
                "User-Agent": "wanderlust-app/1.0"
            }
        }
    );

    const data = await response.json();

    if (!data.length) {
        return null;
    }

    return {
        type: "Point",
        coordinates: [
            parseFloat(data[0].lon),
            parseFloat(data[0].lat)
        ]
    };
}

module.exports = geocode;