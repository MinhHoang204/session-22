let a = prompt ("Nhập số thứ nhất");
let b = prompt ("Nhập số thứ hai");

if (a % b == 0){
    console.log("a chia hết cho b");
} else if (a % b !== 0){
    console.log("a không chia hết cho b");
} else if (b % a == 0){
    console.log("b chia hết cho a");
} else {
    console.log("b không chia hết cho a");
}