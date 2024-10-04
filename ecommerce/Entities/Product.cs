namespace ecommerce.Entities
{
    public class Product
    {
        public int ID { get; set; }
        public String? Name { get; set; }="";
        public String? Description { get; set; }="";
        public String? PictureUrl { get; set; }="";
        public double Price { get; set; }
        public String? Category { get; set; }="";
        public String? Brand { get; set; }="";
        public int Quantity { get; set; }
    }
}