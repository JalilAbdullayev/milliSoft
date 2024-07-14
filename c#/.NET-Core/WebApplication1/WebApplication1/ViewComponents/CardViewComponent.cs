using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.ViewComponents {
    public class CardViewComponent: ViewComponent {
        public IViewComponentResult Invoke() {
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
            return View(users);
        }
    }
}
