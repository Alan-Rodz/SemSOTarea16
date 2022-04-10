export interface Investigacion {
  numeroDeTarea: number;
  link: string;
  nombre: string;
  fechaDeEntrega: string;
  reseña: string;
}
export const investigaciones: Investigacion[] = [
  { numeroDeTarea: 1, 
    link: 'https://semsotarea16.s3.amazonaws.com/RodriguezAlanD01Act1.pdf', 
    nombre: 'Investigación sobre Sistemas Operativos, Procesamiento en Serie y por Lotes', 
    fechaDeEntrega:'30 de Enero de 2022',
    reseña: 'Esta actividad consitió en una investigación sobre el procesamiento en serie y en lotes, así como proveer un ejemplo sobre un archivo con lotes con varias instrucciones, además de buscar bibliografía sobre sistemas operativos que fue usda a lo largo del curso.'
  },
  { numeroDeTarea: 3, 
    link: 'https://semsotarea16.s3.amazonaws.com/RodriguezAlanD01Act3.pdf', 
    nombre: 'Investigación sobre KbHit', 
    fechaDeEntrega:'30 de Enero de 2022',
    reseña: 'Esta actividad consitió en buscar la definición de algunos conceptos, investigar sobre multiprogramación, e investigar sobre equivalentes a KbHit en varios lenguajes de programación.'
  },
  { numeroDeTarea: 5, 
    link: 'https://semsotarea16.s3.amazonaws.com/RodriguezAlanD01Act5.pdf', 
    nombre: 'Investigación sobre Algoritmos de Planificación', 
    fechaDeEntrega:'25 de Febrero de 2022',
    reseña: 'Esta actividad consistió en buscar información sobre algoritmos y políticas de planificación, así como algoritmos apropiativos y no apropiativos, y el BCP.'
  },
  { numeroDeTarea: 7, 
    link: 'https://semsotarea16.s3.amazonaws.com/RodriguezAlanD01Act7.pdf', 
    nombre: 'Investigación sobre Hilos Posix', 
    fechaDeEntrega:'11 de Marzo de 2022',
    reseña: 'En esta tarea se investigó más a fondo sobre los algoritmos de planificación apropiativos y no apropiativos, así como los hilos POSIX.',
  },
  { numeroDeTarea: 9, 
    link: 'https://semsotarea16.s3.amazonaws.com/RodriguezAlanD01Act9.pdf', 
    nombre: 'Investigación sobre Productores y Consumidores', 
    fechaDeEntrega:'25 de Marzo de 2022',
    reseña: 'Esta actividad consistió en investigar sobre temas relacionados con la concurrencia.',
  },
  { numeroDeTarea: 11, 
    link: 'https://semsotarea16.s3.amazonaws.com/RodriguezAlanD01Act11.pdf', 
    nombre: 'Investigación sobre Técnicas de Manejo de Memoria', 
    fechaDeEntrega:'8 de Abril de 2022',
    reseña: 'Esta actividad consistió en investigar sobre técnicas para el manejo de memoria, y las maneras en las que diversos sistemas operativos hacen uso de las mismas.',
  },
  { numeroDeTarea: 13, 
    link: 'https://semsotarea16.s3.amazonaws.com/RodriguezAlanD01Act13.pdf', 
    nombre: 'Investigación sobre Drivers, SSDs, Seguridad, Criptografía y Esteganografía', 
    fechaDeEntrega:'6 de Mayo de 2022',
    reseña: 'En esta actividad se abordan temas como controladores, SSDs, seguridad y ciberseguridad en general, criptografía y esteganografía.',
  },
]