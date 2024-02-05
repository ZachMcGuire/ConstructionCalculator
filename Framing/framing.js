const displayWallLength = document.querySelector('.displayWallLength');

const submitBtn = document.querySelectorAll('.submitBtn');

const boardTotals = document.querySelector('.boardTotals');

const priceTotals = document.querySelector('.priceTotals');

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


function getNumber (selector) {
    const element = document.querySelector(selector);
    return parseFloat(element.value) || 0;
};

function wallLengthFeet() {
    const wallLengthFeet = getNumber('.feetInput');
    
    return wallLengthFeet;
};

function wallLengthInches() {
    
    const wallLengthInches = getNumber('.inchesInput');
    return wallLengthInches;
};

function updateDisplay () {
    submitBtn.forEach(submit => {
        submit.addEventListener('click', function () {
            const feet = wallLengthFeet();
            const inches = wallLengthInches();
            displayWallLength.textContent = feet + " Feet" + " " + inches + " Inches";
        })
    })
};

function calculateStuds () {
    submitBtn.forEach(submit => {
        submit.addEventListener('click', function () {
            const feet = wallLengthFeet();
            const inches = wallLengthInches();
            const inchesTotal = ((wallLengthFeet() * 12) + wallLengthInches());
            const feetWhole = Math.ceil(inchesTotal / 12);
            const studNumber = (((feetWhole * 12) / 16) + 1) + ((feetWhole / 8) * 3);
            const withWaste = studNumber * 1.10
            const studTotal = Math.ceil(withWaste)
            boardTotals.textContent = studTotal;
            
            return studTotal;
        })
    })
};

function totalStuds () {
    const feet = wallLengthFeet();
    const inches = wallLengthInches();
    const inchesTotal = ((wallLengthFeet() * 12) + wallLengthInches());
    const feetWhole = Math.ceil(inchesTotal / 12);
    const studNumber = (((feetWhole * 12) / 16) + 1) + ((feetWhole / 8) * 3);
    const withWaste = studNumber * 1.10
    const studTotal = Math.ceil(withWaste)
    boardTotals.textContent = studTotal;
    return studTotal;
};

function getBoardPrice () {
    const boardCost = getNumber('.priceInput');
    return boardCost;
}


function calculateCost () {
    submitBtn.forEach(submit => {
        submit.addEventListener('click', function () {
            const cost = getBoardPrice();
            const studTotals = totalStuds();

            const totalCost = studTotals * cost;

            priceTotals.textContent = formatter.format(totalCost);

            
            
        })
    })
}


updateDisplay();
calculateStuds();
calculateCost();