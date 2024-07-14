using EdgeCut.Models;
using Microsoft.AspNetCore.Mvc;

namespace EdgeCut.Controllers {
    public class FurnitureController: Controller {
        public IActionResult Index() {
            return View();
        }
    }
}