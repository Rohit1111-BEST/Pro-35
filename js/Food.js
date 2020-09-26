class Food {
    costructor(){
    var foodStock
    var lastFed
    }


getFoodStack(){

}
updateFoodStack(){

}
deductStack(){

}

display(){
fill(255,255,254);
testSize(15);
if(labFed>12){
text("Last Feed : "+ lastFed%12 + "PM",350,30);
}
else if(lastFed==0){
text("Last Feed : 12 AM", 350, 30)
}
else{
    text("Last Feed : "+ lastFed +"AM", 350,30)
}
}



   /* getState(){
       var gameStateref = database.ref("gameState")
       gameStateref.on("value",function(data){
           gameState=data.val()
       })
    }
    
    update(state){
    database.ref("/").update({
        gameState:state
    })
    }
    
    start(){
        if(gameState===0){
    player=new Player()
    player.getCount()
    form=new Form()
    form.display()
    
        }
    }*/
    
    }