using Angkringan_Omahmu.Models;
using Microsoft.AspNetCore.Mvc;

namespace Angkringan_Omahmu.Controllers
{
    public class InventoryController : Controller
    {
        public IActionResult Index()
        {
            List<Inventory> daftarInventory = new List<Inventory>
            {
                new Inventory {
                    Id = 1,
                    No = "1",
                    Menu_Barang = "Nasi Goreng",
                    Harga = 10000M,
                    Deskripsi = "enak",
                    PhotoLocation = "/images/nasi goreng.jpg"
                },
                new Inventory {
                    Id = 2,
                    No = "2",
                    Menu_Barang = "Mie Goreng",
                    Harga = 10000M,
                    Deskripsi = "enak",
                    PhotoLocation = "/images/mie goreng.jpg"
                },
                new Inventory {
                    Id = 3,
                    No = "3",
                    Menu_Barang = "Mie Rebus",
                    Harga = 10000M,
                    Deskripsi = "enak",
                    PhotoLocation = "/images/mie rebus.jpg"
                }
            };
            return View(daftarInventory);
        }

        // Metode tambahan untuk menangani post dari form (belum diimplementasikan)
        [HttpPost]
        public IActionResult Add(Inventory model, IFormFile ImageFile)
        {
            // Logika untuk menambah item
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Edit(Inventory model, IFormFile ImageFile)
        {
            // Logika untuk mengedit item
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            // Logika untuk menghapus item
            return RedirectToAction("Index");
        }
    }
}