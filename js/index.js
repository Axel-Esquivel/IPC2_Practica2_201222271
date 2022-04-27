lenguajes = [
    { nombre: 'C Sharp', imagen: 'c-sharp.svg', nivel: 95 },
    { nombre: 'Java', imagen: 'java.svg', nivel: 80 },
    { nombre: 'HTML 5', imagen: 'html-5.svg', nivel: 80 },
    { nombre: 'CSS 3', imagen: 'css-3.svg', nivel: 60 },
    { nombre: 'Bootstrap', imagen: 'bootstrap.svg', nivel: 80 },
    { nombre: 'JavaScript', imagen: 'javascript.svg', nivel: 90 },
    { nombre: 'NodeJS', imagen: 'nodejs.svg', nivel: 80 },
    { nombre: 'TypeScript', imagen: 'typescript.svg', nivel: 90 },
    { nombre: 'Angular', imagen: 'angular.svg', nivel: 90 },
    { nombre: 'Ionic', imagen: 'ionic.svg', nivel: 90 },
    { nombre: 'NestJS', imagen: 'nestjs.svg', nivel: 80 },
    { nombre: 'Python', imagen: 'python.svg', nivel: 70 },
    { nombre: 'DJango', imagen: 'django.svg', nivel: 50 },
    { nombre: 'Flask', imagen: 'flask.svg', nivel: 70 },
    { nombre: 'Docker', imagen: 'docker.svg', nivel: 60 },
    { nombre: 'Git', imagen: 'git.svg', nivel: 80 },
    { nombre: 'GitHub', imagen: 'github.svg', nivel: 70 },
    { nombre: 'SQL Server', imagen: 'sql-server.svg', nivel: 70 },
    { nombre: 'MySQL', imagen: 'mysql.svg', nivel: 70 },
    { nombre: 'MongoDB', imagen: 'mongodb.svg', nivel: 60 },
    { nombre: 'Windows Server', imagen: 'windows-10.svg', nivel: 60 },
    { nombre: 'Excel', imagen: 'excel.svg', nivel: 100 },
    { nombre: 'VBA', imagen: 'vba.svg', nivel: 100 },
    { nombre: 'Word', imagen: 'word.svg', nivel: 100 },
    { nombre: 'PowerPoint', imagen: 'power-point.svg', nivel: 100 },
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

        progreso = document.createElement('div');
        progreso.classList.add('progress');
        progreso.innerHTML =  `<div class="progress-bar" role="progressbar" style="width: ${ lenguaje[1].nivel }%" aria-valuenow="${ lenguaje[1].nivel }" aria-valuemin="0" aria-valuemax="100">${ lenguaje[1].nivel }%</div>`;

        logo.appendChild(nombre);
        logo.appendChild(imagen);
        logo.appendChild(progreso)

        logos.appendChild(logo);
    });
}

inicio()