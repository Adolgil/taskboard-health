TaskBoard & Health Dashboard

Sitio web interactivo de una sola página que integra un tablero de tareas estilo Kanban con un módulo de seguimiento de entrenamientos y salud. 
Proyecto individual desarrollado para el parcial de la asignatura Tecnologías Web.

Sitio publicado: https://adolgil.github.io/taskboard-health/

Breve descripción del proyecto:

El proyecto integra dos módulos principales dentro de una misma página:

Tablero de tareas (Kanban): permite crear tareas con diferentes niveles de prioridad y moverlas entre tres estados: Por hacer, En progreso y Hecho.
Seguimiento de entrenamientos y salud: permite registrar entrenamientos indicando el tipo, duración, distancia y fecha.
A partir de estos datos, calcula las calorías quemadas, el IMC y diferentes totales acumulados, presentando la información mediante tablas y gráficas.

El sitio también cuenta con un sistema básico de registro e inicio de sesión, utilizando localStorage para conservar la información del usuario y sus datos.

Funcionalidades principales:
-Registro e inicio de sesión de usuarios con validación de campos.
-Creación dinámica de tarjetas de tareas mediante createElement() y appendChild().
-Clasificación visual de las tareas según su nivel de prioridad.
-Movimiento de tareas entre las columnas del tablero.
-Eliminación individual de tareas.
-Registro de entrenamientos con cálculo automático de calorías quemadas según el peso, duración y factor de intensidad.
-Generación de gráficas de distancia y calorías por entrenamiento mediante Chart.js.
-Cálculo automático del IMC, horas totales de entrenamiento, distancia total y calorías acumuladas.
-Validación de formularios mediante atributos HTML como required y pattern, además de validaciones mediante JavaScript.
-Diseño responsivo para adaptar el tablero, las gráficas y las tablas a diferentes tamaños de pantalla.

Tecnologías utilizadas
-HTML5: estructura semántica mediante elementos como header, nav, main, section, article y footer.
-CSS3: variables mediante :root, Flexbox y @media queries para el diseño responsivo.
-JavaScript: desarrollado con JavaScript vanilla, sin frameworks, utilizando manipulación del DOM, clases, eventos y almacenamiento mediante localStorage.
-Chart.js: utilizado para generar las gráficas de distancia y calorías.

Estructura del proyecto

/taskboard-health/
├── index.html      # Estructura semántica del sitio
├── styles.css      # Estilos, variables y diseño responsivo
├── script.js       # Lógica de autenticación, tareas y salud
├── img/            # Imágenes del proyecto
└── README.md       # Documentación del proyecto

Cómo ejecutarlo en local:
Pues el proyecto no requiere instalación de dependencias.
Para ejecutarlo localmente simplemente se clona en el repositorio:

git clone https://github.com/Adolgil/taskboard-health.git

Ingresar a la carpeta del proyecto:
cd taskboard-health
luego tu tienes que abrir el archivo index.html directamente en un navegador web.
También es posible acceder a la versión publicada mediante GitHub Pages:

https://adolgil.github.io/taskboard-health/

Modelo de datos
El módulo de seguimiento de entrenamientos utiliza dos clases principales de JavaScript:

-User: representa al usuario y almacena información como nombre, edad, peso, estatura y lista de entrenamientos.
También permite calcular el IMC y los totales acumulados.

-Training: representa un entrenamiento individual y contiene datos como tipo, duración, fecha, distancia y factor de intensidad.
A partir de estos datos y del peso del usuario se calcula la cantidad estimada de calorías quemadas.

-Las instancias de estas clases conforman el modelo de datos utilizado por la aplicación. La información se recorre mediante métodos de JavaScript
como forEach() para generar dinámicamente la tabla de entrenamientos y actualizar las gráficas.

## Autor
**Adolfo Luis Gil Jiménez**
Proyecto individual — Parcial de Tecnologías Web
