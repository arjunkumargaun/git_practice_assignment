let str="oyo";
let reverse_string="";
for(let i=str.length-1; i>=0; i--){
    reverse_string+=str[i];
}
if(str===reverse_string){
    console.log("Yes");
}else{
    console.log("No");
}