
import CIRCUITS from '../api/get.circuits.json' with { type: 'json' }

document.addEventListener('DOMContentLoaded', () => {
    const ramdonButton = document.getElementById('ramdon-button')

    ramdonButton.addEventListener('click', onRamdonClickButton)
})

function onRamdonClickButton() {
    cleanContainer()
    const ramdonCupName = document.createElement('cup-card')
    const cupCardContainer = document.getElementById('cup-card-container')
    const ramdonCup = ramdonizeCircuits()
    ramdonCupName.setAttribute('cupName', ramdonCup)
    console.log(ramdonCup,'ramdonclik')  
    cupCardContainer.appendChild(ramdonCupName)
}

function ramdonizeCircuits() {
    const circuitsData = CIRCUITS[0]; // Accedemos al único objeto dentro del array

    const cups = Object.keys(circuitsData); // Obtener los nombres de las copas (Acorn Cup, Banana Cup, etc.)
    const randomCup = cups[Math.floor(Math.random() * cups.length)]; // Seleccionar una copa aleatoria

    const circuits = Object.values(circuitsData[randomCup]); // Obtener los circuitos dentro de esa copa
    const randomCircuit = circuits[Math.floor(Math.random() * circuits.length)]; // Seleccionar un circuito aleatorio

    console.log(`Copa aleatorio: (${randomCup})`);

    return randomCup
}

function cleanContainer() {
    const cupCardContainer = document.getElementById('cup-card-container')
    cupCardContainer.innerHTML = ''
}