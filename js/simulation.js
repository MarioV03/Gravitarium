
function createPlanetPanel(masterPanel, index)
{
    let planetPanel = document.createElement("div");
    planetPanel.setAttribute("class", "planet_panel");
    masterPanel.appendChild(planetPanel);

    let heading = document.createElement("h1");
    heading.innerHTML = "Planet " + index + " ";
    planetPanel.appendChild(heading);

    let colorInput = document.createElement("input");
    colorInput.setAttribute("type", "color");
    colorInput.setAttribute("value", "#ffff00");
    heading.appendChild(colorInput);

    let p_mass = document.createElement("p");
    p_mass.setAttribute("style", "width: 90%;");
    p_mass.innerHTML = "Mass ";
    planetPanel.appendChild(p_mass);
    let massInput = document.createElement("input");
    massInput.setAttribute("type", "number");
    massInput.setAttribute("step", "100");
    massInput.value = 30000;
    p_mass.appendChild(massInput);

    let xInput = createInputField("x ", planetPanel);
    let dxInput = createInputField("dx ", planetPanel);
    let yInput = createInputField("y ", planetPanel);
    let dyInput = createInputField("dy ", planetPanel);

    let planetInput =
    {
        color: colorInput,
        mass: massInput,
        x: xInput,
        y: yInput,
        dx: dxInput,
        dy: dyInput
    }

    return planetInput;

}

function load(file) {
    let config = JSON.parse(file);
}

function createInputField(name, planetPanel)
{
    let p = document.createElement("p");
    p.innerHTML = name;
    planetPanel.appendChild(p);
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("step", "10");
    p.appendChild(input);

    return input;
}