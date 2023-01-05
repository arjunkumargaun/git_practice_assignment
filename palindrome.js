let str="oyo";
let reverse_string="";
for(let i=0; i<=str.length; i++){
    reverse_string+=str[i];
}
if(str===reverse_string){
    console.log("Yes");
}else{
    console.log("No");
}