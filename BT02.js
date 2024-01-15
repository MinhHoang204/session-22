let a = prompt("Nhập cạnh thứ nhất");
let b = prompt("Nhập cạnh thứ hai");
let c = prompt("Nhập cạnh thứ ba");

if (a, b, c > 0){
    if (a+b > c && b+c > a && c+a >b) {
        console.log("Độ dài nhập vào hợp lệ");
    } else {
        console.log("Độ dài nhập vào không hợp lệ");
    }
}