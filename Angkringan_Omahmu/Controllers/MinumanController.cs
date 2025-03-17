using Angkringan_Omahmu.Models;
using Microsoft.AspNetCore.Mvc;

namespace Angkringan_Omahmu.Controllers
{
    public class MinumanController : Controller
    {
        public IActionResult Index()
        {
            List<Minuman> daftarMinuman = new List<Minuman>
            {
                new Minuman { Nama = "susu", Harga = "5.000", PhotoLocation="~/images/susu.jpg" },
                new Minuman { Nama = "kopi", Harga = "5.000", PhotoLocation="~/images/kopi.jpg"},
                new Minuman { Nama = "teh", Harga = "5.000" , PhotoLocation="~/images/teh.jpg" }
            };
            return View(daftarMinuman);
        }
    }
}
