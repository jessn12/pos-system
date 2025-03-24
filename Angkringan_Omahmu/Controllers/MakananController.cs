using Angkringan_Omahmu.Models;
using Microsoft.AspNetCore.Mvc;

namespace Angkringan_Omahmu.Controllers
{
    public class MakananController : Controller
    {
        public IActionResult Index()
        {
            List<Makanan> daftarMinuman = new List<Makanan>
            {
                new Makanan { Id = 1, Nama = "Nasi Goreng", Harga = "10.000", PhotoLocation="~/images/nasi goreng.jpg" },
                new Makanan {Id = 2, Nama = "Mie Goreng", Harga = "10.000", PhotoLocation="~/images/mie goreng.jpg"},
                new Makanan {Id = 3, Nama = "Mie Rebus", Harga = "10.000" , PhotoLocation="~/images/mie rebus.jpg" }
            };
            return View(daftarMinuman);
        }
    }
}
