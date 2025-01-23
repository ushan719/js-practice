function main(){

  let confirm = document.getElementById("mainResult").innerHTML;
  if(confirm == "You lost !"){
    alert("Game over Please restart the game!");
  }
  else{
  let x ;
  do{
    x = Math.floor(Math.random()*100/7.6);

  }while(x== 0)

    let currentTT = parseInt(document.getElementById("result").innerHTML);
    let Total = currentTT + x;
    document.getElementById("result").innerHTML = Total; 

    if(Total < 21 ){
      document.getElementById("mainResult").innerHTML = "Generate anther card ? ";
      
    }else if (Total == 21){
      document.getElementById("mainResult").innerHTML = "You've won ! ";
      alert("congratulation !");
      document.getElementById("btn-res").style.display = 'block';
      
    }else if(Total > 21)
      {
        document.getElementById("mainResult").innerHTML = "You lost !";
        document.getElementById("btn-res").style.display = 'block';

    }


      var img = document.createElement("img");
      img.src="images/"+ x + ".png" ;
      img.height=300;
      document.body.appendChild(img);

    }
  }

  function restart(){
    location.reload(); 
  }