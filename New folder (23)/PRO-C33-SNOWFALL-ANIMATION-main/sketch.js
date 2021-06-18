function preload(){
  this.loadImage = ("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  snow1 = new snow (400,200, 800,400);
  snow1.addImage = ("snow1.jpg")
  snowfall1 = new snowfall1(200,200,80,80)
}  
function draw() {
  background(255,255,255);  
    snow1.display();
    snowfall1.display();
  drawSprites();
}