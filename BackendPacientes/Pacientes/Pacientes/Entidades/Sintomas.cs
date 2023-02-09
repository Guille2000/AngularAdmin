using System.ComponentModel.DataAnnotations;

namespace Pacientes.Entidades
{
    public class Sintomas
    {
        public int Id { get; set; }

        public string? Nombre { get; set; }

        public string? Email { get; set; }

        [Required]
        public string? NombrePropietario { get; set; }

        public DateTime? FechaAlta { get; set; }

        public string? Sintoma { get; set; }

    }
}
