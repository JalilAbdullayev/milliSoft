using System.Text.RegularExpressions;

namespace task;

public class Task3 {
    /*public static void Main() {
        // Console.WriteLine(sum(5, 5));
        // Console.WriteLine(CheckInteger());
        // Console.WriteLine(CheckEven());
        // Console.WriteLine(CheckPositive());
        // Console.WriteLine(CustomReverse());
        // Luck();
        // Console.WriteLine(CustomReverseString());
        // Console.WriteLine(FirstUpper());
        // ChangeValue();
        // ChangeValue2();
        // RandomPass();
        // removeWhiteSpaces();
        // Console.WriteLine(ReverseSentence("Salam mən developerəm"));
        // Terkib();
        // Console.WriteLine(RemoveVowels());
        // Luck2(3);
        // Converse();
        // LongestWord();
        // sumArr();
        // CountWords();
        // Five();
        // Middle();
        // ContainsA();
        // FindMax();
        // MovePositions();
        // CheckFibonacci();
        // CompareArrays();
        // Console.WriteLine(EdedSoz());
        /*Artma();
        Azalma();#1#
        // Anagram();
        // VowelConsonant();
        // Twelve();
        // Twelve2();
        // FindPositiveMin();
        // DasKagiz();
        // FirstUpperSen();
        // RandomDateBetween();
        // WeekDay();
        // WorkDays();
    }*/

    //1.
    public static double sum(double n1, double n2) {
        return n1 + n2;
    }

    //2.
    public static string CheckInteger() {
        Console.WriteLine("Ədəd daxil edin:");
        double n = double.Parse(Console.ReadLine());
        if(n % 1 == 0) {
            return "Integer";
        } else {
            return "Not integer";
        }
    }

    //3.
    public static string CheckEven() {
        Console.WriteLine("Ədəd daxil edin:");
        int n = int.Parse(Console.ReadLine());
        if(n % 2 == 0) {
            return "Cüt";
        } else {
            return "Tək";
        }
    }

    //4.
    public static string CheckPositive() {
        double n = double.Parse(Console.ReadLine());
        if(n > 0) {
            return "Positive";
        } else if(n < 0) {
            return "Negative";
        } else {
            return "Zero";
        }
    }

    //5.
    public static int CustomReverse() {
        Console.WriteLine("Ədəd daxil edin:");
        string n = Console.ReadLine();
        string empty = "";
        for(int i = n.Length - 1; i >= 0; i--) {
            empty += n[i];
        }

        return int.Parse(empty);
    }

    //6.
    public static void Terkib() {
        Console.WriteLine("Ədəd daxil edin:");
        int num = int.Parse(Console.ReadLine());
        int teklik = num % 10;
        int onluq = num / 10 % 10;
        int yuzluk = num / 100;

        Console.WriteLine($"{num} = {yuzluk * 100} + {onluq * 10} + {teklik}");
    }

    //7.
    public static string CustomReverseString() {
        Console.WriteLine("Söz daxil edin:");
        string n = Console.ReadLine();
        string empty = "";
        for(int i = n.Length - 1; i >= 0; i--) {
            empty += n[i];
        }

        return empty;
    }

    //8.
    public static string ReverseSentence(string s) {
        string[] str = s.Trim().Split(' ');
        string empty = "";
        for(int i = str.Length - 1; i >= 0; i--) {
            empty += str[i] + " ";
        }

        return empty;
    }

    //9.
    public static void LongestWord() {
        Console.WriteLine("Söz daxil edin:");
        string n = Console.ReadLine();
        string[] str = n.Trim().Split(' ');
        string max = "";
        int len = max.Length;
        for(int i = 0; i < str.Length; i++) {
            if(str[i].Length > len) {
                len = str[i].Length;
                max = str[i];
            }
        }

        Console.WriteLine("Longest word: " + max);
    }

    //10.
    public static string FirstUpper() {
        Console.WriteLine("Söz daxil edin:");
        string n = Console.ReadLine();
        return n[0].ToString().ToUpper() + n.Substring(1);
    }

    //11.
    public static void FirstUpperSen() {
        string text = "lorem ipsum dolor sit amet. asefgijewb. q3fuin.";
        string[] sentences = text.Split('.');
        string newText = "";
        for(int i = 0; i < sentences.Length; i++) {
            if(sentences[i].Length > 0) {
                newText += sentences[i].Trim()[0].ToString().ToUpper() + sentences[i].Trim().Substring(1) + ". ";
            }
        }

        Console.WriteLine(newText);
    }

