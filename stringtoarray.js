function stringToArray(string){

    let myletter = "";
    let myarr = [];
    
    for(let i = 0 ; i < string.length; i++){
    //  console.log(string[i])
     if( string[i] !== " "){
        myletter = myletter + string[i];
     }else{
        myarr.push(myletter)
        myletter = "";
     }
    } myarr.push(myletter)
       return myarr;
    }