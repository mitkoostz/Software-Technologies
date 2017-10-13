using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstConsoleAPP.net
{
     class User
    {
        public int Id { get; set; }

        [Required]
        
        public string Username { get; set; }

        public string FullName { get; set; }

        public ICollection<Article> Articles { get; set; }
    }

    class Article
    {
        public int Id { get; set; }
        [Required]
        public string Tittle { get; set; }
        [Required]
        public string Content { get; set; }

        public User Author { get; set; }
        public int? AuthorId { get; set; }

    }

    class ArticlesDbContext : DbContext
    {
        public DbSet<Article> Articles { get; set; }
        public  DbSet<User> Users { get; set; }
    }

    public class startup
    {
        public static void Main()
        {
            ArticlesDbContext db = new ArticlesDbContext();

            Article newArticle = new Article()
            {
                Tittle="nova statiq",
                Content = " content na nova statiq"
            };
            db.Articles.Add(newArticle);
            db.SaveChanges();

            User newUser = new User()
            {
                Username = "Pesho",
                FullName = "Pesho Kitaeca"
            };
            db.Users.Add(newUser);
            db.SaveChanges();


            foreach (var a in db.Articles)
            {
                Console.WriteLine(a.Tittle);
            }
        }
    }
}