    //12.
    public static void Converse() {
        string s = "ThiS is a  stRingG";
        for(int i = 0; i < s.Length; i++) {
            if(char.IsUpper(s[i])) {
                Console.Write(s[i].ToString().ToLower());
            } else {
                Console.Write(s[i].ToString().ToUpper());
            }
        }
    }

    //13.
    public static string RemoveVowels() {
        Console.WriteLine("Söz daxil edin:");
        string n = Console.ReadLine();
        return Regex.Replace(n, "[aeiou]", "");
    }

    //14.
    public static void removeWhiteSpaces() {
        Console.WriteLine("Cümlə daxil edin:");
        string n = Console.ReadLine();
        Console.WriteLine(Regex.Replace(n, @"\s+", " "));
    }

    //15.
    public static void ChangeValue() {
        int x = 10;
        int y = 5;
        int z;

        z = x;
        x = y;
        y = z;
        Console.WriteLine("x:" + x + ", y:" + y + ", z:" + z);
    }

    //16.
    public static void ChangeValue2() {
        int x = 10;
        int y = 5;

        x = x + y;
        y = x - y;
        x = x - y;
        Console.WriteLine("x:" + x + ", y:" + y);
    }

    //17.
    public static void RandomPass() {
        Console.WriteLine("Ədəd daxil edin:");
        int len = int.Parse(Console.ReadLine());
        Random r = new Random();
        string chars = "0123456789";
        string password = "";
        for(int i = 0; i < len; i++) {
            password += chars[r.Next(chars.Length)];
        }

        Console.WriteLine(password);
    }

    //18.
    public static void RandomPassMix() {
        Console.WriteLine("Ədəd daxil edin:");
        int len = int.Parse(Console.ReadLine());
        Random r = new Random();
        string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
        string password = "";
        for(int i = 0; i < len; i++) {
            password += chars[r.Next(chars.Length)];
        }

        Console.WriteLine(password);
    }

    //19.
    public static void Luck() {
        Random r = new Random();

        int prize = r.Next(0, 10);
        for(int i = 0; i < 3; i++) {
            Console.WriteLine("Ədəd daxil edin:");
            int a = int.Parse(Console.ReadLine());
            if(prize == a) {
                Console.WriteLine("Qazandınız!");
                break;
            } else {
                Console.WriteLine("Şansınızı bir daha sınayın.");
            }
        }
    }

    //20.
    public static void Luck2(int prize) {
        Console.WriteLine("Ədəd daxil edin:");
        int a = int.Parse(Console.ReadLine());
        if(prize == a) {
            Console.WriteLine("Qazandınız!");
        } else {
            Console.WriteLine("Şansınızı bir daha sınayın.");
            Luck2(prize);
        }
    }

    //21.
    public static void sumArr() {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        for(int i = 0; i < arr.Length; i++) {
            sum += arr[i];
        }

        Console.WriteLine(sum);
    }

    //22.
    public static void CountWords() {
        Console.WriteLine("Cümlə daxil edin:");
        string n = Console.ReadLine();
        string[] str = n.Trim().Split(' ');
        Console.WriteLine(str.Length);
    }

    //23.
    public static void Five() {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        for(int i = 0; i < arr.Length; i++) {
            if(arr[i] % 5 == 0) {
                Console.WriteLine(arr[i]);
            }
        }
    }

    //24.
    public static void Middle() {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int count = 0;
        int one = 1;
        for(int i = 0; i < arr.Length; i++) {
            one *= arr[i];
            count++;
        }

        Console.WriteLine(one / count);
    }

    //25.
    public static void ContainsA() {
        string[] names = {"Əli", "Vəli", "Ayşə", "Fatma"};
        for(int i = 0; i < names.Length; i++) {
            if(names[i].ToLower().Contains("a")) {
                Console.WriteLine(names[i]);
            }
        }
    }

    //26.
    public static void FindMax() {
        int[] arr = {1, 2, 3, 4, 11, 5, 6, 7, 8, 9, 10};
        int max = arr[0];
        for(int i = 0; i < arr.Length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }

        Console.WriteLine(max);
    }

    //27.

