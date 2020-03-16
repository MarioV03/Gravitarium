let scale = 1;
let rate = 10;

let numOfPlanets = document.getElementById("num");
let rateInput = document.getElementById("rate");
rateInput.value = rate;
let scaleInput = document.getElementById("scale");
scaleInput.value = scale;
let run_button = document.getElementById("run_button");
let stop_button = document.getElementById("stop_button");
let load_button = document.getElementById("load_button");
let save_button = document.getElementById("save_button");
let panel = document.getElementById("panel");

let planets = [
    planet.init(30000, "green",   1500, 1700, 10, 0, 0, 0),
    planet.init(40000, "yellow", 1501, 2200, 0, 0, 0, 0),
    planet.init(30000, "red",     1500, 2700, -10, 0, 0, 0)
];
planetPanels = [];

rateInput.oninput = function() {
    rate = rateInput.value;
    setInterval(update, rate);
}

scaleInput.oninput = function() {
    scale = rateInput.value;
}


numOfPlanets.oninput = function()
{
    if(numOfPlanets.value == 0) return;
    if (numOfPlanets.value > 3 || numOfPlanets.value < 1)
    {
        alert("Invalid number of planets, please choose within a range of [1-3]");
        return;
    }
    for (let index = 0; index < numOfPlanets.value; index++) {
        planetPanels[index] = createPlanetPanel(panel, index + 1);
    }
    planetsFromPanel();
    
    numOfPlanets.disabled = true;
}

run_button.onclick = function() {planetsFromPanel(); setInterval(update, rate);}

function planetsFromPanel () 
{
    for (let index = 0; index < numOfPlanets.value; index++) {
        planets[index] = planet.initFromPanel(planetPanels[index])
    }
}


//Setting up planets

    
//main loop timer


//main loop
function update()
{
    applyForces(planets);
    movePlanets(planets);
    drawPlanets(planets, scale);
    drawAcceleration(planets, scale);
}
