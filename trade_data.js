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
        var isPositive = Math.random() < 0.85; // 85% chance to be positive
        var pnlChange = getRandomValue(100, 500); // Change PnL by 100 to 500 units

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
    setInterval(updateDisplay, 10000); // Update every minute
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    updateTradingInfo();
});
