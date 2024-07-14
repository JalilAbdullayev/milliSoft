using EdgeCut.Models;
using Microsoft.AspNetCore.Mvc;

namespace EdgeCut.Controllers {
    public class HomeController: Controller {
        public IActionResult Index() {
            List<Testimonial> testimonials = new List<Testimonial>();
            List<Slider> sliders = new List<Slider>();

            for(int i = 0; i < 3; i++) {
                testimonials.Add(new Testimonial {
                    Name = "Siaalya",
                    Comment =
                        "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable c",
                    Image = "client.jpg"
                });
                sliders.Add(new Slider {
                    Title = "For all your furniture needs",
                    Description =
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.",
                    Image = "slider-img.png"
                });
            }

            ViewBag.testimonials = testimonials;
            ViewBag.sliders = sliders;
            return View();
        }
    }
}