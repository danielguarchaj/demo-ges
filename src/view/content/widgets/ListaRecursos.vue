<style>
  .table-list td {
    vertical-align: middle;
  }
</style>

<template>
  <div class="card mb-3">
    <div class="card-header bg-transparent border-1">
      <h3 class="mb-0">
        <i class="py-0 fa text-primary" :class="icon"></i>
        {{title}}
      </h3>
    </div>
    <div class="card-body">
      <div class="d-flex flex-row-reverse">
        <button type="button" class="btn btn-primary btn-sm">
          Añadir archivo
        </button>
        <button type="button" class="btn btn-primary btn-sm mr-1">
          Crear un enlace
        </button>
        <button type="button" class="btn btn-primary btn-sm mr-1">
          Nueva Carpeta
        </button>
      </div>
      <div class="mt-3 table-list">
        <b-table hover :items="items" :fields="fields" head-variant="light">
          <!-- A custom formatted column -->
          <template #cell(nombre)="data">
            <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
            <div class="row m-0">
              <div class="symbol symbol-40">
                <span class="symbol-label font-size-h4 font-weight-bold bg-success">
                  <i class="py-0 fa fa-image text-white"></i>
                </span>
              </div>
              <div class="col d-flex flex-column justify-content-center">
                <p class="font-weight-bold m-0">{{ data.value }}</p>
              </div>
            </div>
          </template>
          <template #cell(tamano)="data">
            <div class="col d-flex justify-content-around">
              <p class="font-weight-bold m-0">{{ data.value }}</p>
              <a href="#">
                <i class="py-0 fa fa-cog text-primary"></i>
              </a>
            </div>
          </template>
        </b-table>
      </div>
      <div class="d-flex flex-row">
        <button type="button" class="btn btn-primary btn-sm">Descargar
          <i class="py-0 fa fa-file-archive text-white"></i>
        </button>
      </div>
      <div class="mt-5 d-flex flex-row">
        <div>
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
      <div class="mt-5 d-flex flex-row">
        <div class="font-weight-bold text-dark notification-controls">
          <a href="#">ACTIVAR</a> / <a href="#">DESACTIVAR</a> Notificaciones a todos
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from "vuex";

  export default {
    name: "listaRecursos",
    components: {
    },
    props: ['title', 'icon'],
    data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'nombre',
            label: 'Nombre',
            sortable: true
          },
          {
            key: 'tamano',
            label: 'Tamaño',
            sortable: false
          }
        ],
        items: [
          { isActive: true, nombre: 'Dickerson', tamano: '1378 kb' },
          { isActive: false, nombre: 'Larsen', tamano: '1378 kb' },
          { isActive: false, nombre: 'Geneva', tamano: '1378 kb' },
          { isActive: true, nombre: 'Jami', tamano: '1378 kb' }
        ]
      };
    },
    computed: {
      ...mapGetters(["layoutConfig"])
    },
    mounted() {

    }
  };
</script>