namespace task;

public class Student {
    /*public static void Main() {
        Insert();
    }*/

    public static string name;
    public static string surname;
    public static DateTime birthday;
    public static string address;

    public static string fullName() {
        return "Full name: " + name + " " + surname;
    }

    public static string age() {
        return "Age: " + (DateTime.Now.Year - birthday.Year);
    }

    public static void Insert() {
        Student student = new Student();
        Console.WriteLine("Name: ");
        Student.name = Console.ReadLine();
        Console.WriteLine("Surname: ");
        Student.surname = Console.ReadLine();
        Console.WriteLine("Birthday: ");
        Student.birthday = DateTime.Parse(Console.ReadLine());

        Console.WriteLine(fullName());
        Console.WriteLine(age());
    }
}