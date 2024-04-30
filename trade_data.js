document.getElementById('tradingInfo').addEventListener('click', function() {
    document.getElementById('adminPanel').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('adminPanel').style.display = 'none';
});

var currentOpenTrades = 500; // Initial value for Open Trades
var currentPnL = 2500; // Initial estimated PnL based on initial trades


function checkPassword() {
    var password = document.getElementById('adminPassword').value;
    if (password === 'correctPassword' || password === 'dan123') {  // Now also checks for 'dan123'
        document.getElementById('adminControls').style.display = 'block';
        document.getElementById('adminOpenTrades').value = currentOpenTrades;
        document.getElementById('adminPnL').value = currentPnL;
    } else {
        alert('Password incorrect!');
    }
}



function updateDisplay() {
    // Create an instance of Intl.NumberFormat for thousand separators
    var formatter = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,  // Ensuring we have two decimal places
    });

    // Set the values to the HTML elements
    document.getElementById('openTrades').innerText = currentOpenTrades;
    document.getElementById('pnl').innerText = formatter.format(currentPnL);
}


function updateAdminValues() {
    currentOpenTrades = parseInt(document.getElementById('adminOpenTrades').value, 10);
    currentPnL = parseFloat(document.getElementById('adminPnL').value);
    updateDisplay(); // Immediately reflect changes
}

function updateTradingInfo() {
    // Variables to hold the current state
    var currentOpenTrades = 500; // Initial value for Open Trades
    var currentPnL = 2500; // Initial estimated PnL based on initial trades

    // Function to generate random values within a range
    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Create an instance of Intl.NumberFormat for thousand separators
    var formatter = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,  // Ensuring we have two decimal places
    });

    // Function to update trading info display
    function updateDisplay() {
        // Decide if Open Trades increase or decrease
        var tradeIncrease = Math.random() < 0.7; // 70% chance to increase
        var tradeChange = getRandomValue(10, 50); // Change by 10 to 50 trades
        if (tradeIncrease) {
            currentOpenTrades += tradeChange;
        } else {
            currentOpenTrades = Math.max(500, currentOpenTrades - tradeChange); // Prevent going below 500
        }

        // Decide if PnL is positive or negative this update
        var isPositive = Math.random() < 0.69; // 85% chance to be positive
        var pnlChange = getRandomValue(3000, 7000); // Change PnL by 100 to 500 units

        if (isPositive) {
            currentPnL += pnlChange;
        } else {
            currentPnL -= pnlChange; // Apply negative change conservatively
            currentPnL = Math.max(0, currentPnL); // Prevent negative PnL
        }

        // Set the values to the HTML elements
        document.getElementById('openTrades').innerText = currentOpenTrades;
        document.getElementById('pnl').innerText = '+'+formatter.format(currentPnL); // Format PnL to include thousand separators
    }

    // Set initial values at load and then update regularly
    updateDisplay();
    setInterval(updateDisplay, 6000);
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    updateTradingInfo();
});
