class Player{
    constructor(){

        this.index= null;
        this.name= null;
    }

    getPlayerCount(){
        //connecting to the database node- playerCount
        var playerCountRef= database.ref('playerCount');

        //reading the value of the playerCount, we can also use a function as below if it is only being used once
        //inside an event. data.val is used to get the value of the database
        playerCountRef.on("value",function(data){
          playerCount= data.val();
        });
    }

    updatePlayerCount(count){
        //updating the value in the database node- playerCount, '/' is used to access the root, this is usually used
        //in updating the values of the database
        database.ref('/').update({
          playerCount: count
        });
    }

    updateName(){
        //getting the player nodesusing string concatenation
        var playerIndex= "player"+playerCount;

        //setting the names of the players
        database.ref(playerIndex).set({
            name: this.name
        });
    }
}