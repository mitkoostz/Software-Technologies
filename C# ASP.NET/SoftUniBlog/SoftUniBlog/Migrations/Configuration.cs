namespace SoftUniBlog.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    public sealed class Configuration : DbMigrationsConfiguration<SoftUniBlog.Models.BlogDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
            ContextKey = "SoftUniBlog.Models.BlogDbContext";
        }

        protected override void Seed(SoftUniBlog.Models.BlogDbContext context)
        {
           
        }
    }
}
