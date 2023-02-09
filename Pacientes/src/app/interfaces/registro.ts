export interface Registro{
    Email:string;
    password:string;
}

export interface Login{
    token:string;
}

export interface Paciente{
    id?:number;
    nombre:string;
    email:string
    nombrePropietario:string;
    FechaAlta:Date,
    sintoma:string;
}