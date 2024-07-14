using Microsoft.AspNetCore.Mvc;

namespace EdgeCut.Models;

public class Blog: Controller {
    public string Title {get;set;}
    public string Description {get;set;}
    public string Image {get;set;}
}