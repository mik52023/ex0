var eventsConfig= require('./config').events;
var Emitter=require('events');
var PrizeManager=require('./ws.js');
var http = require('http');
var athlete= new PrizeManager('yael arad','judo');

athlete.on(eventsConfig.Inc,function(name,sport,prizes){
console.log(name+', your prizes in '+sport+' was increased to '+prizes+' ,');
athlete.addlogs(name+', your prizes in '+sport+' was increased to '+prizes+' ,');
});

athlete.on(eventsConfig.Dec,function(name,sport,prizes){
console.log(name+', your prizes in '+sport+' was decreased to '+prizes+' ,');
athlete.addlogs(name+', your prizes in '+sport+' was decreased to '+prizes+' ,');
});


athlete.increasePrizes();
athlete.increasePrizes();
athlete.increasePrizes();
athlete.decreasePrizes();
http.createServer(function (req,res) {
res.setHeader('content-type','text/html');
res.writeHeader(200);
res.write(JSON.stringify(athlete.getlogs()));
res.end();
}).listen(8080);
console.log('listening on port 8080');


