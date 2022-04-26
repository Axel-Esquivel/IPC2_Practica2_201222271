lenguajes = [
    { nombre: 'C Sharp', imagen: 'c-sharp.svg', nivel: 'Avanzado' },
    { nombre: 'Java', imagen: 'java.svg', nivel: 'Avanzado' },
    { nombre: 'HTML 5', imagen: 'html-5.svg', nivel: 'Avanzado' },
    { nombre: 'CSS 3', imagen: 'css-3.svg', nivel: 'Intermedio' },
    { nombre: 'Bootstrap', imagen: 'bootstrap.svg', nivel: 'Intermedio' },
    { nombre: 'JavaScript', imagen: 'javascript.svg', nivel: 'Avanzado' },
    { nombre: 'NodeJS', imagen: 'nodejs.svg', nivel: 'Avanzado' },
    { nombre: 'TypeScript', imagen: 'typescript.svg', nivel: 'Avanzado' },
    { nombre: 'Angular', imagen: 'angular.svg', nivel: 'Avanzado' },
    { nombre: 'Ionic', imagen: 'ionic.svg', nivel: 'Avanzado' },
    { nombre: 'NestJS', imagen: 'nestjs.svg', nivel: 'Intermedio' },
    { nombre: 'Python', imagen: 'python.svg', nivel: 'Avanzado' },
    { nombre: 'DJango', imagen: 'django.svg', nivel: 'Básico' },
    { nombre: 'Flask', imagen: 'flask.svg', nivel: 'Intermedio' },
    { nombre: 'Docker', imagen: 'docker.svg', nivel: 'Intermedio' },
    { nombre: 'Git', imagen: 'git.svg', nivel: 'Intermedio' },
    { nombre: 'GitHub', imagen: 'github.svg', nivel: 'Intermedio' },
    { nombre: 'SQL Server', imagen: 'sql-server.svg', nivel: 'Intermedio' },
    { nombre: 'MySQL', imagen: 'mysql.svg', nivel: 'Intermedio' },
    { nombre: 'MongoDB', imagen: 'mongodb.svg', nivel: 'Intermedio' },
    { nombre: 'Windows Server', imagen: 'windows-10.svg', nivel: 'Intermedio' },
    { nombre: 'Excel', imagen: 'excel.svg', nivel: 'Avanzado' },
    { nombre: 'Word', imagen: 'word.svg', nivel: 'Avanzado' },
    { nombre: 'PowerPoint', imagen: 'power-point.svg', nivel: 'Avanzado' },
]

function inicio() {
    logos = document.getElementById('logos');

    Object.entries(lenguajes).forEach(lenguaje => {
        logo = document.createElement('div');
        logo.classList.add('logo');

        nombre = document.createElement('span');
        nombre.innerText = lenguaje[1].nombre;

        imagen = document.createElement('img');
        imagen.src = `media/logos/${ lenguaje[1].imagen }`;

        nivel = document.createElement('div');
        nivel.classList.add('estrellas');
        nivel.innerHTML = `<strong>Nivel: </strong> ${ lenguaje[1].nivel }`;

        logo.appendChild(nombre);
        logo.appendChild(imagen);
        logo.appendChild(nivel)

        logos.appendChild(logo);
    });
}

inicio()