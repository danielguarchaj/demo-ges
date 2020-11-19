<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row">
      <div class="col-md-6">
        <ResumenAsignaciones></ResumenAsignaciones>
        <Noticias></Noticias>
      </div>
      <div class="col-md-6">
        <ListaRecursos
          title="Apuntes de clase"
          icon="fa-folder"
        ></ListaRecursos>
        <ListaRecursos
          title="Material de Apoyo"
          icon="fa-folder"
        ></ListaRecursos>
        <Cuestionarios></Cuestionarios>
      </div>
    </div>

    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

import ResumenAsignaciones from "@/view/content/widgets/ResumenAsignaciones.vue";
import Noticias from "@/view/content/widgets/Noticias.vue";
import ListaRecursos from "@/view/content/widgets/ListaRecursos.vue";
import Cuestionarios from "@/view/content/widgets/Cuestionarios.vue";

export default {
  name: "materialClase",
  components: {
    ResumenAsignaciones,
    Noticias,
    ListaRecursos,
    Cuestionarios
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  methods: {
    setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      return parseInt(event.target.getAttribute("data-tab"));
    }
  }
};
</script>
