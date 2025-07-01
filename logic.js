document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map', {
      center: [20, 0],
      zoom: 3,
      maxBoundsViscosity: 1.0,
      maxBounds: [[-90, -180], [90, 180]],
    });
  
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 14,
      noWrap: true,
      attribution:
        'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="https://carto.com/attribution">CARTO</a>',
    }).addTo(map);
  
    const circle_size = 6;
    const border_size = 0.7;

    function showTraderSummary(trader) {
        document.getElementById('summaryName').textContent = trader.username;
        document.getElementById('summaryPnL').textContent = `$${trader.pnl.toFixed(2)}`;
      
        const tradeList = document.getElementById('tradeList');
        tradeList.innerHTML = ''; // Clear old trades
        trader.trades.forEach(trade => {
          const li = document.createElement('li');
          li.innerHTML = `${trade.symbol}: <span style="color:${trade.profit >= 0 ? 'lime' : 'crimson'}">${trade.profit >= 0 ? '+' : ''}${trade.profit}</span>`;
          tradeList.appendChild(li);
        });
      
        document.getElementById('traderSummary').style.display = 'block';
      }
      
  
    function getColorByPnL(pnl) {
        console.log("Pnl value: ",pnl)
      if (pnl > 0) return 'rgba(0, 255, 0, 0.6)';
      if (pnl < 0) return 'rgba(255, 51, 0, 0.5)';
      return 'gray';
    }
  
    function addMarkers(group) {

      group.forEach(function (loc) {
        const coords = [loc.lat || loc[0], loc.lng || loc[1]];
        const color = getColorByPnL(loc.pnl || 0);
        const marker = L.circleMarker(coords, {
          color: color,
          fillColor: color,
          fillOpacity: 0.6,
          radius: circle_size,
          weight: border_size,
        }).addTo(map);
  
        marker.getElement().classList.add('blink-marker');

        marker.on('click', () => {
            showTraderSummary(loc);
          });
          
  
        if (loc.username || loc.pnl !== undefined) {
          marker.bindPopup(
            `<strong>${loc.username || 'Trader'}</strong><br>PnL: $${(loc.pnl || 0).toFixed(2)}`
          );
        }
      });
    }
  
    function addMarkersWithDelay(group) {
      group.forEach(function (loc) {
        setTimeout(function () {
          const coords = [loc.lat || loc[0], loc.lng || loc[1]];
          const color = getColorByPnL(loc.pnl || 0);
          const marker = L.circleMarker(coords, {
            color: color,
            fillColor: color,
            fillOpacity: 0.6,
            radius: circle_size,
            weight: border_size,
          }).addTo(map);
  
          marker.getElement().classList.add('blink-marker');

          marker.on('click', () => {
            showTraderSummary(loc);
          });
          
  
          if (loc.username || loc.pnl !== undefined) {
            marker.bindPopup(
              `<strong>${loc.username || 'Trader'}</strong><br>PnL: $${(loc.pnl || 0).toFixed(2)}`
            );
          }
        }, Math.random() * 24000 + 1000);
      });
    }
  
    // Mostrar porcentaje inmediato
    const initialDisplayPercent = 28;
    const initialDisplayCount = Math.floor(locations.length * (initialDisplayPercent / 100));
    const immediateGroup = locations.slice(0, initialDisplayCount);
    const remainingGroup = locations.slice(initialDisplayCount);


    const generateFakeTrades = () => {
        const count = Math.floor(Math.random() * 5) + 3; // 3 a 7 trades
        return Array.from({ length: count }, (_, i) => ({
          id: i + 1,
          symbol: ['EURUSD', 'GBPJPY', 'BTCUSD'][Math.floor(Math.random() * 3)],
          profit: parseFloat((Math.random() * 300 - 150).toFixed(2))
        }));
      };
      
      const enrichedLocations = locations.map(([lat, lng], index) => ({
        lat,
        lng,
        username: `Trader #${index + 1}`,
        pnl: parseFloat((Math.random() * 400 - 200).toFixed(2)),
        trades: generateFakeTrades()
      }));
      

    // Transforma los puntos simples [lat, lng] en objetos con datos ficticios
    // const enrichedLocations = locations.map(([lat, lng], index) => {
    //     return {
    //     lat,
    //     lng,
    //     username: `Trader #${index + 1}`,
    //     pnl: parseFloat((Math.random() * 400 - 200).toFixed(2)), // entre -200 y 200
    //     };
    // });


    const enrichedImmediateGroup = enrichedLocations.slice(0, initialDisplayCount);
    const enrichedRemainingGroup = enrichedLocations.slice(initialDisplayCount);
    
    addMarkers(enrichedImmediateGroup);
    addMarkersWithDelay(enrichedRemainingGroup);
    
  
    // Chart PnL dinámico
    let pnlHistory = [0];
    const pnlChart = new Chart(document.getElementById('pnlChart'), {
      type: 'line',
      data: {
        labels: [...Array(pnlHistory.length).keys()],
        datasets: [
          {
            data: pnlHistory,
            borderColor: 'lime',
            borderWidth: 2,
            pointRadius: 0,
            // fill: false,
            fill: true,
            backgroundColor: 'rgba(0, 255, 0, 0.1)', // suave relleno
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          x: { display: false },
          y: { display: false },
        },
        plugins: {
          legend: { display: false },
        },
      },
    });
  
    // Función para actualizar PnL en panel y gráfico
    function updatePnL(newPnL) {
        const pnlElement = document.getElementById('pnl');
        pnlElement.textContent = newPnL.toFixed(2);
      
        // Cambia el color del número
        pnlElement.style.color = newPnL >= 0 ? 'rgba(0, 255, 0, 0.7)' : 'crimson';
      
        pnlHistory.push(newPnL);
        if (pnlHistory.length > 20) pnlHistory.shift();
      
        // Cambia el color del gráfico
        const color = newPnL >= 0 ? 'rgba(0, 255, 0, 0.5)' : 'red';
        pnlChart.data.datasets[0].borderColor = color;
      
        pnlChart.data.labels = [...Array(pnlHistory.length).keys()];
        pnlChart.data.datasets[0].data = pnlHistory;
        pnlChart.update();
      }
      
      

    let currentPnL = 0;

    setInterval(() => {
    // Simula fluctuación tipo equity curve
    const noise = (Math.random() - 0.5) * 40; // suaviza la variación
    currentPnL += noise;

    // Límite realista para no salirse del rango
    if (currentPnL > 300) currentPnL = 300;
    if (currentPnL < -300) currentPnL = -300;

    
    updatePnL(currentPnL);
    }, 3000);

  });
  