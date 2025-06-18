const data = [
    {
        location: "London",
        latitude: 51.5072,
        longitude: -0.1278
    },
    {
        location: "New York",
        latitude: 40.7128,
        longitude: -74.0060
    },
    {
        loaction: "Tokyo",
        latitude: 35.6762,
        longitude: 139.6503
    },
    {
        location: "Paris",
        latitude: 48.8566,
        longitude: 2.3522
    },
    {
        location: "Dhaka",
        latitude: 23.8103,
        longitude: 90.4125
    }

];

function getLocations() {
    return data;
};

function getLocationByName(location) {
    if (!location) return null;
    const filtered = data.filter((item) => item.location === location);
    if (filtered.length > 0) {
        return filtered[0];
    } else {
        const defaultLocation = { location: "", latitude: 0, longitude: 0 };
        return defaultLocation;
    }
};

export { getLocations, getLocationByName };