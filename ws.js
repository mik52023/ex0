var eventsConfig= require('./config').events;
var Emitter=require('events');
module.exports = class PrizeManager extends Emitter{

  constructor(name,sport){
    super();
    this.name=name;
    this.sport=sport;
    this.prizes=0;
    this.logs="";
    }

   increasePrizes(){
    this.prizes++;
    this.emit(eventsConfig.Inc,this.name,this.sport,this.prizes);
   } 

    decreasePrizes(){
  if(0<this.prizes){ this.prizes--;
                     this.emit(eventsConfig.Dec,this.name,this.sport,this.prizes);
                   }
   } 
  getNumPrizes(){
    return this.prizes;
  } 
  getName(){
    return this.prizes; 
}
addlogs(msg){
    this.logs+=msg;
}
getlogs(){
    return this.logs;
}
};
