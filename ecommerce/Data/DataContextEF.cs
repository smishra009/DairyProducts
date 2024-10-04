using ecommerce.Entities;
using Microsoft.EntityFrameworkCore;

namespace ecommerce.Data
{
    public class DataContextEF: DbContext
    {
        public DbSet<Product> ?Products{get; set;}
        IConfiguration _config;
        public DataContextEF(IConfiguration config)
        {
            _config=config;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySQL("server=localhost;database=Products;user=root;password=Mishra@99",
                optionsBuilder=>optionsBuilder.EnableRetryOnFailure());
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().ToTable("DairyProducts","Products").HasKey(p=>p.ID);
        }
    }
}