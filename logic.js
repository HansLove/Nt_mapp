document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map', {
        center: [20, 0],
        zoom: 3,  // Adjusted zoom level to better view the initial spread of locations
        maxBoundsViscosity: 1.0,
        maxBounds: [[-90, -180], [90, 180]] // Sets boundaries to prevent infinite scrolling.
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 14,
        noWrap: true, // Prevents the map from wrapping around horizontally.
        attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                     '<a href="https://carto.com/attribution">CARTO</a>'
    }).addTo(map);

    const circle_size=5
    // Function to add markers
    function addMarkers(group) {
        group.forEach(function(loc) {
            var marker = L.circleMarker(loc, {
                color: 'lime',
                fillColor: 'forestgreen',
                fillOpacity: 0.5,
                radius: circle_size
            }).addTo(map);
            marker.getElement().classList.add('blink-marker');
        });
    }

    // Function to add markers with random delays
    function addMarkersWithDelay(group) {
        group.forEach(function(loc) {
            setTimeout(function() {
                var marker = L.circleMarker(loc, {
                    color: 'lime',
                    fillColor: 'forestgreen',
                    fillOpacity: 0.5,
                    radius: circle_size
                }).addTo(map);
                marker.getElement().classList.add('blink-marker');
            }, Math.random() * 24000 + 1000); 
        });
    }

    // Calculate the number of initial markers based on a percentage of the total locations
    var initialDisplayPercent = 28; // Percentage of locations to display immediately
    var initialDisplayCount = Math.floor(locations.length * (initialDisplayPercent / 100));
    var immediateGroup = locations.slice(0, initialDisplayCount);
    addMarkers(immediateGroup); // Add immediate markers

    // All remaining locations will be added with delays
    var remainingGroup = locations.slice(initialDisplayCount); 
    addMarkersWithDelay(remainingGroup); // Add remaining markers with delays
});
