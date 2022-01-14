const MULTIPLICADOR = 5;
let itera = "";
let fs = require('fs') ;

for(let ifor=1;ifor<11;ifor++){
    itera+= `${MULTIPLICADOR} x ${ifor} = ${MULTIPLICADOR*ifor}\n`;
}
fs.writeFile(`tabla-${MULTIPLICADOR}.txt`,itera,function(err){
    if(err) throw err;
    console.log("Grabado!");
})


