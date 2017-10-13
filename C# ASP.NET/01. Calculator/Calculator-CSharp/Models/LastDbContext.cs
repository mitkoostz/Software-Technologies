namespace Calculator_CSharp.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class LastDbContext : DbContext
    {
        
        public LastDbContext()
            : base("name=LastDbContext")
        {
        }

        public virtual DbSet<Calculator> LastCalcs { get; set; }
    }

}