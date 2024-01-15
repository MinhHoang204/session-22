Console.Write("Nhập vào tháng: ");
let month = Convert.ToInt32(Console.ReadLine());
Console.Write("Nhập vào năm: ");
let year = Convert.ToInt32(Console.ReadLine());
let daysInMonth = DateTime.DaysInMonth(year, month);
if (daysInMonth > 0)
{
Console.WriteLine("Tháng {0} năm {1} có {2} ngày.", month, year, daysInMonth);
}
else
{
Console.WriteLine("Giá trị nhập vào không hợp lệ.");
}