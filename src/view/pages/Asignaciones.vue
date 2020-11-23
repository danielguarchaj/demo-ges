<style>
.listenvelope {
  margin-left: 4rem;
}

.admin-container {
  margin-left: 5rem;
  max-width: 800px;
}

.bold-links a {
  color: #464e5f;
  font-weight: 600;
  font-size: 1.08rem;
}

.bold-links a:hover {
  color: #3699ff;
}

.table-list td {
  vertical-align: middle;
}

.table-list p {
  margin: 0;
}

.table-caption {
  margin-bottom: 2rem;
}

.table-caption p {
  font-weight: 600;
  font-style: italic;
}

.modal-tarea-content {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}

.form-required-mark {
  color: #c30000;
}

.ges-date-metronic select {
  display: inline-block;
  height: calc(1.5em + 1.3rem + 2px);
  padding: 0.65rem 2rem 0.65rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #464e5f;
  vertical-align: middle;
  background: #ffffff;
  border: 1px solid #e5eaee;
  border-radius: 0.42rem;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
}

.btn-primary {
  color: #ffffff;
  background-color: #3699ff !important;
  border-color: #3699ff !important;
}

.actions-container button:hover {
  color: #ffffff;
  background-color: #3699ff !important;
  border-color: #3699ff !important;
}
</style>

