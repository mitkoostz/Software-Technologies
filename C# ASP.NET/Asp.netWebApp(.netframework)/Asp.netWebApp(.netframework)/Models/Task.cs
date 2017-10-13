using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Asp.netWebApp_.netframework_.Models
{
    public class Task
    {
        public int Id { get; set; }
        [Required]
        public string Tittle { get; set; }
    }
}