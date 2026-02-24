let sum=0;

for(let i=1; i<=100;i++){
    sum+=i;
}

console.log(sum);

function zbroji(broj){
    if(broj===1){
        return 1;
    }
    return broj + zbroji(broj-1);
}

console.log(zbroji(100));

