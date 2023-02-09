using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Pacientes.Entidades;

namespace Pacientes
{
    public class ApplicationDBContext:IdentityDbContext
    {
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Sintomas> Sintomas { get; set; }


    }
       
}
