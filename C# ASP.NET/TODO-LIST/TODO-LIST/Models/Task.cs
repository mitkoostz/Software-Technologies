using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TODO_LIST.Models
{
    public class Task 
    {

        public int Id { get; set; }

        [Required] 
        [StringLength(30)]
        public string Tittle { get; set; }

        [StringLength(100)]
        public string Comment { get; set; }

        public DateTime date { get; set; }

        public bool IsMade { get; set; }

        public string  UserId { get; set; }

        public Task()
        {

            this.IsMade = false;
            this.date = DateTime.Now;
        }

    }
}