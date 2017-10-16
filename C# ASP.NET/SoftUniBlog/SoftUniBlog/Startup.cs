using Microsoft.Owin;
using Owin;
using SoftUniBlog.Models;
using System.Configuration;
using System.Data.Entity;
using SoftUniBlog.Migrations;

[assembly: OwinStartupAttribute(typeof(SoftUniBlog.Startup))]
namespace SoftUniBlog
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

            Database.SetInitializer(
                new MigrateDatabaseToLatestVersion<BlogDbContext, SoftUniBlog.Migrations.Configuration>());
        }
    }
}
