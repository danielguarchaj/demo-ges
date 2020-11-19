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
                        :class="row.detailsShowing ? 'fa-caret-down' : 'fa-caret-right'"
                        @click="row.toggleDetails"></span>
                    <strong>
                        {{row.item.nombre}}
                    </strong>
                </div>
            </template>
            <template #cell(fecha_entrega)="data">
                <div class="d-flex flex-row justify-content-around align-items-center">
                    <p> {{data.value}} </p>
                    <a href="#" class="btn btn-secondary btn-sm text-dark">
                        <i class="fas fa-download"></i>
                    </a>
                    <a href="#" class="btn btn-secondary btn-sm text-dark">
                        <i class="fas fa-users"></i>
                    </a>
                </div>
            </template>
            <template #cell(solucion)="data">
                <div class="d-flex flex-row justify-content-around">
                    <a href="#" class="btn btn-secondary btn-sm text-dark" v-b-modal.modal-subir-solucion>
                        Subir Solución
                    </a>
                </div>
            </template>
            <template #cell(evaluacion)="data">
                <div class="d-flex flex-row justify-content-around">
                    <a href="#" target="_self" class="badge mr-1 badge-secondary">
                        Sin Respuesta
                    </a>
                </div>
            </template>
            <template #cell(actions_2)="data">
                <div class="d-flex flex-row justify-content-around">
                    <a href="#" class="btn btn-primary btn-sm text-light">
                        Evaluar
                    </a>
                </div>
            </template>
            <template #cell(actions_3)="data">
                <div class="d-flex flex-row justify-content-around">
                    <a href="#" class="btn btn-secondary text-dark">
                        <i class="fas fa-pencil-alt"></i>
                    </a>
                    <a href="#" class="btn btn-secondary" @click="showConfirmDelete">
                        <i class="fas fa-trash-alt text-danger"></i>
                    </a>
                </div>
            </template>
            <template #row-details="row">
                <div class="row row-details">
                    <div class="col-12 col-sm-4 col-md-4  col-lg-3 col-xl-2 items-container">
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
                    <div class="col-12 col-sm-4 col-md-4  col-lg-3 col-xl-4">
                        <div class="flex-row d-flex align-items-center mb-2">
                            <strong class="mr-1">Descripción: </strong>
                            <p>Architecto ullam dol</p>
                        </div>
                    </div>
                </div>
            </template>
        </b-table>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: "table",
        components: {},
        props: ["fields", "items"],
        data() {
            return {
                tareaNombre: ''
            };
        },
        computed: {
            ...mapGetters(["layoutConfig"]),
        },
        methods: {
            showConfirmDelete() {
                this.boxTwo = ''
                this.$bvModal.msgBoxConfirm(
                    `
                        ¿Esta seguro de querer eliminar la tarea "Arsenio Dennis"? 
                        (Si usted elimina esta tarea, toda la información asociada a la tarea, como respuestas, soluciones, entre otros, serán eliminados también)
                    `,
                    {
                        title: 'Eliminar Tarea',
                        size: 'lg',
                        buttonSize: 'sm',
                        okVariant: 'primary',
                        cancelVariant: 'primary',
                        okTitle: 'Si, realmente deseo eliminar esta tarea',
                        cancelTitle: 'No, quiero cancelar mi solicitud',
                        footerClass: 'p-2',
                        hideHeaderClose: false,
                        centered: true
                    })
                    .then(value => {
                        console.log(value);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
        },
        mounted() { },
    };
</script>