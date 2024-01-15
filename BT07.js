let a = prompt("Nhập a");
let b = prompt("Nhập b");
let c = prompt("Nhập c");

let delta = b**2 - 4*a*c;

if(delta > 0){
    let  x1=(-b + sqrt(delta))/2*a;
    let  x2=(-b - sqrt(delta))/2*a;
    console.log("PT có 2 nghiệm" + x1 + x2);
} else if(delta = 0){
    let x1 = x2 = -b/2*a;
    console.log("PT có nghiệm kép", x1 = x2);
} else {
    console.log("PT vô nghiệm");
}