using EdgeCut.Models;
using Microsoft.AspNetCore.Mvc;

namespace EdgeCut.ViewComponents;

public class FurnitureViewComponent: ViewComponent {
    public IViewComponentResult Invoke() {
        List<Furniture> furnitures = new List<Furniture>();

        Furniture[] furnitureArray = new Furniture[] {
            new Furniture {Name = "Brown Chair Design", Image = "f1.png", Price = 100},
            new Furniture {Name = "Double Bed Design", Image = "f2.png", Price = 200},
            new Furniture {Name = "House Chair Design", Image = "f3.png", Price = 200},
            new Furniture {Name = "Brown Table Design", Image = "f4.png", Price = 200},
            new Furniture {Name = "Blue Chair Design", Image = "f5.png", Price = 200},
            new Furniture {Name = "Brown Table Design", Image = "f6.png", Price = 200}
        };

        furnitures.AddRange(furnitureArray);
        return View(furnitures);
    }
}