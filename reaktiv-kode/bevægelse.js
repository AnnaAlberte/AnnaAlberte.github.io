let rystet = 0;
//let tal = Math.floor((Math.random() * 20) + 1);
let tal = 1

function setup() {
    canvas = createCanvas(300, 550,'beholder');
    textSize(24);
    // giver canvas border på 2 pixel, 
    // og sørger derefter for at kanten tælles med i width
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

    canvas.parent('#beholder');
    // gør canvas-elementet responsivt til skærmbredden
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    //bemærk at noden skal pakkes ud via .elt
    const parentDiv = select('#beholder').elt;
    const p = select('#test1').elt;
    // indsæt canvas i ny position i rækkefølgen af elementer i div'en beholder
    parentDiv.insertBefore(canvas.elt, p);
}
//test anna

function draw() {
    strokeWeight(10);
     
    if (accelerationX > 70) {
        tal = random(1, 20);   
    }
    
    text( 'hejsa' + str(tal), 50, height-100);
}


function deviceMoved(){
    //flyttet++;

}


// når rystet, skriv et tal mellem 1 til 20.