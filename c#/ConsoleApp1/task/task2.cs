/*//1.

int Factorial() {
    int one = 1;
    Console.WriteLine("Ədəd daxil edin:");
    int num = int.Parse(Console.ReadLine());
    for(int i = 1; i <= num; i++) {
        one *= i;
    }

    return one;
}

// Console.WriteLine("Cavab: " + Factorial());

//2.
void Calc() {
    Console.WriteLine("1-ci ədədi daxil edin:");
    double n1 = double.Parse(Console.ReadLine());
    Console.WriteLine("Əməl daxil edin (+, -, *, /):");
    char s = char.Parse(Console.ReadLine());
    Console.WriteLine("2-ci ədədi daxil edin:");
    double n2 = double.Parse(Console.ReadLine());

    if(s == '+') {
        Console.WriteLine("Nəticə: " + (n1 + n2));
    } else if(s == '-') {
        Console.WriteLine("Nəticə: " + (n1 - n2));
    } else if(s == '*') {
        Console.WriteLine("Nəticə: " + n1 * n2);
    } else if(s == '/') {
        if(n2 == 0) {
            Console.WriteLine("0-a bölmə yoxdur.");
        } else {
            Console.WriteLine("Nəticə: " + n1 / n2);
        }
    } else {
        Console.WriteLine("Yanlış simvol daxil edildi.");
    }

    switch(s) {
        case '+':
            Console.WriteLine("Nəticə: " + (n1 + n2));
            break;
        case '-':
            Console.WriteLine("Nəticə: " + (n1 - n2));
            break;
        case '*':
            Console.WriteLine("Nəticə: " + n1 * n2);
            break;
        case '/':
            if(n2 == 0) {
                Console.WriteLine("0-a bölmə yoxdur.");
            } else {
                Console.WriteLine("Nəticə: " + n1 / n2);
            }

            break;
        default:
            Console.WriteLine("Yanlış simvol daxil edildi.");
            break;
    }
}

// Calc();

//3.
string Degree() {
    Console.WriteLine("Ədəd daxil edin:");
    double num = double.Parse(Console.ReadLine());
    Console.WriteLine("°C/°F:");
    char s = char.Parse(Console.ReadLine());
    string result = "";
    if(s == 'C') {
        num = num * 9 / 5 + 32;
        result = num.ToString() + "°F";
    } else if(s == 'F') {
        num = (num - 32) * 5 / 9;
        result = num.ToString() + "°C";
    }

    return result;
}

// Console.WriteLine(Degree());

//4.
void Polindrom() {
    Console.WriteLine("Söz və ya ədəd daxil edin:");
    string str = Console.ReadLine();
    //Uzunluğunu tapırıq.
    int len = str.Length;
    //Ortadan sağ və solda neçə simvol olduğunu tapırıq.
    int orta = len / 2;
    for(int i = 0; i < orta; i++) {
        if(str[i] != str[len - 1 - i]) {
            //Sonuncu və ilk simvolların bərabərliyini yoxlayırıq.
            Console.WriteLine("Polindrom deyil.");
        } else {
            Console.WriteLine("Polindromdur.");
        }
    }
}

// Polindrom();

//5.
void PerfectNumber(int a) {
    int sum = 0;
    for(int i = 1; i <= a / 2; i++) {
        if(a % i == 0) {
            sum += i;
        }
    }

    if(sum == a) {
        Console.WriteLine("Perfect");
    } else {
        Console.WriteLine("Not Perfect");
    }
}

// PerfectNumber(20);

//6.
void Sade() {
    Console.WriteLine("Ədəd daxil edin:");
    int num = int.Parse(Console.ReadLine());
    int bolen = 0;
    for(int i = 1; i <= num; i++) {
        if(num % i == 0) {
            bolen++;
        }
    }

    if(bolen == 2) {
        Console.WriteLine("Sadə ədəddir.");
    } else {
        Console.WriteLine("Mürəkkəb ədəddir.");
    }
}

// Sade();

//7.
void triangles() {
    Console.WriteLine("Ədəd daxil edin:");
    int num = int.Parse(Console.ReadLine());
    for(int i = 1; i <= num; i++) {
        for(int j = 0; j < i; j++) {
            Console.Write("*");
        }

        Console.WriteLine();
    }
}

// triangles();

//8.
void NumOps() {
    Console.WriteLine("Ədəd daxil edin:");
    int a = int.Parse(Console.ReadLine());
    int single;
    int sum = 0;
    while(a > 0) {
        single = a % 10;
        sum += single;
        Console.WriteLine(single);
        a /= 10;
    }

    Console.WriteLine(sum);
}

// NumOps();

//9.
void Fibonacci() {
    Console.WriteLine("Ədəd daxil edin:");
    int num = int.Parse(Console.ReadLine());
    int a = 0, b = 1, c;
    Console.Write(a + " " + b + " ");
    for(int i = 2; i < num; i++) {
        c = a + b;
        a = b;
        b = c;
        Console.Write(c + " ");
    }
}

// Fibonacci();*/