using Angkringan_Omahmu.Models;
using Microsoft.AspNetCore.Mvc;

namespace Angkringan_Omahmu.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            List<User> daftarUser = new List<User>
            {
                new User {  Nama = "Andi", Role = "Admin" },
                new User {  Nama = "Budi", Role = "Manager" },
                new User {  Nama = "Citra", Role = "Kasir" }
            };
            return View(daftarUser);
        }
    }
}
