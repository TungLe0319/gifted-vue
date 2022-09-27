<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/cw-logo.png" height="45" />
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <!-- <router-link
            :to="{ name: 'About' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
            About
          </router-link> -->
        </li>

        <li class="ms-4 d-flex align-items-center">
          <h5>Add:</h5>
<button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#formOffCanvas" aria-controls="offcanvasExample">
 <img src="https://media3.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif?cid=ecf05e47nptlufok4vlbpprnobc52s1u2r6vwez0dq17gpm1&rid=giphy.gif&ct=g" alt="" width="80" height="80" class="rounded-circle gift-btn">
</button>

        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>


export default {
  setup() {
    return {};
  },
 
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}


.gift-btn:hover{

transform: scale(1.14);
filter: hue-rotate(180deg);
transition: all 0.5s ease;
}
</style>
