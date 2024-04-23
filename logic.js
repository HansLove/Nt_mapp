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

    // Function to add markers
    function addMarkers(group) {
        group.forEach(function(loc) {
            var marker = L.circleMarker(loc, {
                color: 'lime',
                fillColor: 'forestgreen',
                fillOpacity: 0.5,
                radius: 8
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
                    radius: 8
                }).addTo(map);
                marker.getElement().classList.add('blink-marker');
            }, Math.random() * 4000 + 1000); // Random delay between 1 to 5 seconds
        });
    }

    // Set the initial group to display 15 locations immediately
    var immediateGroup = locations.slice(0, 15);
    addMarkers(immediateGroup); // Add immediate markers

    // All remaining locations will be added with delays
    var remainingGroup = locations.slice(15); 
    addMarkersWithDelay(remainingGroup); // Add remaining markers with delays
});
