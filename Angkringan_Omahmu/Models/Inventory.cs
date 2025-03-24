namespace Angkringan_Omahmu.Models
{
    public class Inventory
    {
        public int Id { get; set; }
        public string No { get; set; }
        public string Menu_Barang { get; set; }
        public decimal Harga { get; set; }
        public string Deskripsi { get; set; }
        public string PhotoLocation { get; set; }
        // Property bantuan untuk kompatibilitas dengan view
        public string Name
        {
            get { return Menu_Barang; }
        }
    }
}