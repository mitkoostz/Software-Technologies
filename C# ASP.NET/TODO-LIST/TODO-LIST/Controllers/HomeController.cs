using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TODO_LIST.Models;
using Microsoft.AspNet.Identity;

namespace TODO_LIST.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(int? id)
        {

            if(id != null)
            {
                using (var db = new ApplicationDbContext())
                {
                    var currentUserId = this.User.Identity.GetUserId();

                    var UserTasks = db.Tasks.Where(t => t.UserId == currentUserId).ToList();

                    ViewBag.Task = db.Tasks.Find(id);


                    return View("IndexAlert",UserTasks);

                }
                
            }

            using (var db = new ApplicationDbContext())
            {
                var currentUserId = this.User.Identity.GetUserId();

                var UserTasks = db.Tasks.Where(t => t.UserId == currentUserId).ToList();
                
                return View(UserTasks);
            }
            
        }
        [HttpPost , ActionName("Index")]
        public ActionResult DeleteAlert(int? id)
        {
            using (var db = new ApplicationDbContext())
            {               
                var task = db.Tasks.Find(id);
                db.Tasks.Remove(task);
                db.SaveChanges();

                var currentUserId = this.User.Identity.GetUserId();
                var UserTasks = db.Tasks.Where(t => t.UserId == currentUserId).ToList();

                return Redirect("http://localhost:55342");
            }

        }
        

        [Authorize]
        public ActionResult AddNew()
        {
            return View();
        }

        public ActionResult Modal()
        {
            return View();
        }

        [Authorize]
        [HttpPost , ActionName("AddNew")]
        public ActionResult AddNewConfirm(Task task)
        {
            using (var db =  new ApplicationDbContext())
            {

                task.UserId = this.User.Identity.GetUserId();

                db.Tasks.Add(task);
                db.SaveChanges();
            }
            return RedirectToAction("Index");
        }

        
        public ActionResult Delete(int? id)
        {
            if(id == null)
            {
                return RedirectToAction("Index");
            }

            using (var db = new ApplicationDbContext())
            {
                var task = db.Tasks.Find(id);

                if(task.UserId != this.User.Identity.GetUserId())
                {
                    return HttpNotFound();
                }

                return View(task);
            }
            
        }

        [Authorize]
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


        
        public ActionResult ViewAlert(int? id)
        {
            using (var db = new ApplicationDbContext())
            {
                var task = db.Tasks.Find(id);
                return View(task);

            }
        }

    }
}