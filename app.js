// Declare a variable
for(let i=1; i <=10;i=i+2) {
     console.log(i);
    if( i >= 9){
        for(let j=2; j <=10;j=j+2){
            console.log(j);
        }
    }
}

//Piramide
s = ""
// for (i = 1; i<= 5; i++)
//    {
//      S = S + "*"
//    }
//    console.log(S)
for(let i=0;i<=7;i++){

    for(let j=0;j<i;j++){
        s+="#";
    }
  
    console.log(s);
    s = "";
}