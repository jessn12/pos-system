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
                new Makanan { Nama = "Nasi Goreng", Harga = "10.000", PhotoLocation="~/images/nasi goreng.jpg" },
                new Makanan { Nama = "Mie Goreng", Harga = "10.000", PhotoLocation="~/images/mie goreng.jpg"},
                new Makanan { Nama = "Mie Rebus", Harga = "10.000" , PhotoLocation="~/images/mie rebus.jpg" }
            };
            return View(daftarMinuman);
        }
    }
}
