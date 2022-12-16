
function palindrome(StringTOAvaliate){
    let Spllited = StringTOAvaliate.split('');
    var reverse = [];

    for(var i =0; i< StringTOAvaliate.length; i++ ){
        reverse.unshift(StringTOAvaliate[i]);
    }

    if( reverse.join('') == StringTOAvaliate){
        console.log('it is a palindrom');
    } else{
        console.log('it is not a palindrom');
    }

}
var nome = 'mom';
palindrome(nome);