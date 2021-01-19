class Form{
    constructor(){

        this.input= createInput("Name");
        this.button= createButton("Play");
        this.greeting= createElement('h3');
    }

    display(){
        var title= createElement('h1');
        title.html("Car Racing Game");
        title.position(500,130);

        this.input.position(550,300);
        
        this.button.position(600,400);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name= this.input.value();
            playerCount+= 1;
            player.updateName();
            player.updatePlayerCount(playerCount);
            this.greeting.html("Hello " +player.name);
            this.greeting.position(550,300);
        });
    }
}