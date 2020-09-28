//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock
var upArrow,downArrow
var fedTime,lastFed
var foodObj


function preload()
{

  //load images here
  dog1 = loadImage("Dog.png");
  dog2 = loadImage("happydog.png");

}


function setup() {
	createCanvas(500, 500);
  database=firebase.database();

  //foodObj = new Food(200,200,20,20);

  feed=createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood=createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
  

  foodstock=database.ref('Food')
  foodstock.on("value", readStock)
  dog = createSprite(200,200,40,40);
  dog.addImage("Dog",dog1)
  dog.addImage("happydog",dog2)
  dog.scale= 0.3;
}


function draw() {  
background(46, 139, 87);



fedTime=database.ref('FeedTime')
fedTime.on("value",function(data){
    lastFed=data.val();
})

  drawSprites();
  textSize(25);
  fill("black");
  stroke("black");
  //add styles here
text("Press up arrow to feed the dog", 150,20)

foodObj.display();

display()//{
  var x=80,y=100
  ImageBitmapRenderingContext(CENTER)
  Image(this.image,720,220,70,70)

  if(this.foodStock!=0){
for(var i=0;i<this.foodStock;i++)
if(i%10==0){
x=80;
y=y+50
}
image(this.image,x,y,50,50)
x=x+50;
  }
//}
}

function feedDog(){
  dog.addImage("happyDog");

foodObf.updatefoodStock(foodObj.getFoodStock()-1)
database.ref('/').update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour()
})
}

function addDoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}




