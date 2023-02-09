using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Pacientes.Migrations
{
    /// <inheritdoc />
    public partial class Sintomas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sintomas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NombrePropietario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FechaAlta = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Sintoma = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sintomas", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sintomas");
        }
    }
}