<template>
  <div>
    <!-- Modals Section Start -->
    <div>
      <ModalCrearAsignacion
        :model="modeloAsignacion"
        @addedItem="handleAddedItem"
        :selectedModal="selectedModal"
        :action="actionType"
        @cleanModel="handleCleanModel"
      >
      </ModalCrearAsignacion>
      <b-modal
        id="modal-subir-solucion"
        size="xl"
        title="Agregar Tarea Solución A la Tarea"
      >
        <template>
          <p>
            Subir una solución para esta asignación para que los estudiantes
            puedan verla y aprender de ella.
          </p>
          <div class="row justify-content-center">
            <div class="col-xl-9">
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label for="upload_file"> Nombre del archivo: </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9 ges-form-metronic">
                  <div class="custom-file">
                    <div class="upload-box">
                      <input
                        type="file"
                        name="upload_file"
                        id="upload_file"
                        class="custom-file-input form-control form-control-lg"
                        size="30"
                      />
                      <p class="upload_text">
                        <span class="fa fa-cloud-upload upload-icon"></span
                        ><br />Arrastre sus archivos aquí o haga clic en esta
                        área.
                      </p>
                    </div>
                    <label class="custom-file-label" for="upload_file"
                      >Ningún archivo seleccionado</label
                    >
                  </div>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label for="url"> o URL: </label>
                </div>

                <div class="col-lg-9 col-xl-9 col-md-9 ges-form-metronic">
                  <input
                    type="text"
                    name="url"
                    value=""
                    id="url"
                    class="form-control form-control-lg"
                    placeholder="http://"
                  />
                </div>
              </div>
            </div>
            <!-- /form-col-s-center -->
          </div>
        </template>
        <template #modal-footer="{ ok, cancel }">
          <b-button variant="primary" @click="ok()"> Aceptar </b-button>
          <b-button variant="secondary" @click="cancel()"> Cancelar </b-button>
        </template>
      </b-modal>
    </div>

    <!-- Modals Section Ends -->

    <!--begin::Dashboard-->
    <div class="row bold-links">
      <div class="col-12">
        <div class="card mb-3">
          <div class="card-header bg-transparent border-1">
            <h5 class="mb-0">Asignaciones de Curso</h5>
          </div>
          <div class="card-body">
            <div class="d-flex flex-row">
              <button type="button" class="btn btn-primary btn-sm mr-1">
                Reporte de notas
              </button>
              <button type="button" class="btn btn-primary btn-sm mr-1">
                Administrar mis Tipos de Asignaciones
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-sm text-dark mr-1"
              >
                <i class="py-0 fa fa-bell"></i>
              </button>
              <div class="d-flex flex-column justify-content-center">
                <a href="#">[Suscritos]</a>
              </div>
            </div>
            <div>
              <div class="d-flex flex-row mt-5 justify-content-between">
                <div class="d-flex flex-row">
                  <h5 class="mr-1">Tareas</h5>
                  <p>(40.0%)</p>
                </div>
                <div class="actions-container">
                  <button
                    type="button"
                    class="btn btn-light-primary btn-sm mr-1 text-primary text-hover-white"
                    v-b-modal.modal-agregar-tarea
                    @click="selectModal('Tarea', 'tareas', 'Agregar')"
                  >
                    <i class="py-0 fa fa-plus"></i>
                    Agregar
                  </button>
                  <button
                    type="button"
                    class="btn btn-light-primary btn-sm mr-1 text-primary text-hover-white"
                  >
                    <i class="py-0 fa fa-trash-alt text-danger"></i>
                    Eliminar
                  </button>
                  <button
                    type="button"
                    class="btn btn-light-primary text-primary btn-sm"
                  >
                    <i class="py-0 fa fa-bars"></i>
                  </button>
                </div>
              </div>
              <Table
                :fields="fields"
                :items="asignaciones.tareas"
                tipoAsignacion="tareas"
                @deleteItem="handleDeletedItem"
                @editRecord="handleEditRecord"
              ></Table>
            </div>
            <div class="actions-container">
              <div class="d-flex flex-row mt-5 justify-content-between">
                <div class="d-flex flex-row">
                  <h5 class="mr-1">Proyectos</h5>
                  <p>(40.0%)</p>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-light-primary text-primary text-hover-white btn-sm mr-1"
                    v-b-modal.modal-agregar-tarea
                    @click="selectModal('Proyecto', 'proyectos', 'Agregar')"
                  >
                    <i class="py-0 fa fa-plus"></i>
                    Agregar
                  </button>
                  <button
                    type="button"
                    class="btn btn-light-primary text-primary btn-sm mr-1 text-hover-white"
                  >
                    <i class="py-0 fa fa-trash-alt text-danger"></i>
                    Eliminar
                  </button>
                  <button type="button" class="btn btn-light-primary btn-sm">
                    <i class="py-0 fa fa-bars"></i>
                  </button>
                </div>
              </div>
              <Table
                :fields="fields"
                :items="asignaciones.proyectos"
                tipoAsignacion="proyectos"
                @deleteItem="handleDeletedItem"
                @editRecord="handleEditRecord"
              ></Table>
            </div>
            <div>
              <div class="d-flex flex-row mt-5 justify-content-between">
                <div class="d-flex flex-row">
                  <h5 class="mr-1">Examen Final</h5>
                  <p>(40.0%)</p>
                </div>
                <div class="actions-container">
                  <button
                    type="button"
                    class="btn btn-light-primary text-primary text-hover-white btn-sm mr-1"
                    v-b-modal.modal-agregar-tarea
                    @click="selectModal('Examen Final', 'finales', 'Agregar')"
                  >
                    <i class="py-0 fa fa-plus"></i>
                    Agregar
                  </button>
                  <button
                    type="button"
                    class="btn btn-light-primary text-primary btn-sm mr-1 text-hover-white"
                  >
                    <i class="py-0 fa fa-trash-alt text-danger"></i>
                    Eliminar
                  </button>
                  <button type="button" class="btn btn-light-primary btn-sm">
                    <i class="py-0 fa fa-bars"></i>
                  </button>
                </div>
              </div>
              <Table
                :fields="fields"
                :items="asignaciones.finales"
                tipoAsignacion="finales"
                @deleteItem="handleDeletedItem"
                @editRecord="handleEditRecord"
              ></Table>
            </div>
            <div>
              <div class="d-flex flex-row mt-5 justify-content-between">
                <div class="d-flex flex-row">
                  <h5 class="mr-1">Exámenes Parciales</h5>
                  <p>(40.0%)</p>
                </div>
                <div class="actions-container">
                  <button
                    type="button"
                    class="btn btn-light-primary text-primary text-hover-white btn-sm mr-1"
                    v-b-modal.modal-agregar-tarea
                    @click="
                      selectModal('Examen Parcial', 'parciales', 'Agregar')
                    "
                  >
                    <i class="py-0 fa fa-plus"></i>
                    Agregar
                  </button>
                  <button
                    type="button"
                    class="btn btn-light-primary text-primary btn-sm mr-1 text-hover-white"
                  >
                    <i class="py-0 fa fa-trash-alt text-danger"></i>
                    Eliminar
                  </button>
                  <button type="button" class="btn btn-light-primary btn-sm">
                    <i class="py-0 fa fa-bars"></i>
                  </button>
                </div>
              </div>
              <Table
                :fields="fields"
                :items="asignaciones.parciales"
                tipoAsignacion="parciales"
                @deleteItem="handleDeletedItem"
                @editRecord="handleEditRecord"
              ></Table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

