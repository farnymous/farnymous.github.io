const lampu = document.getElementById('img-lamp')
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
const greenButton = document.getElementById('greenButton');
const offButton = document.getElementById('offButton');

redButton.addEventListener('click',() => {
    lampu.src = '../ASSETS/red.png'
});

blueButton.addEventListener('click',() => {
    lampu.src = '../ASSETS/blue.png'
});

greenButton.addEventListener('click',() => {
    lampu.src = '../ASSETS/green.png'
});

offButton.addEventListener('click',() => {
    lampu.src = '../ASSETS/off.png'
})