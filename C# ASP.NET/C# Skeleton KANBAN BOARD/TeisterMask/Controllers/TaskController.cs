using System;
using System.Linq;
using System.Web.Mvc;
using TeisterMask.Models;

namespace TeisterMask.Controllers
{
        [ValidateInput(false)]
	public class TaskController : Controller
	{
	    [HttpGet]
            [Route("")]
	    public ActionResult Index()
	    {
            using (var db = new TeisterMaskDbContext())
            {
                var tasks = db.Tasks.ToList();
                return View(tasks);
            }
            
		}

        [HttpGet]
        [Route("create")]
        public ActionResult Create()
		{
            // TODO: Implement me...
            return View();
		}

		[HttpPost]
		[Route("create")]
        [ValidateAntiForgeryToken]
		public ActionResult Create(Task task)
		{
            // TODO: Implement me...
            using (var db = new TeisterMaskDbContext())
            {
                db.Tasks.Add(task);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            
        }

		[HttpGet]
		[Route("edit/{id}")]
        public ActionResult Edit(int? id)
		{
            if(id == null)
            {
                return HttpNotFound();
            }
            // TODO: Implement me...
            using (var db = new TeisterMaskDbContext())
            {
               var taskForEdit =  db.Tasks.Find(id);
                return View(taskForEdit);
            }
            
        }

		[HttpPost]
		[Route("edit/{id}")]
        [ValidateAntiForgeryToken]
		public ActionResult EditConfirm(int id, Task taskModel)
		{
            // TODO: Implement me...
            using (var db = new TeisterMaskDbContext())
            {
                var oldTask = db.Tasks.Find(id);
                oldTask.Title = taskModel.Title;
                oldTask.Status = taskModel.Status;
                db.SaveChanges();
                return RedirectToAction("Index");

            }

            
		}
	}
}