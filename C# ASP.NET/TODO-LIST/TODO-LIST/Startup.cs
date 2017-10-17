using Microsoft.Owin;
using Owin;
using System.Data.Entity;
using TODO_LIST.Migrations;
using TODO_LIST.Models;

[assembly: OwinStartupAttribute(typeof(TODO_LIST.Startup))]
namespace TODO_LIST
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            Database.SetInitializer(
                new MigrateDatabaseToLatestVersion<ApplicationDbContext, Configuration>());

            ConfigureAuth(app);
        }
    }
}
