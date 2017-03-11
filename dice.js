//Dice Object
//Receives how many sides the dice should have and what difficulty it should be
//Difficuly weighting is hardcoded but sides generated are random
//Generates sides for the dice as text and stores them to an array
//Can be rolled - randomly return an entry from the array
//Has an "up side" of the dice given a roll


function Dice(sideNum, diff)
{
    this.sideNum = sideNum; //Dice with defined sides, 6, 12, etc
    this.diff = diff;       //Difficulty for the dice, R,Y,G
    this.sides = [];        //Array for storing what each side of the dice is
    this.sideDebug = [];    //I forget what this is for so I should remove it
    this.currentRoll = this.sides[0];       //side of dice that is "face up"

    var brainWeight;        //Weighting the random creation of brain side of dice
    var runAwayWeight;      //Weighting the rand creation of runAways dice side

    //Storing the %chance dice sides are created based on req difficulty
    if(this.diff == 0)
    {
      brainWeight = 6;      //60% of the time it's a brain
      runAwayWeight = 10;   //30% it's runaway
      console.log('easy');  //DEBUG show me you made them easy
    }
    if(this.diff == 1)
    {
      brainWeight = 5;      //50% Brain
      runAwayWeight = 8;    // (8-5)/10 % change run away
      console.log('medium');// DEBUG Code
    }
    if(this.diff == 2)
    {
      brainWeight = 3;
      runAwayWeight = 6;
      console.log('hard'); //DEBUG CODE
    }

    this.generateSides = function()
    {
      //set the sides of the dice to one of 3 types based on difficult/sideNums
      for( var i = 1; i <= this.sideNum; i++)
      {
        //0-10 because we are setting the side based on weighting of dice diff
        //0-6 should generate an brains on easy dice whereas 0-3 for hard dice
        var sideRandomizer = round(random(0,10));
        var sideType = 'null';

        //Logic to consider weighting of sidecreation based on dice diff
        //Then push the side type to the sides array
        if(sideRandomizer <= brainWeight)
          {
            sideType = 'Brain';
          }
        else if(sideRandomizer > brainWeight && sideRandomizer <= runAwayWeight)
          {
            sideType = 'Run-Away';
          }
        else
          {
            sideType = 'Shotgun';
          }

        //push the side in the array representing the dice
        this.sides.push(sideType);
        this.sideDebug.push(sideRandomizer); //DEBUG Code

      }

      this.roll = function()
      {
        this.currentRoll = this.sides[round(random(0,this.sideNum - 1))];
        //Do we need to return the currentRoll? It's just a property of the obj we can access?
        //dice1.currentRoll = 'brains or something'
      }


    }


}
