using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers {
    public class HomeController: Controller {
        public IActionResult Index() {
            List<Product> products = new List<Product>();

            Product p = new Product();
            p.Name = "Telefon";
            p.Description = "Description 1";
            p.Image = "";
            p.Price = 20;

            Product p1 = new Product();
            p1.Name = "Notebook";
            p1.Description = "Description 2";
            p1.Image = "";
            p1.Price = 1500;

            products.Add(p);
            products.Add(p1);
            return View(products);
        }
        public IActionResult About() {
            Product p = new Product();
            p.Name = "Kitab";
            p.Description = "Lorem ipsum dolor sit amet.";
            p.Image = "https://static.insales-cdn.com/images/products/1/3389/877325629/Yer_kuresi_sert_qapaq__1_.jpg";
            p.Price = 20;
            return View(p);
        }
        public IActionResult Team() {
            List<Product> products = new List<Product>();

            Product p = new Product();
            p.Name = "Telefon";
            p.Description = "Description 1";
            p.Image = "";
            p.Price = 20;

            Product p1 = new Product();
            p1.Name = "Notebook";
            p1.Description = "Description 2";
            p1.Image = "";
            p1.Price = 1500;

            products.Add(p);
            products.Add(p1);

            List<User> users = new List<User>();

            User u1 = new User();
            u1.Name = "Amin";
            u1.Surname = "Məmmədov";

            User u2 = new User();
            u2.Name = "Fərəh";
            u2.Surname = "Əlizadə";

            User u3 = new User();
            u3.Name = "Zülfiyyə";
            u3.Surname = "Əliyeva";

            User u4 = new User();
            u4.Name = "Fuad";
            u4.Surname = "Əlizadə";

            users.Add(u1);
            users.Add(u2);
            users.Add(u3);
            users.Add(u4);

            /*ViewBag.product = products;
            ViewBag.user = users;*/
            return View(users);
        }
    }
}
