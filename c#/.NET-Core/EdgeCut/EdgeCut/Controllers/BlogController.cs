using Microsoft.AspNetCore.Mvc;

namespace EdgeCut.Controllers {
    public class BlogController: Controller {
        public IActionResult Index() {
            return View();
        }
    }
}