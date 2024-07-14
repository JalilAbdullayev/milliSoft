namespace task;

public class BankAccount {
    public int AccountNumber;
    public string Name;
    public string Surname;
    public string Password;
    public double Balance;

    public static List<BankAccount> customers = new List<BankAccount>();

    public static void Main() {
        customers.Add(new BankAccount() {
            AccountNumber = 1234,
            Name = "Jalil",
            Surname = "Abdullayev",
            Password = "2000",
            Balance = 500
        });
        customers.Add(new BankAccount() {
            AccountNumber = 5678,
            Name = "Nail",
            Surname = "Abdullayev",
            Password = "2004",
            Balance = 400
        });
        Bank();
    }

    public static void Bank() {
        Console.WriteLine("Enter your account number: ");
        Int32 accountNumber = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Enter your password: ");
        string password = Console.ReadLine();
        var customer = customers.Find(x => x.AccountNumber == accountNumber && x.Password == password);
        if(customer != null) {
            Console.WriteLine("Choose operation: 1. Balance 2. Deposit 3. Withdraw");
            byte operation = byte.Parse(Console.ReadLine());
            switch(operation) {
                case 1:
                    Console.WriteLine($"Your balance: {customer.Balance}");
                    break;
                case 2:
                    Console.WriteLine("Enter amount: ");
                    double amount = double.Parse(Console.ReadLine());
                    customer.Balance += amount;
                    Console.WriteLine($"Your new balance: {customer.Balance}");
                    break;
                case 3:
                    Console.WriteLine("Enter amount: ");
                    double amount2 = double.Parse(Console.ReadLine());
                    customer.Balance -= amount2;
                    Console.WriteLine($"Your new balance: {customer.Balance}");
                    break;
                default:
                    Console.WriteLine("Wrong operation");
                    break;
            }
        } else {
            Console.WriteLine("Wrong account number or password");
        }
    }
}