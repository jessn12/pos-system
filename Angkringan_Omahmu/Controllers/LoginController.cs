using Microsoft.AspNetCore.Mvc;

namespace Angkringan_Omahmu.Controllers
{
    public class LoginController : Controller
    {
        [HttpGet] // Pastikan metode ini hanya bisa diakses dengan GET
        public IActionResult Login()
        {
            return View();
        }
    }
}
