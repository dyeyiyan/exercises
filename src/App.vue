<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a class="logo d-flex align-items-center">
        <img src="./assets/img/ic_launcher.png" alt="">
        <span class="d-none d-lg-block">Exercises</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div><!-- End Logo -->

  </header>
  <!-- End Header -->
  
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">


      <li class="nav-item">
        <a class="nav-link ">
          <i class="bi bi-grid"></i>
            <span><RouterLink to="/">Dashboard</RouterLink></span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link ">
          <i class="bi bi-grid"></i>
            <span><RouterLink to="/tables">Tables</RouterLink></span>
        </a>
      </li>


      <li class="nav-item">
        <a class="nav-link ">
          <i class="bi bi-grid"></i>
            <span><RouterLink to="/php">Php</RouterLink></span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link ">
          <i class="bi bi-grid"></i>
            <span><RouterLink to="/accounts" >Accounts</RouterLink></span>
        </a>
      </li>

    </ul>

  </aside>
  <!-- End Sidebar-->

  <main id="main" class="main">
    <RouterView />
  </main>

  
</template>
