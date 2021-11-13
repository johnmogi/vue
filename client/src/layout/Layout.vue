<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
                <router-link class="navbar-brand" aria-current="page" to="/">Navbar</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about"
              >About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
<div class="container minHeight">
 <router-view/>
 </div>

 <div class="container text-center">
 footer works {{ new Date().getFullYear()}}
 </div>
</template>

<script>

export default {
  name: 'Layout'
}
</script>

<style>
.minHeight{
min-height: 80vh;
}
</style>