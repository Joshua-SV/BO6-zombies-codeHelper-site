

// JavaScript to dynamically create circle elements
const container = document.querySelector('.container');
const numberOfCircles = 100; // Adjust based on how many animations you need

for (let i = 0; i < numberOfCircles; i++) {
  const circleContainer = document.createElement('div');
  circleContainer.classList.add('circle-container');

  const circle = document.createElement('div');
  circle.classList.add('circle');

  circleContainer.appendChild(circle);
  container.appendChild(circleContainer);
}

// equation calculations
let x = NaN;
let y = NaN;
let z = NaN;

function firstCode(numX) {
    const code1 = (2 * numX) + 11;

    document.querySelector(".equation-one").innerHTML = `2X + 11 = <b>${code1}</b>`;
    document.querySelector("#first").innerHTML = `<b>${code1}</b>`;    
}

function secondCode(numY, numZ) {
    const code2 = ((2 * numZ) + numY) - 5;

    document.querySelector(".equation-two").innerHTML = `(2Z + Y) - 5 = <b>${code2}</b>`;
    document.querySelector("#second").innerHTML = `<b>${code2}</b>`; 
}

function thirdCode(numX, numY, numZ) {
    const code3 = Math.abs((numY + numZ) - numX);

    document.querySelector(".equation-three").innerHTML = `|(Y + Z) - X| = <b>${code3}</b>`;
    document.querySelector("#third").innerHTML = `<b>${code3}</b>`; 
}

function lightSelected(type, name) {
    const images = document.querySelectorAll(`.${type}-values img`);
    
    images.forEach((image) => {
        if (image.name === name){
            image.classList.remove('not-active');
        }
        else {
            image.classList.add('not-active');
        }
    });
}

const xkey = document.querySelectorAll(".x-values img");
xkey.forEach((key) => {
    key.addEventListener('click', (e) => {
        console.log(e.target.name);
        x = parseInt(key.getAttribute('data-value'), 10); // Converts to an integer
        
        firstCode(x);// display first code
        if (!Number.isNaN(x) && !Number.isNaN(y) && !Number.isNaN(z))// check for third code
        {
            thirdCode(x, y, z);//display third code
        }
        lightSelected('x',e.target.name);
    });
});

const ykey = document.querySelectorAll(".y-values img");
ykey.forEach((key) => {
    key.addEventListener('click', (e) => {
        console.log(e.target.name);
        y = parseInt(key.getAttribute('data-value'), 10); // Converts to an integer
        
        if (!Number.isNaN(y) && !Number.isNaN(z)) 
        {
            secondCode(y, z);// display second code
        }
        if (!Number.isNaN(x) && !Number.isNaN(y) && !Number.isNaN(z))// check for third code
        {
            thirdCode(x, y, z);//display third code
        }
        lightSelected('y',e.target.name);
    });
});

const zkey = document.querySelectorAll(".z-values img");
zkey.forEach((key) => {
    key.addEventListener('click', (e) => {
        console.log(e.target.name);
        z = parseInt(key.getAttribute('data-value'), 10); // Converts to an integer
        
        if (!Number.isNaN(y) && !Number.isNaN(z)) 
        {
            secondCode(y, z);// display second code
        }
        if (!Number.isNaN(x) && !Number.isNaN(y) && !Number.isNaN(z))// check for third code
        {
            thirdCode(x, y, z);//display third code
        }
        lightSelected('z',e.target.name);
    });
});



