
<template>
  <section class="dashboard">
    <div class="dashboard-hero">
      <div>
        <span class="badge">Panel principal</span>
        <h1>Bienvenido</h1>
        <p>
          Desde este espacio puedes consultar los módulos
          disponibles de la aplicación.
        </p>
      </div>

      <div class="hero-icon">🚀</div>
    </div>

    <div class="dashboard-grid">
      <article class="dashboard-card card-blue">
        <span class="card-icon">🧩</span>
        <h2>Servicios</h2>
        <p>Consulta los servicios disponibles mediante la API.</p>
      </article>

      <article class="dashboard-card card-green">
        <span class="card-icon">👤</span>
        <h2>Usuario</h2>
        <p>Información del usuario autenticado.</p>
      </article>

      <article class="dashboard-card card-orange">
        <span class="card-icon">🔐</span>
        <h2>Sesión</h2>
        <p>Acceso mediante el backend PHP.</p>
      </article>
    </div>
  </section>
</template>
