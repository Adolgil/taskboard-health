# TaskBoard & Health Dashboard

Sitio web interactivo de una sola página que integra un tablero de tareas estilo **Kanban** con un módulo de seguimiento de entrenamientos y salud, además de una sección para compartir experiencias y opiniones sobre la plataforma.

**Proyecto individual desarrollado para el parcial de la asignatura Tecnologías Web.**

**Sitio publicado:** https://adolgil.github.io/taskboard-health/

## Descripción del proyecto

El proyecto integra tres módulos principales dentro de una misma página web:

### Tablero de tareas (Kanban)

Permite crear tareas indicando diferentes niveles de prioridad y organizarlas en tres estados:

* **Por hacer**
* **En progreso**
* **Hecho**

Las tareas pueden avanzar entre los diferentes estados o eliminarse individualmente. Además, el sistema muestra un contador con la cantidad de tareas pendientes.

### Seguimiento de entrenamientos y salud

Permite registrar entrenamientos indicando:

* Tipo de entrenamiento.
* Duración.
* Fecha.
* Distancia recorrida.
* Factor de intensidad.

A partir de estos datos, la aplicación calcula las **calorías quemadas**, el **IMC**, las **horas totales de entrenamiento**, la **distancia total recorrida** y las **calorías totales acumuladas**.

La información de los entrenamientos registrados se presenta mediante una tabla dinámica.

### Comentarios y experiencias

La aplicación cuenta con una sección donde los usuarios pueden compartir su experiencia y sugerencias sobre la plataforma.

Permite:

* Registrar el nombre del usuario.
* Escribir una opinión o sugerencia.
* Publicar el comentario dinámicamente.
* Eliminar comentarios individualmente.

Los comentarios se generan y muestran directamente en la interfaz mediante JavaScript.

## Funcionalidades principales

* Creación dinámica de tarjetas de tareas mediante `createElement()` y `appendChild()`.
* Clasificación visual de las tareas según su nivel de prioridad.
* Movimiento de tareas entre las columnas **Por hacer**, **En progreso** y **Hecho**.
* Eliminación individual de tareas.
* Contador de tareas pendientes.
* Registro de entrenamientos.
* Cálculo estimado de calorías quemadas según el peso, duración y factor de intensidad.
* Cálculo automático del IMC.
* Cálculo de horas totales de entrenamiento.
* Cálculo de distancia total recorrida.
* Cálculo de calorías totales quemadas.
* Presentación dinámica del historial de entrenamientos mediante una tabla.
* Registro dinámico de comentarios y opiniones.
* Eliminación individual de comentarios.
* Validación de formularios mediante atributos HTML como `required`, `min`, `minlength` y `pattern`.
* Validaciones adicionales mediante JavaScript.
* Diseño responsivo para adaptar la aplicación a diferentes tamaños de pantalla.

## Tecnologías utilizadas

### HTML5

Utilizado para construir la estructura semántica de la aplicación mediante elementos como:

* `header`
* `nav`
* `main`
* `section`
* `article`
* `footer`
* Formularios.
* Tablas.
* Elementos para mostrar tareas, entrenamientos y comentarios.

### CSS3

Utilizado para el diseño visual y responsivo de la aplicación mediante:

* Variables CSS con `:root`.
* Flexbox.
* Media queries con `@media`.
* Diseño adaptable para dispositivos móviles.
* Estilos para formularios, tarjetas, tablas y diferentes secciones de la aplicación.
* Estilos diferenciados para las prioridades de las tareas.
* Estilos para los mensajes de éxito y error.
* Estilos para la sección de comentarios.

### JavaScript

Desarrollado con **JavaScript Vanilla**, sin utilizar frameworks.

Se utiliza para:

* Manipulación del DOM.
* Creación dinámica de elementos.
* Manejo de eventos.
* Validación de formularios.
* Movimiento y eliminación de tareas.
* Registro de entrenamientos.
* Cálculo del IMC.
* Cálculo de calorías.
* Actualización de totales.
* Generación dinámica de la tabla de entrenamientos.
* Creación y eliminación de comentarios.
* Mostrar mensajes de éxito y error.
* Uso de clases y métodos para representar el modelo de datos.

## Estructura del proyecto

```text
/taskboard-health/
├── index.html      # Estructura semántica del sitio
├── styles.css      # Estilos y diseño responsivo
├── script.js       # Lógica de tareas, salud y comentarios
├── img/            # Imágenes utilizadas en el proyecto
└── README.md       # Documentación del proyecto
```

## Cómo ejecutar el proyecto en local

El proyecto no requiere instalación de dependencias adicionales.

### 1. Clonar el repositorio

```bash
git clone https://github.com/Adolgil/taskboard-health.git
```

### 2. Ingresar a la carpeta del proyecto

```bash
cd taskboard-health
```

### 3. Ejecutar el proyecto

Abrir el archivo `index.html` directamente en un navegador web.

También es posible acceder a la versión publicada mediante GitHub Pages:

https://adolgil.github.io/taskboard-health/

## Modelo de datos

El módulo de seguimiento de entrenamientos utiliza dos clases principales de JavaScript:

### User

La clase `User` representa al usuario de la aplicación y almacena información como:

* Nombre.
* Edad.
* Peso.
* Estatura.
* Lista de entrenamientos.

Además, contiene métodos para calcular el IMC y los diferentes totales acumulados de los entrenamientos.

### Training

La clase `Training` representa un entrenamiento individual y contiene información como:

* Tipo de entrenamiento.
* Duración.
* Fecha.
* Distancia.
* Factor de intensidad.

A partir de estos datos y del peso del usuario se calcula una estimación de las calorías quemadas.

Las instancias de estas clases conforman el modelo de datos utilizado por la aplicación. La información de los entrenamientos se recorre mediante métodos de JavaScript como `forEach()` para generar dinámicamente las filas de la tabla y actualizar los totales mostrados en la interfaz.

## Manejo de comentarios

La sección de comentarios utiliza JavaScript para crear dinámicamente los elementos HTML correspondientes a cada opinión.

Cuando el usuario envía el formulario, se capturan el nombre y el texto de la opinión. Posteriormente, se crea un nuevo elemento con la clase `comentario`, se agrega a la lista de experiencias y se incorpora un botón que permite eliminarlo.

Los comentarios se mantienen únicamente durante la sesión actual de la página, ya que no se utiliza una base de datos ni almacenamiento permanente para esta sección.

## Almacenamiento de datos

La versión actual del proyecto funciona directamente en el navegador y maneja los datos mediante estructuras de JavaScript.

Los entrenamientos y comentarios no cuentan con persistencia permanente, por lo que la información se pierde al recargar la página.

## Autor

**Adolfo Luis Gil Jiménez**

Proyecto individual — Parcial de Tecnologías Web

