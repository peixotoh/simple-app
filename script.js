const map = L.map('map').setView([50, 10], 4); // Centered over Europe

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Load GeoJSON
fetch('data/points.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name || 'No name');
      }
    }).addTo(map);
  });
