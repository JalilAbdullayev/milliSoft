using Microsoft.AspNetCore.Mvc;

namespace EdgeCut.Controllers {
    public class ContactController: Controller {
        public IActionResult Index() {
            return View();
        }
    }
}