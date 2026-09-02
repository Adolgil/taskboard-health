document.addEventListener("DOMContentLoaded", () => {
 
  document.querySelector("#anio").textContent = new Date().getFullYear();

 
  function showMessage(text, type = "success") {
    const box = document.querySelector("#messageBox");
    box.innerText = text;
    box.className = type;
    box.style.display = "block";
    setTimeout(() => { box.style.display = "none"; }, 2500);
  }

 
  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const authContainer = document.getElementById("authContainer");
  const mainApp = document.getElementById("mainApp");

  showRegister.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerContainer").style.display = "block";
  });

  showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("registerContainer").style.display = "none";
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.querySelector("#registerUsername").value.trim();
    const email = document.querySelector("#registerEmail").value.trim();
    const password = document.querySelector("#registerPassword").value;
    const terms = document.querySelector("#registerTerms").checked;

    
    if (!username || !email || !password) {
      showMessage("❌ Completa todos los campos antes de registrarte", "error");
      return;
    }

    if (!terms) {
      showMessage("❌ Debes aceptar los términos y condiciones", "error");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.username === username)) {
      showMessage("❌ El usuario ya existe", "error");
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    showMessage("✅ Registro exitoso", "success");
    registerForm.reset();
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("registerContainer").style.display = "none";
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.querySelector("#loginUsername").value.trim();
    const password = document.querySelector("#loginPassword").value;

    
    if (!username || !password) {
      showMessage("❌ Ingresa usuario y contraseña", "error");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      showMessage("✅ Bienvenido/a", "success");
      authContainer.style.display = "none";
      mainApp.style.display = "block";
      document.getElementById("userName").innerText = username;
    } else {
      showMessage("❌ Usuario o contraseña incorrectos", "error");
    }
  });


  const formTarea = document.getElementById("form-nueva-tarea");
  const listaPendiente = document.getElementById("lista-pendiente");
  const listaProgreso = document.getElementById("lista-progreso");
  const listaHecho = document.getElementById("lista-hecho");
  const contadorPendientes = document.getElementById("contador-pendientes");

  function actualizarContador() {
  
    const totalPendientes = listaPendiente.querySelectorAll(".tarjeta").length;
    contadorPendientes.innerText = `${totalPendientes} tareas pendientes`;
  }

  function crearTarjeta(titulo, prioridad) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.setAttribute("data-prioridad", prioridad);

    tarjeta.innerHTML = `
      <p><strong>${titulo}</strong></p>
      <small>Prioridad: ${prioridad}</small>
      <div class="acciones">
        <button class="btn-mover">Avanzar ➔</button>
        <button class="btn-eliminar">🗑️</button>
      </div>
    `;

    
    const btnMover = tarjeta.querySelector(".btn-mover");
    const btnEliminar = tarjeta.querySelector(".btn-eliminar");

    btnMover.addEventListener("click", () => {
      const padreActual = tarjeta.parentElement.id;
      if (padreActual === "lista-pendiente") {
        listaProgreso.appendChild(tarjeta);
      } else if (padreActual === "lista-progreso") {
        listaHecho.appendChild(tarjeta);
        btnMover.style.display = "none";
      }
      actualizarContador();
    });

    btnEliminar.addEventListener("click", () => {
      tarjeta.remove();
      actualizarContador();
    });

    return tarjeta;
  }

  formTarea.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo-tarea").value.trim();
    const prioridad = document.getElementById("prioridad-tarea").value;

    if (!titulo) return;

    const nuevaTarjeta = crearTarjeta(titulo, prioridad);
    listaPendiente.appendChild(nuevaTarjeta);
    actualizarContador();

    formTarea.reset();
  });


  class Training {
    constructor(type, durationStr, dateStr, distance, factor) {
      this.type = type;
      this.durationStr = durationStr;
      this.distance = distance;
      this.factor = factor;
      this.date = new Date(dateStr);
    }

    getDurationInHours() {
      const parts = this.durationStr.split(":");
      const hours = parseInt(parts[0]) || 0;
      const minutes = parseInt(parts[1]) || 0;
      const seconds = parseInt(parts[2]) || 0;
      return hours + minutes / 60 + seconds / 3600;
    }

    getCaloriesBurned(weight) {
      return this.factor * weight * this.getDurationInHours();
    }
  }

  class User {
    constructor(name, age, weight, height) {
      this.name = name;
      this.age = age;
      this.weight = weight;
      this.height = height;
      this.trainings = [];
    }

    addTraining(training) {
      this.trainings.push(training);
    }

    getIMC() {
      return (this.weight / (this.height * this.height)).toFixed(2);
    }

    getTotalHours() {
      return this.trainings.reduce((sum, t) => sum + t.getDurationInHours(), 0).toFixed(2);
    }

    getTotalDistance() {
      return this.trainings.reduce((sum, t) => sum + t.distance, 0).toFixed(2);
    }

    getTotalCalories() {
      return this.trainings.reduce((sum, t) => sum + t.getCaloriesBurned(this.weight), 0).toFixed(2);
    }
  }

  const maria = new User("María", 24, 70, 1.60);
  document.getElementById("imc").innerText = maria.getIMC();

  const tbody = document.getElementById("trainingTable").querySelector("tbody");
  const distanceCtx = document.getElementById("distanceChart").getContext("2d");
  const caloriesCtx = document.getElementById("caloriesChart").getContext("2d");

  const distanceChart = new Chart(distanceCtx, {
    type: "bar",
    data: { labels: [], datasets: [{ label: "Distancia (km)", data: [], backgroundColor: "rgba(54, 162, 235, 0.6)" }] },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
  });

  const caloriesChart = new Chart(caloriesCtx, {
    type: "bar",
    data: { labels: [], datasets: [{ label: "Calorías", data: [], backgroundColor: "rgba(255, 99, 132, 0.6)" }] },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
  });

  function updateHealthDisplay() {
    tbody.innerHTML = "";
    maria.trainings.forEach(t => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${t.type}</td>
        <td>${t.durationStr}</td>
        <td>${t.date.toLocaleDateString()}</td>
        <td>${t.distance}</td>
        <td>${t.getCaloriesBurned(maria.weight).toFixed(2)}</td>
      `;
      tbody.appendChild(tr);
    });

    document.getElementById("totalHours").innerText = maria.getTotalHours();
    document.getElementById("totalDistance").innerText = maria.getTotalDistance();
    document.getElementById("totalCalories").innerText = maria.getTotalCalories();

    const labels = maria.trainings.map(t => `${t.type} (${t.date.toLocaleDateString()})`);
    const distances = maria.trainings.map(t => t.distance);
    const calories = maria.trainings.map(t => t.getCaloriesBurned(maria.weight).toFixed(2));

    distanceChart.data.labels = labels;
    distanceChart.data.datasets[0].data = distances;
    distanceChart.update();

    caloriesChart.data.labels = labels;
    caloriesChart.data.datasets[0].data = calories;
    caloriesChart.update();
  }

  document.querySelector("#trainingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const type = document.querySelector("#type").value;
    const duration = document.querySelector("#duration").value.trim();
    const date = document.querySelector("#date").value;
    const distance = parseFloat(document.querySelector("#distance").value);
    const factor = parseFloat(document.querySelector("#factor").value);

   
    if (!type || !duration || !date || isNaN(distance) || isNaN(factor)) {
      showMessage("❌ Completa todos los campos del entrenamiento", "error");
      return;
    }

    const training = new Training(type, duration, date, distance, factor);
    maria.addTraining(training);

    updateHealthDisplay();
    this.reset();
  });
});
