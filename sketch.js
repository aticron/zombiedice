var diceCup = [];
var diceType = 6;
var diceDiff = 0;
var userDiceReq;

function setup()
{
  //createCanvas(window.innerWidth,window.innerHeight);
  //I just want to remember this is how to render a dynamic sized window
  //noCanvas(); If I plan to do this without graphics I use this
  createCanvas(300,300);
  userDiceReq = createInput("Enter # of Zombie Dice total");
  //userDiceReq.changed();
  //setupGame(userDiceReq);
  /* START HERE

  Need to get the users Inputted Dice hooked into the functions that
  setup the game and then make a button appear that triggers the game logic to start

  */
}

function draw()
{

    //setupGame(userDiceReq.value()); Doesn't work, draw endless loops the setup

}

function setupGame(diceToCreate)
{
  //Take user input for dice
  //Call Dice Generation
  //Call Cup Creation
  //Store Dice to Cup
  //Setup Score Board

    this.diceToCreate = diceToCreate;

    for (var i = 1; i <= this.diceToCreate; i++)
    {

      var diceTemp = new Dice(diceType,diceDiff);
      diceTemp.generateSides();
      diceCup.push(diceTemp);
    }
}
