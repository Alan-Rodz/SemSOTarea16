export interface Investigacion {
  numeroDeTarea: number;
  nombre: string;
  fechaDeEntrega: string;
}
export const investigaciones: Investigacion[] = [
  { numeroDeTarea: 1, nombre: 'Investigación sobre Sistemas Operativos, Procesamiento en Serie y por Lotes', fechaDeEntrega:'30 de Enero de 2022' },
  { numeroDeTarea: 3, nombre: 'Investigación sobre KbHit', fechaDeEntrega:'30 de Enero de 2022' },
  { numeroDeTarea: 5, nombre: 'Investigación sobre Algoritmos de Planificación', fechaDeEntrega:'25 de Febrero de 2022' },
  { numeroDeTarea: 7, nombre: 'Investigación sobre Hilos Posix', fechaDeEntrega:'11 de Marzo de 2022' },
  { numeroDeTarea: 9, nombre: 'Investigación sobre Productores y Consumidores', fechaDeEntrega:'25 de Marzo de 2022' },
  { numeroDeTarea: 11, nombre: 'Investigación sobre Técnicas de Manejo de Memoria', fechaDeEntrega:'8 de Abril de 2022' },
  { numeroDeTarea: 13, nombre: 'Investigación sobre Drivers, SSDs, Seguridad, Criptografía y Esteganografía', fechaDeEntrega:'6 de Mayo de 2022' },
]