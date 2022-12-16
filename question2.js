
function organizeArray(array){

let OrganizedArray = array.sort((numero1, numero2) => numero2 - numero1);
    for( var i = 0; i<OrganizedArray.length;i++){
        console.log(OrganizedArray[i]);
    }
}


var arrayTest = [2,3,7,4,8];
organizeArray(arrayTest);