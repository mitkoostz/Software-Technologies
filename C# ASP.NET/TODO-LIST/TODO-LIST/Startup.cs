using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TODO_LIST.Startup))]
namespace TODO_LIST
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
