<style>
.table-list td {
  vertical-align: middle;
}
</style>

<template>
  <div class="card mb-3">
    <div class="card-header bg-transparent border-1">
      <h3 class="mb-0">
        <i class="py-0 fa fa-user text-primary"></i>
        Cuestionarios
      </h3>
    </div>
    <div class="card-body">
      <div class="mt-3 table-list">
        <b-table hover :items="items" :fields="fields" head-variant="light">
          <!-- A custom formatted column -->
          <template #cell(titulo)="data">
            <a href="#" class="font-weight-bold m-0">{{ data.value }}</a>
          </template>
          <template #cell(intentos)="data">
            <a href="#" class="font-weight-bold m-0"
              >Intentos {{ data.value }}</a
            >
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "listaRecursos",
  components: {},
  props: ["title", "icon"],
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: "titulo",
          label: "Título",
          sortable: true
        },
        {
          key: "intentos",
          label: "Intentos",
          sortable: true
        }
      ],
      items: [
        { isActive: true, titulo: "Dickerson", intentos: "13" },
        { isActive: false, titulo: "Larsen", intentos: "1" },
        { isActive: false, titulo: "Geneva", intentos: "7" },
        { isActive: true, titulo: "Jami", intentos: "8" }
      ]
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  mounted() {}
};
</script>
