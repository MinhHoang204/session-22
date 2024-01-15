// Truthy và Falsy trong JavaScript là cách mà JavaScript ép giá trị bất kỳ thành một giá trị Boolean trong một ngữ cảnh yêu cầu giá trị Boolean. Khi JavaScript ép giá trị về kiểu Boolean, hoặc trong một ngữ cảnh Boolean, nó sẽ cho ra giá trị true hoặc false. Các giá trị được xem là Truthy là chuỗi khác rỗng, số khác 0 và tất cả các object. Các giá trị được xem là Falsy là undefined, null, false, 0, -0, 0n, NaN, ''.
// Dưới đây là một chương trình kiểm tra số chính phương trong JavaScript sử dụng khái niệm Truthy và Falsy:
console.log("Nhập vào một số: ");
let number = parseInt(prompt());
let squareRoot = Math.sqrt(number);
if (squareRoot == parseInt(squareRoot)) {
    console.log(number + " là số chính phương.");
} else {
    console.log(number + " không phải là số chính phương.");
}