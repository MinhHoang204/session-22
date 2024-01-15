let year = prompt("Nhập vào năm bất kì");

if (year % 4 == 0, year % 100 !== 0 && year % 400 == 0){
    console.log("Đây là năm nhuận");
} else {
    console.log("Đây không phải năm nhuận");
}