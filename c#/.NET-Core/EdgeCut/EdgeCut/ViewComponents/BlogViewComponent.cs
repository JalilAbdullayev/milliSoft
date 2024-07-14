using EdgeCut.Models;
using Microsoft.AspNetCore.Mvc;

namespace EdgeCut.ViewComponents;

public class BlogViewComponent: ViewComponent {
    // GET
    public IViewComponentResult Invoke() {
        List<Blog> blogs = new List<Blog>();

        Blog[] blogArray = new Blog[] {
            new Blog {
                Title = "Look even slightly believable. If you are",
                Description =
                    "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                Image = "b1.jpg"
            },
            new Blog {
                Title = "Anything embarrassing hidden in the middle",
                Description =
                    "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                Image = "b2.jpg"
            },
            new Blog {
                Title = "Molestias magni natus dolores odio commodi. Quaerat!",
                Description =
                    "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                Image = "b3.jpg"
            }
        };

        blogs.AddRange(blogArray);
        return View(blogs);
    }
}