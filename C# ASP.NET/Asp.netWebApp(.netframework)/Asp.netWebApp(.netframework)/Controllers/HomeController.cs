using Asp.netWebApp_.netframework_.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace Asp.netWebApp_.netframework_.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            using (var db = new TaskDbContext())
            {
                var tasks = db.Tasks.ToList();

                return View(tasks);
            }

            
        }
    }
}