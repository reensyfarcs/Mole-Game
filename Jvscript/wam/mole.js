
window.onload = function (){
    setGame();
}

    function setGame(){

        for (let x = 0; x < 9; x++){

            let tile = document.createElement("div");
            tile.id = x.toString();
            document.getElementById("bd").appendChild(tile);
        }
    }