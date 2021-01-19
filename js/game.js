class Game{
    constructor(){


    }

    getState(){
        var gameState= database.ref('gameState');
        gameState.on("value",function(data){
            gameState= data.val();
        });
    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }

    start(){
        if(gameState===0){
            player= new Player();
            player.getPlayerCount();

            form= new Form();
            form.display();
        }
        
    }
}