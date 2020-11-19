<style>
    .listenvelope {
        margin-left: 4rem;
    }

    .admin-container {
        margin-left: 5rem;
        max-width: 800px;
    }

    .bold-links a {
        color: #464E5F;
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
</style>

<template>
    <div>
        <b-breadcrumb>
            <b-breadcrumb-item href="#home" class="font-size-h5 text-dark">
                Administración
            </b-breadcrumb-item>
            <b-breadcrumb-item href="#">Mi Portal</b-breadcrumb-item>
            <b-breadcrumb-item href="#">Pruebas Daniel</b-breadcrumb-item>
            <b-breadcrumb-item href="#">Evaluaciones</b-breadcrumb-item>
            <b-breadcrumb-item active>Administración</b-breadcrumb-item>
        </b-breadcrumb>
        <!--begin::Content-->
        <div class="card bold-links">
            <div class="card-body">
                <span class="font-weight-bold">
                    El envio de correo a los profesores/auxiliares cada vez que se modifique una nota está desactivado.
                    <a href="#">Activar</a>
                </span>
                <h1>Tipos de Asignaciones</h1>
                <div class="listenvelope">
                    <ul>
                        <li>
                            <a href="#" class="">Administrar mis Tipos de Asignaciones</a>
                        </li>
                        <li>
                            ¿Permitir que las tareas posean nota mayor al 100%? <a href="#">No</a>
                        </li>
                    </ul>
                </div>
                <h1>Reportes de Notas</h1>
                <div class="listenvelope">
                    <ul>
                        <li>
                            <a href="#" class="">Reportes de Notas</a>
                        </li>
                    </ul>
                </div>
                <h1>Ordenamiento de asignaciones y evaluaciones</h1>
                <div class="listenvelope">
                    <ul>
                        <li>Nombre de la asignación |
                            <a href="#" class="">Fecha de Entrega</a>
                        </li>
                    </ul>
                </div>
                <h1>Asignaciones</h1>
                <b-dropdown id="dropdown-right" right variant="success" class="">
                    <!-- Using 'button-content' slot -->
                    <template slot="button-content">
                        <i class="py-0 fa fa-bell"></i>
                    </template>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                    <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
                <div class="admin-container">
                    <h3>Administración de Tareas</h3>
                    <div class="d-flex flex-row-reverse">
                        <button type="button" class="btn btn-primary btn-sm">
                            Agregar Tarea
                        </button>
                    </div>
                    <div class="mt-3 table-list">
                        <b-table hover :items="itemsTareas" :fields="fieldsTareas" head-variant="light">
                            <!-- A custom formatted column -->
                            <template #cell(nombre)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <a href=# class="">{{ data.value }}</a>
                            </template>
                            <template #cell(fecha_entrega)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                            <template #cell(fecha_disponibilidad)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                            <template #cell(actions)="data">
                                <div class="col d-flex justify-content-around">
                                    <a href="#" class="">Subir Solución</a>
                                    <a href="#">
                                        <i class="py-0 fa fa-user-friends text-muted"></i>
                                    </a>
                                    <a href="#">
                                        <i class="py-0 fa fa-search text-success"></i>
                                    </a>
                                    <a href="#">
                                        <i class="py-0 fa fa-edit text-primary"></i>
                                    </a>
                                    <a href="#">
                                        <i class="py-0 fa fa-times-circle text-danger"></i>
                                    </a>
                                </div>
                            </template>
                        </b-table>
                    </div>
                    <h3>Administración de Proyectos</h3>
                    <div class="d-flex flex-row-reverse">
                        <button type="button" class="btn btn-primary btn-sm">
                            Agregar Proyecto
                        </button>
                    </div>
                    <div class="mt-3 table-list">
                        <b-table hover :items="itemsTareas" :fields="fieldsTareas" head-variant="light">
                            <!-- A custom formatted column -->
                            <template #cell(nombre)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <a href=# class="">{{ data.value }}</a>
                            </template>
                            <template #cell(fecha_entrega)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                            <template #cell(fecha_disponibilidad)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                            <template #cell(actions)="data">
                                <div class="col d-flex justify-content-around">
                                    <a href="#" class="">Subir Solución</a>
                                    <a href="#">
                                        <i class="py-0 fa fa-user-friends text-muted"></i>
                                    </a>
                                    <a href="#">
                                        <i class="py-0 fa fa-search text-success"></i>
                                    </a>
                                    <a href="#">
                                        <i class="py-0 fa fa-edit text-primary"></i>
                                    </a>
                                    <a href="#">
                                        <i class="py-0 fa fa-times-circle text-danger"></i>
                                    </a>
                                </div>
                            </template>
                        </b-table>
                    </div>
                    <h3>Administración de Examen Final</h3>
                    <div class="d-flex flex-row-reverse">
                        <button type="button" class="btn btn-primary btn-sm">
                            Agregar Examen Final
                        </button>
                    </div>
                    <div class="mt-3 table-list">
                        <b-table hover :items="itemsExamenes" :fields="fieldsExamenes" head-variant="light">
                            <!-- A custom formatted column -->
                            <template #cell(nombre)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <a href=# class="">{{ data.value }}</a>
                            </template>
                            <template #cell(fecha_entrega)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                            <template #cell(fecha_disponibilidad)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                        </b-table>
                    </div>
                    <h3>Administración de Exámenes Parciales</h3>
                    <div class="d-flex flex-row-reverse">
                        <button type="button" class="btn btn-primary btn-sm">
                            Agregar Examen Parcial
                        </button>
                    </div>
                    <div class="mt-3 table-list">
                        <b-table hover :items="itemsExamenes" :fields="fieldsExamenes" head-variant="light">
                            <!-- A custom formatted column -->
                            <template #cell(nombre)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <a href=# class="">{{ data.value }}</a>
                            </template>
                            <template #cell(fecha_entrega)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                            <template #cell(fecha_disponibilidad)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                        </b-table>
                    </div>
                </div>


                <h1>Evaluaciones</h1>
                <b-dropdown id="dropdown-right" right variant="success" class="">
                    <!-- Using 'button-content' slot -->
                    <template slot="button-content">
                        <i class="py-0 fa fa-bell"></i>
                    </template>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                    <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
                <div class="admin-container">
                    <h3>Tareas</h3>
                    <div class="d-flex flex-row-reverse">
                        <button type="button" class="btn btn-primary btn-sm">
                            Editar distribución de notas de Tareas
                        </button>
                    </div>
                    <div class="mt-3 table-list">
                        <b-table hover :items="itemsEvaluaciones" :fields="fieldsEvaluaciones" head-variant="light">
                            <!-- A custom formatted column -->
                            <template #cell(nombre)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <a href=# class="">{{ data.value }}</a>
                            </template>
                            <template #cell(ponderacion)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                            <template #cell(actions)="data">
                                <div class="col d-flex justify-content-around">
                                    <a href="#" class="">Historial de Notas</a>
                                </div>
                            </template>
                        </b-table>
                        <div class="table-caption">
                            <p> La ponderación utilizada en Tareas es de: 10.00% (del 100% de Tareas)</p>
                            <p> Tareas representa el 40% del 100% de la clase</p>
                        </div>
                    </div>

                    <h3>Proyectos</h3>
                    <div class="d-flex flex-row-reverse">
                        <button type="button" class="btn btn-primary btn-sm">
                            Editar distribución de notas de Proyectos
                        </button>
                    </div>
                    <div class="mt-3 table-list">
                        <b-table hover :items="itemsEvaluaciones" :fields="fieldsEvaluaciones" head-variant="light">
                            <!-- A custom formatted column -->
                            <template #cell(nombre)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <a href=# class="">{{ data.value }}</a>
                            </template>
                            <template #cell(ponderacion)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                            <template #cell(actions)="data">
                                <div class="col d-flex justify-content-around">
                                    <a href="#" class="">Historial de Notas</a>
                                </div>
                            </template>
                        </b-table>
                        <div class="table-caption">
                            <p>La ponderación utilizada en Proyectos es de: 0.00% (del 100% de Proyectos)</p>
                            <p>Proyectos representa el 20% del 100% de la clase</p>
                        </div>
                    </div>

                    <h3>Examen Final</h3>
                    <div class="d-flex flex-row mt-5">
                        <button type="button" class="btn btn-primary btn-sm">
                            Editar distribución de notas de Examen Final
                        </button>
                    </div>
                    <div class="mt-3 table-list">
                        <b-table hover :items="itemsEvaluaciones" :fields="fieldsEvaluaciones" head-variant="light">
                            <!-- A custom formatted column -->
                            <template #cell(nombre)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <a href=# class="">{{ data.value }}</a>
                            </template>
                            <template #cell(ponderacion)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                            <template #cell(actions)="data">
                                <div class="col d-flex justify-content-around">
                                    <a href="#" class="">Historial de Notas</a>
                                </div>
                            </template>
                        </b-table>
                        <div class="table-caption">
                            <p>La ponderación utilizada en Examen Final es de: 0.00% (del 100% de Examen Final)</p>
                            <p>Examen Final representa el 20% del 100% de la clase</p>
                        </div>
                    </div>

                    <h3>Exámenes Parciales</h3>
                    <div class="d-flex flex-row mt-5">
                        <button type="button" class="btn btn-primary btn-sm">
                            Editar distribución de notas de Exámenes Parciales
                        </button>
                    </div>
                    <div class="mt-3 table-list">
                        <b-table hover :items="itemsEmpty" :fields="fieldsEvaluaciones" head-variant="light" show-empty>
                            <!-- A custom formatted column -->
                            <template #cell(nombre)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <a href=# class="">{{ data.value }}</a>
                            </template>
                            <template #cell(ponderacion)="data">
                                <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
                                <p class="">{{ data.value }}</p>
                            </template>
                            <template #cell(actions)="data">
                                <div class="col d-flex justify-content-around">
                                    <a href="#" class="">Historial de Notas</a>
                                </div>
                            </template>

                            <template #empty="scope">
                                <h6>No hay asignaciones</h6>
                            </template>
                        </b-table>
                        <div class="table-caption">
                            <p>La ponderación utilizada en Exámenes Parciales es de: 0.00% (del 100% de Exámenes
                                Parciales)</p>
                            <p>Exámenes Parciales representa el 20% del 100% de la clase</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <!--end::Content-->
    </div>
</template>

<script>

    export default {
        name: "indiceEvaluaciones",
        components: {
        },
        data() {
            return {
                fieldsTareas: [
                    {
                        key: 'nombre',
                        label: 'NOMBRE',
                        sortable: true
                    },
                    {
                        key: 'fecha_entrega',
                        label: 'FECHA DE ENTREGA',
                        sortable: true
                    },
                    {
                        key: 'fecha_disponibilidad',
                        label: 'FECHA DE DISPONIBILIDAD',
                        sortable: true
                    },
                    {
                        key: 'actions',
                        label: ''
                    }
                ],
                itemsTareas: [
                    { isActive: true, nombre: 'Dickerson', fecha_entrega: '13, Abril 2021 04:20 AM', fecha_disponibilidad: '13, Abril 2021 04:20' },
                ],
                fieldsExamenes: [
                    {
                        key: 'nombre',
                        label: 'NOMBRE',
                        sortable: true
                    },
                    {
                        key: 'fecha_entrega',
                        label: 'FECHA DE ENTREGA',
                        sortable: true
                    },
                    {
                        key: 'fecha_disponibilidad',
                        label: 'FECHA DE DISPONIBILIDAD',
                        sortable: true
                    }
                ],
                itemsExamenes: [
                    { isActive: true, nombre: 'Dickerson', fecha_entrega: '13, Abril 2021 04:20 AM', fecha_disponibilidad: '13, Abril 2021 04:20' },
                ],
                fieldsEvaluaciones: [
                    {
                        key: 'nombre',
                        label: 'NOMBRE',
                        sortable: true
                    },
                    {
                        key: 'ponderacion',
                        label: 'PONDERACIÓN',
                        sortable: true
                    },
                    {
                        key: 'actions',
                        label: ''
                    }
                ],
                itemsEvaluaciones: [
                    { isActive: true, nombre: 'Dickerson', ponderacion: '100%' },
                ],
                itemsEmpty: []
            };
        },
        mounted() {
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