    public static void MovePositions() {
        int[] arr = [11, 22, 43, 74, 95, 15, 47, 19, 70, 42, 88, 23, 36, 12, 13, 16, 17, 18, 19, 20];
        int min = arr[0];
        int max = arr[0];
        int minIndex = 0;
        int maxIndex = 0;
        for(int i = 1; i < arr.Length; i++) {
            if(arr[i] <= min) {
                //Ən kiçik olanı götürürük.
                min = arr[i];
                minIndex = i;
            }

            if(arr[i] >= max) {
                //Ən böyük olanı götürürük.
                max = arr[i];
                maxIndex = i;
            }
        }

        //Yerini dəyişirik.
        arr[maxIndex] = min;
        arr[minIndex] = max;
        foreach(int num in arr) {
            Console.WriteLine(num);
        }
    }

    //28.
    public static void CheckFibonacci() {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int a = 0;
        int b = 1;
        int c = 0;
        for(int i = 0; i < arr.Length; i++) {
            c = a + b;
            a = b;
            b = c;
            if(c == arr[i]) {
                Console.WriteLine(arr[i] + " Fibonacci");
            }
        }
    }

    //29.
    public static void CompareArrays() {
        int[] a = [1, 2, 3];
        int[] b = [1, 2, 4, 5];

        int count = 0;
        if(a.Length == b.Length) {
            Array.Sort(a);
            Array.Sort(b);
            for(int i = 0; i < a.Length; i++) {
                if(a[i] == b[i]) {
                    count++;
                }
            }

            if(count == a.Length) {
                Console.WriteLine("Array-lər bərabərdir.");
            } else {
                Console.WriteLine("Array-lər fərqlidir.");
            }
        } else {
            Console.WriteLine("Array-lər fərqlidir.");
        }
    }

