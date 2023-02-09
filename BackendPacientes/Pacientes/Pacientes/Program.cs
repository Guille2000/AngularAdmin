using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Pacientes;
using System.Text;
using AutoMapper;
using Pacientes.Utilidades;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddAutoMapper(typeof(AutoMapperProfile));
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDBContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDBContext>()
    .AddDefaultTokenProviders();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opciones => opciones.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey= true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ARK4LMDPREEFFDFFDEERQXZER456LLKDKFV")),
        ClockSkew = TimeSpan.Zero
    });
builder.Services.AddCors(options =>
{
    options.AddPolicy("NuevaPolitica", app =>
    {
        app.AllowAnyHeader();
        app.AllowAnyMethod();
        app.AllowAnyOrigin();
    });
});


var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();


app.UseCors("NuevaPolitica");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
