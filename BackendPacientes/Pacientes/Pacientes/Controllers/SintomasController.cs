using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using Pacientes.DTOS;
using Pacientes.Entidades;

namespace Pacientes.Controllers
{
    [ApiController]
    public class SintomasController:ControllerBase
    {
        private readonly ApplicationDBContext context;
        private readonly IMapper mapper;

        public SintomasController(ApplicationDBContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
        [HttpGet]
        [Route("pacientes/pacientes")]
        public async Task<ActionResult<List<SintomasDTO>>> Get()
        {
            var pacientes = await context.Sintomas.ToListAsync();
            return mapper.Map<List<SintomasDTO>>(pacientes);
        }
        [HttpGet]
        [Route("pacientes/id")]
        public async Task<ActionResult<SintomasDTO>> Get(int Id)
        {
            var paciente = await context.Sintomas.FirstOrDefaultAsync(x => x.Id == Id);

            if (paciente == null)
            {
                return NotFound();
            }
            return mapper.Map<SintomasDTO>(paciente);
        }


        [HttpPost]
        [Route("pacientes/agregar")]
        public async Task<ActionResult> Post([FromBody] SintomasCreacionDTO sintomasCreacionDTO)
        {
            var paciente = mapper.Map<Sintomas>(sintomasCreacionDTO);
            context.Add(paciente);
            await context.SaveChangesAsync();
            return Ok(paciente);
        }
        [HttpPut]
        [Route("pacientes/editar")]
        public async Task<ActionResult> Put(int Id, [FromBody] SintomasCreacionDTO sintomasCreacionDTO)
        {
            var paciente = await context.Sintomas.FirstOrDefaultAsync(x => x.Id== Id);

            if(paciente == null)
            {
                return NotFound();
            }

            paciente = mapper.Map(sintomasCreacionDTO, paciente);
            await context.SaveChangesAsync();
            return Ok(paciente); 
        }
        [HttpDelete]
        [Route("pacientes/eliminar")]
        public async Task<ActionResult> Delete(int Id)
        {
            var existe = await context.Sintomas.AnyAsync(x => x.Id== Id);
            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Sintomas() { Id = Id });
            await context.SaveChangesAsync();
            return Ok(existe);
        }
    }
}
