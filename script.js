// script.js

// Lista de carreras ofrecidas por la Universidad de Jaén
const careers = [
    'Turismo',
    'Trabajo Social',
    'Matemáticas',
    'Geología',
    'Química' ,
    'Administración y Dirección de Empresas',
    'Derecho',
    'Criminología',
    'Relaciones Laborales y Recursos Humanos',
    'Enfermería',
    'Fisioterapia',
    'Medicina',
    'Psicología',
    'Biología',
    'Ciencias Ambientales',
    'Física',
    'Ingeniería de Telecomunicaciones',
    'Ingeniería Informática',
    'Ingeniería Electrónica Industrial',
    'Historia',
    'Geografía',
    'Filología Inglesa',
    'Traducción e Interpretación',
    'Educación Infantil',
    'Educación Primaria',
    'Educación Especial',
    'Diseño',
    'Historia del Arte',
    'Ciencias de la Actividad Física y del Deporte'
];

/*// Cargar el listado de carreras en la interfaz
const careerList = document.getElementById('career-list');
careers.forEach(career => {
    const li = document.createElement('li');
    li.textContent = career;
    careerList.appendChild(li);
});
*/

// Manejar el formulario para verificar la carrera
const form = document.getElementById('check-form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    const input = document.getElementById('career-input').value.trim();
    if (careers.includes(input)) {
        result.textContent = `La carrera "${input}" pertenece a la Universidad de Jaén.`;
        result.className = 'green'; // Aplica la clase verde
    } else {
        result.textContent = `La carrera "${input}" no pertenece a la Universidad de Jaén.`;
        result.className = 'red'; // Aplica la clase roja
    }

    // Limpiar el campo de entrada
    form.reset();
});














