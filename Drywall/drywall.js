const wallArea = document.querySelector(('.totalWallArea'));
const submitBtn = document.querySelector('.submitBtn')


function getNumber (selector) {
    const element = document.querySelector(selector);
    return parseFloat(element.value) || 0;
};

