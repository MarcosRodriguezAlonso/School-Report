const students = [
  { name: "Javier", surname: "Roca", age: 25 },
  { name: "Raquel", surname: "Alonso", age: 31 },
];

const studentA = students[0];
const studentB = students[1];

const courses = [
  { name: "Botánica", difficulty: "básico", duration: "20 horas" },
  { name: "Informática", difficulty: "intermedio", duration: "35 horas" },
  { name: "Cocina", difficulty: "avanzado", duration: "50 horas" },
];

const courseA = courses[0];
const courseB = courses[1];
const courseC = courses[2];
const ageAverage = (studentA.age + studentB.age) / 2;

console.log(`
INFORME DE LA ESCUELA

Cursos:
-${courseA.name} (nivel ${courseA.difficulty}, ${courseA.duration})
-${courseB.name} (nivel ${courseB.difficulty}, ${courseB.duration})
-${courseC.name} (nivel ${courseC.difficulty}, ${courseC.duration})

Alumnos:
-${studentA.name} ${studentA.surname}, ${studentA.age} años
-${studentB.name} ${studentB.surname}, ${studentB.age} años

Edad media de los alumnos: ${ageAverage} años
`);
