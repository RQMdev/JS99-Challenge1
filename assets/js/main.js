var button = document.getElementById('button');
var display = document.getElementById('display');
var multiply = document.getElementById('multiply');
var autoclicker = document.getElementById('autoclicker');
var bonus = document.getElementById('bonus');
var autoclickerBought = false;
var score = 0;
var multiplier = 1;
var bonusMultiplier = 1;
var clock = 30;


button.onclick = function(){
  score = score + 1*multiplier*bonusMultiplier;
  display.innerHTML = "<span>"+score+"</span>";
  button.innerHTML = "<span>Click To Add "+ (multiplier*bonusMultiplier) +"</span>";
}

multiply.onclick = function(){
  if ( score >= 50*multiplier ){
    score -= 50*multiplier;
    multiplier++;
    display.innerHTML = "<span>"+score+"</span>";
    multiply.innerHTML = "<span>COST : "+(50*multiplier)+"<br>Multiply By "+ (multiplier + 1) +"</span>";
    button.innerHTML = "<span>Click To Add "+ (multiplier*bonusMultiplier) +"</span>";
  }
}

autoclicker.onclick = function(){
  if ( score >= 500 && autoclickerBought == false ){
    score -= 500;
    setInterval(function(){
      score = score + 1*multiplier*bonusMultiplier;
      display.innerHTML = "<span>"+ score +"</span>";
    }, 1000);
  }
}

bonus.onclick = function(){
  if ( score >= 5000 && bonusMultiplier == 1 ){
    score -= 5000;
    bonusMultiplier = 2;
    clock = 30;
    bonus.innerHTML = "<span>"+ clock +"</span>";


    var timer = setInterval(function(){
      clock--;
      bonus.innerHTML = "<span>"+ clock +"</span>";
    }, 1000);


    setTimeout(function(){
      clearInterval(timer);
      bonusMultiplier = 1;
      bonus.innerHTML = "<span>COST : 5000<br>200% Bonus For 30 Seconds !</span>"
    }, 30000);

  }
}
