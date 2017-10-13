using System.Web;
using System.Web.Mvc;

namespace Asp.netWebApp_.netframework_
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
