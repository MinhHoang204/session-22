Console.Write("Nhập số thứ nhất: ");
            let num1 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Nhập số thứ hai: ");
            let num2 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Nhập phép tính (+, -, *, /): ");
            let op = Convert.ToChar(Console.ReadLine());
            let result = 0;
            let valid = true;
            switch (op)
            {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 == 0)
                    {
                        Console.WriteLine("Không thể chia cho 0.");
                        valid = false;
                    }
                    else
                    {
                        result = num1 / num2;
                    }
                    break;
                default:
                    Console.WriteLine("Phép tính không hợp lệ.");
                    valid = false;
                    break;
            }
            if (valid)
            {
                Console.WriteLine("Kết quả: {0}", result);
            }
            else
            {
                Console.WriteLine("Kết quả không hợp lệ.");
            }    