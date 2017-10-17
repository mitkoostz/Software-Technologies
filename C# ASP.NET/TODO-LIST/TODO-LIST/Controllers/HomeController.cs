using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TODO_LIST.Models;

namespace TODO_LIST.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            using (var db = new ApplicationDbContext())
            {
                
                return View(db.Tasks.ToList());
            }
            
        }

        public ActionResult AddNew()
        {
            return View();
        }

        [HttpPost , ActionName("AddNew")]
        public ActionResult AddNewConfirm(Task task)
        {
            using (var db =  new ApplicationDbContext())
            {               
                db.Tasks.Add(task);
                db.SaveChanges();
            }
            return RedirectToAction("Index");
        }

        public ActionResult Delete(int? id)
        {
            
            using (var db = new ApplicationDbContext())
            {
                var task = db.Tasks.Find(id);

                return View(task);
            }
            
        }

        [HttpPost,ActionName("Delete")]
        public ActionResult DeleteConfirm(int? id)
        {
            using (var db = new ApplicationDbContext())
            {
                var task = db.Tasks.Find(id);
                db.Tasks.Remove(task);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
        }

    }
}