# TaskBoard & Health Dashboard

Sitio web interactivo de una sola página que integra un tablero de tareas estilo **Kanban** con un módulo de seguimiento de entrenamientos y salud.

**Proyecto individual desarrollado para el parcial de la asignatura Tecnologías Web.**

**Sitio publicado:** https://adolgil.github.io/taskboard-health/

## Descripción del proyecto

El proyecto integra dos módulos principales dentro de una misma página web:

### Tablero de tareas (Kanban)

Permite crear tareas indicando diferentes niveles de prioridad y organizarlas en tres estados:

* **Por hacer**
* **En progreso**
* **Hecho**

Las tareas pueden avanzar entre los diferentes estados o eliminarse individualmente.

### Seguimiento de entrenamientos y salud

Permite registrar entrenamientos indicando:

* Tipo de entrenamiento.
* Duración.
* Fecha.
* Distancia recorrida.
* Factor de intensidad.

A partir de estos datos, la aplicación calcula las **calorías quemadas**, el **IMC**, las **horas totales de entrenamiento**, la **distancia total recorrida** y las **calorías totales acumuladas**.

La información de los entrenamientos registrados se presenta mediante una tabla dinámica.

## Funcionalidades principales

* Creación dinámica de tarjetas de tareas mediante `createElement()` y `appendChild()`.
* Clasificación visual de las tareas según su nivel de prioridad.
* Movimiento de tareas entre las columnas **Por hacer**, **En progreso** y **Hecho**.
* Eliminación individual de tareas.
* Registro de entrenamientos.
* Cálculo estimado de calorías quemadas según el peso, duración y factor de intensidad.
* Cálculo automático del IMC.
* Cálculo de horas totales de entrenamiento.
* Cálculo de distancia total recorrida.
* Cálculo de calorías totales quemadas.
* Presentación dinámica del historial de entrenamientos mediante una tabla.
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
* Formularios y tablas HTML.

### CSS3

Utilizado para el diseño visual y responsivo de la aplicación mediante:

* Variables CSS con `:root`.
* Flexbox.
* Media queries con `@media`.
* Diseño adaptable para dispositivos móviles.
* Estilos para formularios, tarjetas, tablas y diferentes secciones de la aplicación.

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
* Uso de clases y métodos para representar el modelo de datos.

## Estructura del proyecto

```text
/taskboard-health/
├── index.html      # Estructura semántica del sitio
├── styles.css      # Estilos y diseño responsivo
├── script.js       # Lógica de tareas y seguimiento de salud
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

## Autor

**Adolfo Luis Gil Jiménez**

Proyecto individual — Parcial de Tecnologías Web
