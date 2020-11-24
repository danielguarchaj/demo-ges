<style>
  .row-details {
    padding: 0.75rem;
    background: #f5f5f5;
  }

  .items-container div {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;

    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: row !important;
    flex-direction: row !important;

    -webkit-box-pack: justify !important;
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;

    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;

    margin-bottom: 0.5rem;
  }
</style>

<template>
  <div class="mt-3 table-list">
    <b-table :items="items" :fields="fields" head-variant="light">
      <template #cell(nombre)="row">
        <div>
          <span class="ui-icon-parent ui-accordion-header-icon ui-icon fa"
            :class="row.detailsShowing ? 'fa-caret-down' : 'fa-caret-right'" @click="row.toggleDetails"></span>
          <strong>
            {{ row.item.nombre }}
          </strong>
        </div>
      </template>
      <template #cell(fecha_entrega)="data">
        <div class="d-flex flex-row justify-content-start align-items-center">
          <div>
            <p>{{ data.value }}</p>
          </div>
          <div class="ml-3">
            <a href="#" class="btn btn-secondary btn-sm mr-1">
              <i class="fas fa-download text-muted"></i>
            </a>
            <a href="#" class="btn btn-secondary btn-sm mr-1">
              <i class="fas fa-users text-muted"></i>
            </a>
          </div>
        </div>
      </template>
      <template #cell(valor)="data">
        <strong>{{ data.value.puntos }} pts.</strong>
        <p>{{ data.value.porcentaje }}%</p>
      </template>
      <template #cell(solucion)="data">
        <div class="d-flex flex-row justify-content-start">
          <button type="button" class="btn btn-secondary btn-sm text-dark" v-b-modal.modal-subir-solucion>
            Subir Solución
          </button>
        </div>
      </template>
      <template #cell(evaluacion)="data">
        <div class="d-flex flex-row justify-content-start">
          <button type="button" target="_self" class="badge mr-1 badge-secondary">
            Sin Respuesta
          </button>
        </div>
      </template>
      <template #cell(actions_2)="data">
        <div class="d-flex flex-row justify-content-start">
          <button type="button" class="btn btn-primary btn-sm text-light">
            Evaluar
          </button>
        </div>
      </template>
      <template #cell(actions_3)="data">
        <div class="d-flex flex-row justify-content-center">
          <button class="btn btn-secondary text-dark mr-1">
            <i class="fas fa-pencil-alt" @click="editRecord(data)"></i>
          </button>
          <button class="btn btn-secondary" @click="showConfirmDelete(data)">
            <i class="fas fa-trash-alt text-danger"></i>
          </button>
        </div>
      </template>
      <template #row-details="row">
        <div class="row row-details">
          <div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 items-container">
            <div>
              <p>Número de personas en el grupo:</p>
              <span class="label label-pill label-inline label-white">5</span>
            </div>
            <div>
              <p>¿Será enviada electrónicamente?</p>
              <span class="label label-pill label-inline label-white">Si</span>
            </div>
            <div>
              <p>¿Podrá entregarse tarde?</p>
              <span class="label label-pill label-inline label-white">Sí</span>
            </div>
            <div>
              <p>¿Tendrá nota?</p>
              <span class="label label-pill label-inline label-white">No</span>
            </div>
            <div>
              <p>¿Se usará en foros?</p>
              <span class="label label-pill label-inline label-white">No</span>
            </div>
            <div>
              <button type="button" class="btn btn-primary btn-sm mr-1">
                Historial de notas
              </button>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 items-container">
            <div>
              <p>Sin respuesta</p>
              <span class="label label-pill label-inline label-white">0</span>
            </div>
            <div>
              <p>Sin evaluar</p>
              <span class="label label-pill label-inline label-white">0</span>
            </div>
            <div>
              <p>Evaluados</p>
              <span class="label label-pill label-inline label-white">0</span>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-4">
            <div class="flex-row d-flex align-items-center mb-2">
              <strong class="mr-1">Descripción: </strong>
              <p>Architecto ullam dol</p>
            </div>
          </div>
        </div>
      </template>
      <template #table-caption>
        <div class="row d-flex justify-content-end text-dark">
          <strong>Total = 0 pts</strong>
          <p class="text-muted">(0%)</p>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "table",
    components: {},
    props: ["fields", "items", "tipoAsignacion"],
    data() {
      return {
        tareaNombre: "",
        nuevoItems: []
      };
    },
    computed: {
      ...mapGetters(["layoutConfig"]),
      totalPorcentaje() {
        let totalPuntos = 0;
        for (const item of this.$parent.items) {
          totalPuntos += item.valor.puntos;
        }
        return totalPuntos;
      }
    },
    methods: {
      // totalPuntos: items => {
      //   let totalPuntos = 0;
      //   for (const item of items) {
      //     totalPuntos += item.valor.puntos;
      //   }
      //   return totalPuntos.toFixed(2);
      // },
      // totalPorcentaje: items => {
      //   let totalPorcentaje = 0;
      //   for (const item of items) {
      //     totalPorcentaje += item.valor.porcentaje;
      //   }
      //   return totalPorcentaje.toFixed(2);
      // },
      ...mapActions(["deleteTarea", "deleteProyecto", "deleteFinal", "deleteParcial"]),
      editRecord(data) {
        this.$emit("editRecord", {
          index: data.index,
          listName: this.tipoAsignacion
        });
      },
      showConfirmDelete(item) {
        let messageDialog = "";
        let title = "";
        let okTitleText = "";
        switch (this.tipoAsignacion) {
          case "tareas":
            title = "Tarea";
            okTitleText = "Si, realmente deseo eliminar esta tarea";
            messageDialog = `
              ¿Esta seguro de querer eliminar la tarea "${item.item.nombre}"? 
              (Si usted elimina esta tarea, toda la información asociada a la tarea, como respuestas, soluciones, entre otros, serán eliminados también)
            `;
            break;
          case "proyectos":
            title = "Proyecto";
            okTitleText = "Si, realmente deseo eliminar este proyecto";
            messageDialog = `
              ¿Esta seguro de querer eliminar el proyecto "${item.item.nombre}"? 
              (Si usted elimina este proyecto, toda la información asociada a la proyecto, como respuestas, soluciones, entre otros, serán eliminados también)
            `;
            break;
          case "finales":
            title = "Examen Final";
            okTitleText = "Si, realmente deseo eliminar este examen final";
            messageDialog = `
              ¿Esta seguro de querer eliminar el examen final "${item.item.nombre}"? 
              (Si usted elimina este examen final, toda la información asociada a la examen final, como respuestas, soluciones, entre otros, serán eliminados también)
            `;
            break;
          case "parciales":
            title = "Examen Parcial";
            okTitleText = "Si, realmente deseo eliminar este examen parcial";
            messageDialog = `
              ¿Esta seguro de querer eliminar el examen parcial "${item.item.nombre}"? 
              (Si usted elimina este examen parcial, toda la información asociada a la examen parcial, como respuestas, soluciones, entre otros, serán eliminados también)
            `;
            break;
          default:
            break;
        }
        this.$bvModal
          .msgBoxConfirm(messageDialog, {
            title: `Eliminar ${title}`,
            size: "lg",
            buttonSize: "sm",
            okVariant: "primary",
            cancelVariant: "primary",
            okTitle: okTitleText,
            cancelTitle: "No, quiero cancelar mi solicitud",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true
          })
          .then(confirmed => {
            if (confirmed) {
              switch (this.tipoAsignacion) {
                case 'tareas':
                  this.deleteTarea(item.item.id);
                  break;
                case 'proyectos':
                  this.deleteProyecto(item.item.id);
                  break;
                case 'finales':
                  this.deleteFinal(item.item.id);
                  break;
                case 'parciales':
                  this.deleteParcial(item.item.id);
                  break;
                default:
                  break;
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    mounted() { }
  };
</script>