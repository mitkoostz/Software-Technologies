using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SoftUniBlog.Models
{
    public class Article
    {
        public int Id { get; set; }
        [Required]
        public string Tittle { get; set; }
        [Required]
        public string Description { get; set; }
        public DateTime Data { get; set; }

        public virtual ApplicationUser Author { get; set; }

        public Article()
        {
            this.Data = DateTime.Now;
        }

    }
}