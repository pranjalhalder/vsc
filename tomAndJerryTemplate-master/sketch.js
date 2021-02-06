var cat1,cat2,cat3,cat4


function preload() {
cat1Image=loadImage("images/cat1.png")
    
}

function setup(){
    createCanvas(100,100);
   
    cat1=createSprites(20,20,10,10) 
    cat1.addImge(cat1Image)
    

}

function draw() {

    background("green");
   

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
