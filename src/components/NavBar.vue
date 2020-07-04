<template>
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img
        src="../assets/logo.jpg"
        width="60"
        height="60"
        class="d-inline-block align-top"
        alt=""
        loading="lazy"
      />
      Broller
    </a>
    <div class="col-12-mobile">
      <button
        type="button"
        class="btn btn-outline-primary col-sm-12"
        style="height: 50px; font-size: 20px"
      >
        Выход
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-brand {
  font-family: "Roboto", sans-serif;
  font-size: 50px;
}

@media (max-width: 575px) {
  .col-12-mobile {
    width: 100%;
  }
}
</style>
