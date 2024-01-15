let number = prompt("Nhập 1 số bất kì");
let number = convert.ToInt32(Console.ReadLine());
let squareRoot = Math.Sqrt(number);

if (squareRoot == (int)squareRoot){
    Console.WriteLine("{0} là số chính phương.", number);
} else {
    Console.WriteLine("{0} không phải là số chính phương.", number);
}
