namespace Pacientes.DTOS
{
    public class RespuestaAutenticacion
    {
        public string? Token  { get; set; }

        public DateTime? FechaExpiracion { get; set; }

    }
}
