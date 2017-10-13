using Calculator_CSharp.Models;
using System.Web.Mvc;

namespace Calculator_CSharp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(Calculator calc)
       {
            return View(calc);
        }

 
        [HttpPost]
        public ActionResult Calculate(decimal LeftOperand,decimal RightOperand, string Operator)




        {

            var db = new LastDbContext();
            Calculator calc = new Calculator();
            calc.LeftOperand = LeftOperand;
            calc.RightOperand = RightOperand;
            calc.Operator = Operator;
            calc.Calculate();

            db.LastCalcs.Add(calc);
            db.SaveChanges();
            
        

            return RedirectToAction("Index",calc);


        }

        [HttpPost]
        public ActionResult Reset(Calculator calc)
        {
            var db = new LastDbContext();

            foreach (var calcs in db.LastCalcs)
            {
                db.LastCalcs.Remove(calcs);
            }
            db.SaveChanges();

            return RedirectToAction("Index", calc);
        }

        [HttpPost]
        public ActionResult Delete(Calculator calc)
        {

            return RedirectToAction("Index", calc);
        }
    }
}