    // List of fake trader locations on land
    var locations = [
            [50.0755, 14.4378], // Prague, Czech Republic
            [59.3293, 18.0686], // Stockholm, Sweden
            [60.1699, 24.9384], // Helsinki, Finland
            [48.2082, 16.3738], // Vienna, Austria
            [47.4979, 19.0402], // Budapest, Hungary
            [56.9496, 24.1052], // Riga, Latvia
            [54.6872, 25.2797], // Vilnius, Lithuania
            [59.4370, 24.7536], // Tallinn, Estonia
            [53.3498, -6.2603], // Dublin, Ireland
            [47.1625, 19.5033], // Hungary
            [41.9028, 12.4964], // Rome, Italy
            [40.6401, 22.9444], // Thessaloniki, Greece
            [41.1579, -8.6291], // Porto, Portugal
            [45.7640, 4.8357], // Lyon, France
            [43.7102, 7.2620], // Nice, France
            [44.4268, 26.1025], // Bucharest, Romania
            [50.8503, 4.3517], // Brussels, Belgium
            [53.5511, 9.9937], // Hamburg, Germany
            [57.7089, 11.9746], // Gothenburg, Sweden
            [47.3769, 8.5417], // Zurich, Switzerland
            [46.2044, 6.1432], // Geneva, Switzerland
            [51.2277, 6.7735], // Dusseldorf, Germany
            [36.7202, -4.4203], // Malaga, Spain
            [41.3851, 2.1734], // Barcelona, Spain
            [53.4084, -2.9916], // Liverpool, UK
            [50.9097, -1.4044], // Southampton, UK
            [51.4552, -2.5967], // Bristol, UK
            [53.9590, -1.0815], // York, UK
            [52.6309, 1.2974], // Norwich, UK
            [52.9536, -1.1505], // Nottingham, UK
            [4.2105, 101.9758], // Malaysia
            [2.7456, 101.7072], // Sepang, Malaysia
            [3.8231, 103.3423], // Kuantan, Malaysia
            [5.9788, 116.0753], // Kota Kinabalu, Malaysia
            [3.1412, 101.6865], // Klang, Malaysia
            [-34.6037, -58.3816], // Buenos Aires, Argentina
            [-33.4489, -70.6693], // Santiago, Chile
            [-12.0464, -77.0428], // Lima, Peru
            [-25.2637, -57.5759], // Asuncion, Paraguay
            [-34.9011, -56.1645], // Montevideo, Uruguay
            [20.9674, -89.5926], // Merida, Mexico
            [19.4326, -99.1332], // Mexico City, Mexico
            [20.6597, -103.3496], // Guadalajara, Mexico
            [25.6866, -100.3161], // Monterrey, Mexico
            [22.1565, -100.9855], // San Luis Potosi, Mexico
            [-26.2708, 28.1123], // East Rand, South Africa
            [-29.6006, 30.3794], // Pietermaritzburg, South Africa
            [-33.7139, 25.5207], // Port Elizabeth, South Africa
            [-26.1076, 28.0567], // Sandton, South Africa
            [-29.8587, 31.0218], // Durban, South Africa
            [53.4808, -2.2426], // Manchester, UK
            [51.7520, -1.2577], // Oxford, UK
            [52.2053, 0.1218], // Cambridge, UK
            [55.3781, -3.4360], // Scotland, UK
            [52.4862, -1.8904], // Birmingham, UK
             [55.9533, -3.1883], // Edinburgh, UK
    [51.5074, -0.1278], // London, UK
    [37.7749, -122.4194], // San Francisco, USA
    [48.8566, 2.3522],  // Paris, France
    [40.7128, -74.0060], // New York, USA
    [34.0522, -118.2437], // Los Angeles, USA
    [43.6532, -79.3832], // Toronto, Canada
    [52.5200, 13.4050], // Berlin, Germany
    [19.4326, -99.1332], // Mexico City, Mexico
    [35.6895, 139.6917], // Tokyo, Japan
    [55.7558, 37.6173], // Moscow, Russia
    [39.9042, 116.4074], // Beijing, China
    [28.6139, 77.2090], // Delhi, India
    [34.0522, -118.2437], // Los Angeles, USA
    [52.3676, 4.9041], // Amsterdam, Netherlands
    [37.9838, 23.7275], // Athens, Greece
    [55.6761, 12.5683], // Copenhagen, Denmark
    [41.9028, 12.4964], // Rome, Italy
    [52.4862, -1.8904], // Birmingham, UK
    [47.3769, 8.5417], // Zurich, Switzerland
    [41.3851, 2.1734], // Barcelona, Spain
    [45.7640, 4.8357], // Lyon, France
    [53.3498, -6.2603], // Dublin, Ireland
    [59.3293, 18.0686], // Stockholm, Sweden
    [56.9496, 24.1052], // Riga, Latvia
    [54.6872, 25.2797], // Vilnius, Lithuania
    [44.4268, 26.1025], // Bucharest, Romania
    [41.0082, 28.9784], // Istanbul, Turkey
    [40.4168, -3.7038], // Madrid, Spain
    [45.5017, -73.5673], // Montreal, Canada
    [43.7384, 7.4246], // Monaco
    [50.1109, 8.6821], // Frankfurt, Germany
    [38.7223, -9.1393], // Lisbon, Portugal
    [48.1351, 11.5820], // Munich, Germany
    [60.1699, 24.9384], // Helsinki, Finland
    [50.0755, 14.4378], // Prague, Czech Republic
    [46.2044, 6.1432], // Geneva, Switzerland
    [44.8378, -0.5792], // Bordeaux, France
    [41.1579, -8.6291], // Porto, Portugal
    [59.9139, 10.7522], // Oslo, Norway
    [55.9533, -3.1883], // Edinburgh, UK
    [51.5074, -0.1278], // London, UK
    [37.7749, -122.4194], // San Francisco, USA
    [48.8566, 2.3522],  // Paris, France
    [40.7128, -74.0060], // New York, USA
    [34.0522, -118.2437], // Los Angeles, USA
    [43.6532, -79.3832], // Toronto, Canada
    [52.5200, 13.4050], // Berlin, Germany
    [19.4326, -99.1332], // Mexico City, Mexico
    [35.6895, 139.6917], // Tokyo, Japan
    [55.7558, 37.6173], // Moscow, Russia
    [39.9042, 116.4074], // Beijing, China
    [28.6139, 77.2090], // Delhi, India
    [34.0522, -118.2437], // Los Angeles, USA
    [52.3676, 4.9041], // Amsterdam, Netherlands
    [37.9838, 23.7275], // Athens, Greece
    [55.6761, 12.5683], // Copenhagen, Denmark
    [41.9028, 12.4964], // Rome, Italy
    [52.4862, -1.8904], // Birmingham, UK
    [47.3769, 8.5417], // Zurich, Switzerland
    [41.3851, 2.1734], // Barcelona, Spain
    [45.7640, 4.8357], // Lyon, France
    [53.3498, -6.2603], // Dublin, Ireland
    [59.3293, 18.0686], // Stockholm, Sweden
    [56.9496, 24.1052], // Riga, Latvia
    [54.6872, 25.2797], // Vilnius, Lithuania
    [44.4268, 26.1025], // Bucharest, Romania
    [41.0082, 28.9784], // Istanbul, Turkey
    [40.4168, -3.7038], // Madrid, Spain
    [45.5017, -73.5673], // Montreal, Canada
    [43.7384, 7.4246], // Monaco
    [50.1109, 8.6821], // Frankfurt, Germany
    [38.7223, -9.1393], // Lisbon, Portugal
    [48.1351, 11.5820], // Munich, Germany
    [60.1699, 24.9384], // Helsinki, Finland
    [50.0755, 14.4378], // Prague, Czech Republic
    [46.2044, 6.1432], // Geneva, Switzerland
    [44.8378, -0.5792], // Bordeaux, France
    [41.1579, -8.6291], // Porto, Portugal
    [59.9139, 10.7522] // Oslo, Norway
        ];
        