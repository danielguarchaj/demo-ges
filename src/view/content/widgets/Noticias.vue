<style>
  .symbol-40 {
    width: 40px;
    height: 40px;
  }
</style>

<template>
  <div class="card mb-3">
    <div class="card-header bg-transparent border-1">
      <h3 class="mb-0">
        <i class="py-0 fa fa-bullhorn text-primary"></i>
        Noticias</h3>
    </div>
    <div class="card-body">
      <div class="d-flex flex-row-reverse">
        <button type="button" class="btn btn-primary btn-sm">Agregar una Noticia</button>
      </div>

      <div class="noticias-list">
        <ul class="list-unstyled">
          <b-media tag="li">
            <div class="row m-0">
              <div class="symbol symbol-40">
                <span class="symbol-label text-light font-size-h4 font-weight-bold bg-primary">
                  S
                </span>
              </div>
              <div class="col">
                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p class="mb-0 text-muted font-weight-bold">
                  11 de noviembre 2020
                </p>
              </div>
            </div>
            <p class="mt-2">asdfasdfasdf</p>
          </b-media>
        </ul>
      </div>

      <div class="">
        <b-dropdown id="dropdown-right" right variant="primary" class="">
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <i class="py-0 fa fa-bell"></i>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from "vuex";

  export default {
    name: "noticias",
    components: {
    },
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters(["layoutConfig"])
    },
    mounted() {

    }
  };
</script>