    //30.
    public static string EdedSoz() {
        Console.WriteLine("Ədəd daxil edin:");
        int num = int.Parse(Console.ReadLine());
        string[] bir = {"", "bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz"};
        string[] on = {"", "on", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"};
        string yuz = "yüz";

        string eded = "";

        if(num == 0) {
            return "sıfır";
        }

        if(num >= 100) {
            eded += bir[(int)Math.Floor((decimal)num / 100)] + ' ' + yuz + ' ';
            num %= 100;
        }

        if(num >= 10) {
            eded += on[(int)Math.Floor((decimal)num / 10)] + ' ';
            num %= 10;
        }

        if(num >= 10 && num <= 19) {
            eded += bir[num] + ' ';
            return eded.Trim();
        }

        if(num >= 1) {
            eded += bir[num];
        }

        return eded.Trim();
    }

    //31.1.
    public static void Artma() {
        int[] order = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
        for(int i = 0; i < order.Length; i++) {
            for(int j = 0; j < order.Length - i - 1; j++) {
                if(order[j] > order[j + 1]) {
                    int tmp = order[j];
                    order[j] = order[j + 1];
                    order[j + 1] = tmp;
                }
            }
        }

        Console.WriteLine("Artan sıra: ");
        foreach(int num in order) {
            Console.WriteLine(num);
        }
    }

    //31.2.
    public static void Azalma() {
        int[] order = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
        for(int i = 0; i < order.Length; i++) {
            for(int j = 0; j < order.Length - i - 1; j++) {
                if(order[j] < order[j + 1]) {
                    int tmp = order[j];
                    order[j] = order[j + 1];
                    order[j + 1] = tmp;
                }
            }
        }

        Console.WriteLine("Azalan sıra: ");
        foreach(int num in order) {
            Console.WriteLine(num);
        }
    }

    //32.
    public static void DasKagiz() {
        string[] options = ["Daş", "Kağız", "Qayçı"];
        Console.WriteLine("Make your choice:");
        string choice = Console.ReadLine();
        Random random = new Random();
        int randomIndex = random.Next(options.Length);
        string compChoice = options[randomIndex];
        if(!(choice == "Daş" || choice == "Kağız" || choice == "Qayçı")) {
            Console.WriteLine("Your choice is wrong.");
        } else {
            if(choice == compChoice) {
                Console.WriteLine("Even.");
            } else if((choice == "Qayçı" && compChoice == "Kağız") || (choice == "Kağız" && compChoice == "Daş") ||
                      (choice == "Daş" && compChoice == "Qayçı")) {
                Console.WriteLine($"You won. Your choice is {choice} and computer choice is {compChoice}.");
            } else {
                Console.WriteLine($"You lost. Your choice is {choice} and computer choice is  {compChoice}.");
            }
        }
    }

    //33.
    public static void Anagram() {
        Console.WriteLine("1-ci sözü daxil edin:");
        string word1 = Console.ReadLine();
        Console.WriteLine("2-ci sözü daxil edin:");
        string word2 = Console.ReadLine();
        if(word1.Length != word2.Length) {
            //Uzunluqları yoxlayırıq.
            Console.WriteLine("Anaqram deyillər.");
        } else {
            //Ayırıb birləşdirir və bərabərliyini yoxlayırıq.
            char[] word1Arr = word1.ToCharArray();
            char[] word2Arr = word2.ToCharArray();
            Array.Sort(word1Arr);
            Array.Sort(word2Arr);
            if(new string(word1Arr) == new string(word2Arr)) {
                Console.WriteLine("Anaqramdırlar.");
            } else {
                Console.WriteLine("Anaqram deyillər.");
            }
        }
    }

    //34.
    public static void VowelConsonant() {
        Console.WriteLine("Söz və ya mətn daxil edin:");
        string text = Console.ReadLine();

        Console.WriteLine("Sait: " + Regex.Matches(text.ToLower(), "[aeiou]").Count);
        Console.WriteLine("Samit: " + Regex.Matches(text.ToLower(), "[bcdfghjklmnpqrstvwxz]").Count);
    }

    //35.
    public static void Twelve() {
        for(int i = 0; i <= 12; i++) {
            for(int j = 0; j < i; j++) {
                if(i + j == 12) {
                    Console.WriteLine(i + ", " + j);
                }
            }
        }
    }

    //35.2
    public static void Twelve12() {
        Console.WriteLine("Ədəd daxil edin:");
        int num = int.Parse(Console.ReadLine());
        for(int i = 0; i <= num; i++) {
            Console.WriteLine($"{i} + {num - i} = {num}");
        }
    }

    //36.
    public static void Twelve2() {
        for(int i = 0; i <= 12; i++) {
            for(int j = 0; j <= i; j++) {
                for(int k = 0; k <= j; k++) {
                    if(i + j + k == 12) {
                        Console.WriteLine(i + " + " + j + " + " + k + " = " + 12);
                    }
                }
            }
        }
    }

    //38.
    public static void Zeros() {
        int[] nums = {1, 0, 2, 3, 0, 4, 5, 0, 6, 7, 0, 8, 9, 0};
        int count = 0, firstIndex = 0, lastIndex = 0;
        for(int i = 0; i < nums.Length; i++) {
            if(nums[i] == 0) {
                firstIndex = i;
                break;
            }
        }

        for(int i = nums.Length - 1; i >= 0; i--) {
            if(nums[i] == 0) {
                lastIndex = i;
                break;
            }
        }

        for(int i = firstIndex + 1; i < lastIndex; i++) {
            count++;
        }
    }

    //39.
    public static void FindPositiveMin() {
        int[] arr = {1, 2, 3, -7, 4, 11, 0, 5, 6, 7, -1, -52, 8, 9, 10};

        int min = arr[0];
        for(int i = 0; i < arr.Length; i++) {
            if(arr[i] > 0 && arr[i] < min) {
                min = arr[i];
            }
        }

        Console.WriteLine(min);
    }

    //40.
    public static void RandomDateBetween() {
        Console.WriteLine("First Date:");
        DateTime date1 = DateTime.Parse(Console.ReadLine());
        Console.WriteLine("Second Date:");
        DateTime date2 = DateTime.Parse(Console.ReadLine());
        Random random = new Random();
        DateTime randomDate = date1.AddDays(random.Next((date2 - date1).Days));
        Console.WriteLine(randomDate);
    }

    //41.
    public static void WeekDay() {
        Console.WriteLine("Enter a date:");
        DateTime date = DateTime.Parse(Console.ReadLine());
        Console.WriteLine(date.DayOfWeek);
    }

    //42.
    public static void WorkDays() {
        Console.WriteLine("First Date:");
        DateTime date1 = DateTime.Parse(Console.ReadLine());
        Console.WriteLine("Second Date:");
        DateTime date2 = DateTime.Parse(Console.ReadLine());
        int workDays = 0;
        for(DateTime i = date1; i <= date2; i = i.AddDays(1)) {
            if(i.DayOfWeek != DayOfWeek.Saturday && i.DayOfWeek != DayOfWeek.Sunday) {
                workDays++;
            }
        }

        Console.WriteLine(workDays);
    }
}