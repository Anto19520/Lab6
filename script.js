var names = ["Cherries", "Cereal", "Milk", "Butter", "Beer" ];
var cost = [3.19,5.25,3.99,4.25,10.10];
var total =0;

for(var i=0; i<cost.length; i++){
console.log(names[i] + " " +cost [i]);
}


for(var i=0; i<cost.length; i++){
total +=cost[i];
}
console.log("Total $" + total);
