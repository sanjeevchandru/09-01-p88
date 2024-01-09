document.write("52.to convert letters of a given string alphabetically."+"<br>");
function test52(str){
    str=str.split("").sort().join("");
    return str;
}
document.write("The string :sanjeev , Ans :"+test52("sanjeev")+"<br><br>");