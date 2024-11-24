using ecommerce.Data;
using ecommerce.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ecommerce.Controllers
{
    
    public class ProductController: BasicApiController
    {
        DataContextEF entityFramework;
        IConfiguration _config= new ConfigurationBuilder()
        .AddJsonFile("appsettings.json").Build();
        public ProductController()
        {
            entityFramework=new DataContextEF(_config);
        }
        [HttpGet]
        public ActionResult<List<Product>> AllDairyProducts()
        {
            List<Product> ?DairyProducts= entityFramework.Products?.ToList();
            return Ok(DairyProducts);
        }
        [HttpGet("{id}")]
        public ActionResult<Product> ProdWithId(int id)
        {
            Product? RequiredProduct= entityFramework?.Products?.Find(id);
            if(RequiredProduct==null) return NotFound();
            return Ok(RequiredProduct);
        }
    }
}