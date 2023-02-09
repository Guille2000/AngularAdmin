using AutoMapper;
using Pacientes.DTOS;
using Pacientes.Entidades;

namespace Pacientes.Utilidades
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Sintomas, SintomasDTO>().ReverseMap();

            CreateMap<SintomasCreacionDTO, Sintomas>();
        }
    }
}
