Console.Write("Nhập vào một số có 4 chữ số: ");
let number = Convert.ToInt32(Console.ReadLine());
let thousands = number / 1000;
let hundreds = (number % 1000) / 100;
let tens = (number % 100) / 10;
let units = number % 10;
Console.WriteLine("Hàng nghìn: {0}", thousands);
Console.WriteLine("Hàng trăm: {0}", hundreds);
Console.WriteLine("Hàng chục: {0}", tens);
Console.WriteLine("Đơn vị: {0}", units);

