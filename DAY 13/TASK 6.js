function BMI(w,h){
    let a=(w/(h**2));
    if(a<18.5){
    console.log("your are under weight");
    }
    else if(a<24.8){
        console.log("your are normal weight");
    }
    else{
        console.log("your are over weight");
    }
}

BMI(65,1.63);
