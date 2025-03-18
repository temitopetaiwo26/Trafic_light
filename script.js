let lights = document.querySelectorAll('.light');
let index = 0;

function changeLight() {
    lights.forEach(light => light.classList.remove('active')); 
    lights[index].classList.add('active'); 
    index = (index + 1) % 3; 
}

setInterval(changeLight, 2000); 

