using Asp.netWebApp_.netframework_.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Asp.netWebApp_.netframework_.Controllers
{
    public class TaskController : Controller
    {

        [HttpPost]
        public ActionResult Create(Models.Task task , string Tittle)
        {
            if (task == null)
            {
                return RedirectToAction("Index", "Home");
              
            }
            
            using (var db = new TaskDbContext())
            {
                db.Tasks.Add(task);
                db.SaveChanges();
                
            }

            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public ActionResult Delete(int? id)
        {
            if(id == null)
            {
                return RedirectToAction("Index", "Home");
            }

            using (var db = new TaskDbContext())
            {
                var task = db.Tasks.Find(id);
                if (task == null)
                {
                    return RedirectToAction("Index", "Home");
                }
                db.Tasks.Remove(task);
                db.SaveChanges();
            }

            return RedirectToAction("Index", "Home");

        }

    }
}