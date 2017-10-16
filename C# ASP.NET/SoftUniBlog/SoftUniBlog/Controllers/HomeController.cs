using SoftUniBlog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;

namespace SoftUniBlog.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home       
        public ActionResult Index(Article article)
        {
            using (var db = new BlogDbContext())
            {
                var articles = db.Articles.Include(a => a.Author).ToList();
                return View(articles);
            }
        }
        [Authorize]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost,ActionName("Create")]
        [Authorize]
        public ActionResult Create(Article article)
        {
            using (var db = new BlogDbContext())
            {
                if (ModelState.IsValid)
                {
                    var user = db.Users.
                        Where(u => this.User.Identity.Name == u.UserName)
                        .FirstOrDefault();
                    article.Author = user;
                    db.Articles.Add(article);
                    db.SaveChanges();
                }
            }
            return RedirectToAction("Index");
        }

        [Authorize]
        public ActionResult Edit(int? id)
        {
            if(id == null)
            {
                return HttpNotFound();
            }

            using (var db = new BlogDbContext())
            {
                var article = db.Articles.Find(id);
                return View(article);
            }
            
        }
        [HttpPost , ActionName("Edit")]
        [Authorize]
        public ActionResult EditConfirm(Article article , int? id)
        {
            if(id == null || article == null)
            {
                return HttpNotFound();
            }

            using (var db = new BlogDbContext())
            {
               var art = db.Articles.Find(id);
                if (this.User.Identity.Name != art.Author.UserName)
                {
                    return HttpNotFound();
                }
                art.Tittle = article.Tittle;
                art.Description = article.Description;
                art.Author.UserName = this.User.Identity.Name;

               

                    db.SaveChanges();

            }

            return RedirectToAction("Index");
        }

        public ActionResult Delete(int? id)
        {

            using (var db = new BlogDbContext())
            {
                var article = db.Articles.Find(id);
                if(id == null)
                {
                    return HttpNotFound();
                }
                

                return View(article);

            }
        }
        [HttpPost , ActionName("Delete")]
        public ActionResult DeleteConfirm(int? id)
        {

            using (var db = new BlogDbContext())
            {
                var article = db.Articles.Find(id);

                if (this.User.Identity.Name == article.Author.UserName)
                {
                    db.Articles.Remove(article);
                    db.SaveChanges();
                }
                else
                    return HttpNotFound();
               

                return RedirectToAction("Index");

            }


        }

    }
}