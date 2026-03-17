const lights = document.querySelectorAll('.light');

function trafficLightSequence() {
    lights[0].className = 'light red';
    lights[1].className = 'light yellow';
    lights[2].className = 'light green';

    lights[0].className = 'light red active';

    setTimeout(() => {
        lights[0].className = 'light red';
        lights[1].className = 'light yellow active';

        setTimeout(() => {
            lights[1].className = 'light yellow';
            lights[2].className = 'light green active';
            
            setTimeout(() => {
                trafficLightSequence();
            }, 3000); 
        }, 2000); 
    }, 4000); 
}

trafficLightSequence();