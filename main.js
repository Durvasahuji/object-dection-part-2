img = "";

function preload(){
    img = loadImage('bed_room.jpg');
    img = loadImage('tv.jpg');
    img = loadImage('lm.jpg');
    img = loadImage('bottle.jpg');
    img = loadImage('fruit.jpg');
}
}
  }

  function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    
  }

  function draw()
   {
 
    fill(255, 0, 0);
    text("BED") 40 , 36;
    noFill();
    stroke(255, 0, 0);
    rect(160, 55 , 240, 255);

    fill(255, 0, 0);
    text("Fruit") 40 , 36;
    noFill();
    stroke(255, 0, 0);
    rect(160, 55 , 240, 255);

    fill(255, 0, 0);
    text("WETER BOTTEL") 40 , 36;
    noFill();
    stroke(255, 0, 0);
    rect(160, 55 , 240, 255);

    fill(255, 0, 0);
    text("Desk") 40 , 36;
    noFill();
    stroke(255, 0, 0);
    rect(160, 55 , 240, 255);

    fill(255, 0, 0);
    text("TV") 40 , 36;
    noFill();
    stroke(255, 0, 0);
    rect(160, 55 , 240, 255);
  }

  