import Table from "@/view/content/widgets/Table.vue";
import ModalCrearAsignacion from "@/view/content/widgets/ModalCrearAsignacion.vue";

export default {
  name: "asignaciones",
  components: {
    Table,
    ModalCrearAsignacion
  },
  data() {
    return {
      selectedModal: "",
      actionType: "",
      listName: "",
      modeloAsignacion: {
        nombre: "",
        descripcion: "",
        mes_disponibilidad: "",
        dia_disponibilidad: "",
        mes_entrega: "",
        dia_entrega: "",
        hora_disponibilidad: "",
        minuto_disponibilidad: "",
        segundo_disponibilidad: "",
        valor: {
          puntos: 0,
          porcentaje: 0
        },
        numero_personas: 0,
        envio_electronico: false,
        entrega_retrasada: false,
        tendra_nota: false,
        usara_foros: false,
        asignacion_clases: false
      },
      fields: [
        {
          key: "nombre",
          label: "NOMBRE"
        },
        {
          key: "fecha_entrega",
          label: "FECHA DE ENTREGA"
        },
        {
          key: "actions_1",
          label: ""
        },
        {
          key: "valor",
          label: "VALOR"
        },
        {
          key: "solucion",
          label: "SUBIR SOLUCIÓN"
        },
        {
          key: "evaluacion",
          label: "EVALUACIÓN"
        },
        {
          key: "actions_2",
          label: ""
        },
        {
          key: "actions_3",
          label: ""
        }
      ],
      asignaciones: {
        tareas: [],
        proyectos: [],
        finales: [],
        parciales: []
      }
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  methods: {
    handleAddedItem(data) {
      this.asignaciones[this.listName].push(data.modelo);
    },
    handleDeletedItem(data) {
      this.asignaciones[data.listName].splice(data.index, 1);
    },
    handleEditRecord(data) {
      this.modeloAsignacion = this.asignaciones[data.listName][data.index];
      this.actionType = "Editar";
      this.$bvModal.show("modal-agregar-tarea");
    },
    handleCleanModel() {
      this.modeloAsignacion = {
        nombre: "",
        descripcion: "",
        mes_disponibilidad: "",
        dia_disponibilidad: "",
        mes_entrega: "",
        dia_entrega: "",
        hora_disponibilidad: "",
        minuto_disponibilidad: "",
        segundo_disponibilidad: "",
        valor: {
          puntos: 0,
          porcentaje: 0
        },
        numero_personas: 0,
        envio_electronico: false,
        entrega_retrasada: false,
        tendra_nota: false,
        usara_foros: false,
        asignacion_clases: false
      };
    },
    selectModal(selected, listName, action) {
      this.actionType = action;
      this.listName = listName;
      this.selectedModal = selected;
    },
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
