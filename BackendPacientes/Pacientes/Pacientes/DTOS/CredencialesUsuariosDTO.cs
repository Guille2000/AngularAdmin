using System.ComponentModel.DataAnnotations;

namespace Pacientes.DTOS
{
    public class CredencialesUsuariosDTO
    {
        [EmailAddress]
        [Required]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }
    }
}
