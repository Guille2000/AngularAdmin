using System.ComponentModel.DataAnnotations;

namespace Pacientes.DTOS
{
    public class SintomasCreacionDTO
    {

        [Required]
        public string? Nombre { get; set; }

        [Required]

        public string? Email { get; set; }

        [Required]

        public string? NombrePropietario { get; set; }
        [Required]

      
        public DateTime? FechaAlta { get; set; }

        [Required]
        public string? Sintoma { get; set; }
    }
}
