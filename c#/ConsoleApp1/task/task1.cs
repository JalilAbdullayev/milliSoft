//1.

using System;
using System.Numerics;

/*int zero = 0;
int one = 1;
for(int i = 1; i <= 10; i++) {
    zero += i;
    one *= i;
}

Console.WriteLine("1-dən 10-adək ədədlərin cəmi: " + zero);
Console.WriteLine("1-dən 10-adək ədədlərin hasili: " + one);*/

//2.
/*int zero = 0;
BigInteger bigOne = 1;
for(int i = 2; i <= 100; i++) {
    if(i % 2 == 0) {
        Console.WriteLine(i);
        zero += i;
        bigOne *= i;
    }
}

Console.WriteLine("1-dən 100-ədək cüt ədədlərin cəmi: " + zero);
Console.WriteLine("1-dən 100-ədək cüt ədədlərin hasili: " + bigOne);*/

//3.
/*int zero = 0;
int count = 0;
for(int i = 100; i <= 999; i++) {
    count++;
    zero += i;
}

Console.WriteLine(zero / count);*/

//4.
/*for(int i = 100; i <= 999; i++) {
    if(i % 7 == 0 && i % 8 == 0) {
        Console.WriteLine(i);
    }
}*/

//5.
/*int zero = 0;
for(int i = 100; i <= 999; i++) {
    if(i % 7 == 0 && i % 8 == 0)
    {
        zero += i;
    }
}

Console.WriteLine(zero);*/

//6.
/*for(int i = 100; i <= 999; i++) {
    if(i % 7 == 0 && i % 8 == 0) {
        Console.WriteLine(i);
        break;
    }
}*/

//7.
/*string sade = "";
string murekkeb = "";
for(int i = 2; i <= 100; i++) {
    byte bolen = 0;
    for(int j = 1; j <= i; j++) {
        if(i % j == 0) {
            bolen++;
        }
    }

    if(bolen == 2) {
        sade += i.ToString() + ", ";
    } else {
        murekkeb += i.ToString() + ", ";
    }
}

sade = sade.TrimEnd([',', ' ']) + '.';
murekkeb = murekkeb.TrimEnd([',', ' ']) + '.';

Console.WriteLine("Sadə: " + sade);
Console.WriteLine("Mürəkkəb: " + murekkeb);*/

//8.
/*Console.WriteLine("Ədəd daxil edin.");
double a = double.Parse(Console.ReadLine());
double b = double.Parse(Console.ReadLine());
double c = double.Parse(Console.ReadLine());

double max = a;
double min = a;
if(max < b) {
    max = b;
} else if(min > b) {
    min = b;
}

if(max < c) {
    max = c;
} else if(min > c) {
    min = c;
}

Console.WriteLine(min + " kiçikdir.");
Console.WriteLine(max + " böyükdür.");*/

/*double maxNumber = Math.Max(a, Math.Max(b, c));
double minNumber = Math.Min(a, Math.Min(b, c));

if(a == maxNumber) {
    Console.WriteLine(a + " böyükdür.");
} else if(b == maxNumber) {
    Console.WriteLine(b + " böyükdür.");
} else {
    Console.WriteLine(c + " böyükdür.");
}

if(a == minNumber) {
    Console.WriteLine(a + " kiçikdir.");
} else if(b == minNumber) {
    Console.WriteLine(b + " kiçikdir.");
} else {
    Console.WriteLine(c + " kiçikdir.");
}

if(a == b && b == c) {
    Console.WriteLine("Ədədlər bərabərdir.");
}*/

//9.
/*int count = 0;
for(int i = 100; i <= 999; i++) {
    if(i % 3 == 0 & i % 7 == 0 && i % 8 == 0) {
        count++;
    }
}

Console.WriteLine(count);*/

//? 10.
/*Console.WriteLine("İlk ədədi daxil edin:");
int a = int.Parse(Console.ReadLine());
Console.WriteLine("Son ədədi daxil edin:");
int b = int.Parse(Console.ReadLine());
string str = "";
for(int i = a; i < b; i++) {
    int zero = 0;
    for(int j = 1; j < i; j++) {
        if(i % j == 0) {s
            zero += j;
        }
    }

    if(zero == i) {
        str += i.ToString() + ",";
    }
}

str = str.TrimEnd(',') + '.';

Console.WriteLine(str);*/

//11.
/*string murekkeb = "";
for(int i = 2; i <= 150; i++) {
    byte bolen = 0;
    for(int j = 1; j <= i; j++) {
        if(i % j == 0) {
            bolen++;
        }
    }

    if(bolen > 2) {
        murekkeb += i.ToString() + ",";
    }
}

murekkeb = murekkeb.TrimEnd(',') + '.';

Console.WriteLine(murekkeb);*/