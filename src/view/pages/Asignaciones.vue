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
      <b-modal id="modal-agregar-tarea" size="xl" @ok="handleOk">
        <template #modal-header="{ close }">
          <h5>{{ actionType }} {{ selectedModal }}</h5>
        </template>
        <template>
          <div class="d-flex justify-content-end">
            <p class="text-right">
              Si desea agregar asignaciones en varias clases o secciones
              seleccione la opción que se encuentra
              <br />
              en la parte inferior de la página y haga click en OK.
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-9">
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label for="task_name"
                    >Título:
                    <span class="form-required-mark">*</span>
                  </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9 ges-form-metronic">
                  <input
                    type="text"
                    name="task_name"
                    id="task_name"
                    class="form-control form-control-lg"
                    size="30"
                    v-model="modeloAsignacion.nombre"
                  />
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label for="upload_file"> Nombre del archivo: </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9 ges-form-metronic">
                  <div class="custom-file">
                    <input
                      type="file"
                      name="upload_file"
                      id="upload_file"
                      class="custom-file-input form-control form-control-lg"
                      size="30"
                    />
                    <label class="custom-file-label" for="upload_file"
                      >Ningún archivo seleccionado</label
                    >
                  </div>
                  <span class="form-text text-muted">
                    <i class="flaticon2-information text-warning"></i>
                    Utilice el botón "Browse..." para localizar su archivo
                    explorando, luego haga click en "Abrir". (opcional)
                  </span>
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
                    value="http://"
                    id="url"
                    class="form-control form-control-lg"
                  />
                  <span class="form-text text-muted">
                    <i class="flaticon2-information text-warning"></i>
                    Usted puede asociar un link a esta asignación introduciendo
                    el url aquí (opcional)
                  </span>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label for="description"> Descripción: </label>
                </div>
                <div
                  class="col-lg-9 col-xl-9 col-md-9 ges-form-metronic richtext"
                >
                  <textarea
                    name="description"
                    id="description"
                    cols="50"
                    wrap="soft"
                    rows="7"
                    v-model="modeloAsignacion.descripcion"
                  >
                  </textarea>
                  <div class="form-inline">
                    Formato:
                    <select
                      class="form-control"
                      name="description.format"
                      id="description.format"
                    >
                      <option value="text/enhanced">Texto enriquecido</option>
                      <option value="text/plain">Texto plano</option>
                      <option value="text/fixed-width"
                        >Texto de ancho fijo</option
                      >
                      <option value="text/html">HTML</option>
                    </select>
                    Corrección ortográfica:
                    <select
                      class="form-control"
                      name="description.spellcheck"
                      id="description.spellcheck"
                    >
                      <option value=":nospell:" selected="selected">No</option>
                      <option value="en">Yes</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label for="available_date"> Fecha de disponibilidad: </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9 ges-date-metronic">
                  <!-- date available_date begin -->
                  <input
                    type="hidden"
                    name="available_date.format"
                    value="DD-MM-YYYY"
                  />
                  <select
                    name="available_date.day"
                    id="available_date.day"
                    v-model="modeloAsignacion.dia_disponibilidad"
                  >
                    <option value="">--</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18" selected="selected">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option> </select
                  >-<select
                    name="available_date.month"
                    id="available_date.month"
                    v-model="modeloAsignacion.mes_disponibilidad"
                  >
                    <option value="">--</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11" selected="selected">11</option>
                    <option value="12">12</option> </select
                  >-<input
                    type="text"
                    name="available_date.year"
                    id="available_date.year"
                    size="4"
                    maxlength="4"
                    value="2020"
                    v-model="modeloAsignacion.anio_disponibilidad"
                  />
                  <!-- date available_date end -->
                  <input
                    type="button"
                    style="height: 23px; width: 23px; background: url('/resources/acs-templating/calendar.gif')"
                    onclick="return showCalendarWithDateWidget('date', 'y-m-d');"
                  />
                  <b>[DD-MM-YYYY</b>]

                  <span
                    class="icon icon-dark icon-2x ges-dd-mm-yy"
                    data-id="available_date"
                  >
                    <i class="flaticon-event-calendar-symbol"></i>
                  </span>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label for="date">
                    Fecha de Entrega:
                    <span class="form-required-mark">*</span>
                  </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9 ges-date-metronic">
                  <!-- date date begin -->
                  <input type="hidden" name="date.format" value="DD-MM-YYYY" />
                  <select
                    name="date.day"
                    id="date.day"
                    v-model="modeloAsignacion.dia_entrega"
                  >
                    <option value="">--</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3" selected="selected">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option> </select
                  >-<select
                    name="date.month"
                    id="date.month"
                    v-model="modeloAsignacion.mes_entrega"
                  >
                    <option value="">--</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12" selected="selected">12</option> </select
                  >-<input
                    type="text"
                    name="date.year"
                    id="date.year"
                    size="4"
                    maxlength="4"
                    value="2020"
                    v-model="modeloAsignacion.anio_entrega"
                  />
                  <!-- date date end -->
                  <input
                    type="button"
                    style="height: 23px; width: 23px; background: url('/resources/acs-templating/calendar.gif')"
                    onclick="return showCalendarWithDateWidget('date', 'y-m-d');"
                  />
                  <b>[DD-MM-YYYY</b>]
                  <span
                    class="icon icon-dark icon-2x ges-dd-mm-yy"
                    data-id="date"
                  >
                    <i class="flaticon-event-calendar-symbol"></i>
                  </span>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label for="due_date">
                    Hora de Entrega:
                    <span class="form-required-mark">*</span>
                  </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9 ges-date-metronic">
                  <!-- date due_date begin -->
                  <input
                    type="hidden"
                    name="due_date.format"
                    value="HH24:MI:SS"
                  />
                  <select name="due_date.hours" id="due_date.hours">
                    <option value="">--</option>
                    <option value="0">00</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23" selected="selected">23</option> </select
                  >:<select name="due_date.minutes" id="due_date.minutes">
                    <option value="">--</option>
                    <option value="0">00</option>
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55" selected="selected">55</option> </select
                  >:<select name="due_date.seconds" id="due_date.seconds">
                    <option value="">--</option>
                    <option value="0">00</option>
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55" selected="selected">55</option> </select
                  ><!-- date due_date end -->
                  [HH24:MI:SS]
                  <span
                    class="icon icon-dark icon-2x ges-hh-ii-ss"
                    data-id="due_date"
                  >
                    <i class="flaticon-calendar-with-a-clock-time-tools"></i>
                  </span>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label for="number_of_members">
                    Número de personas en el grupo:
                    <span class="form-required-mark">*</span>
                  </label>
                </div>
                <div class="col-lg-2 col-xl-2 col-md-2 ges-form-metronic">
                  <input
                    type="text"
                    name="number_of_members"
                    value="1"
                    id="number_of_members"
                    class="form-control form-control-lg"
                    size="5"
                    v-model="modeloAsignacion.numero_personas"
                  />
                  <span class="form-text text-muted">
                    <i class="flaticon2-information text-warning"></i>
                    Individual = 1
                  </span>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label for="weight">
                    Porcentaje sobre el 100% de Tareas
                  </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9 ges-form-metronic">
                  <input
                    type="text"
                    name="weight"
                    value="0"
                    id="weight"
                    class="form-control form-control-lg w-25"
                    size="5"
                    v-model="modeloAsignacion.valor.porcentaje"
                  />
                  <span class="form-text text-muted">
                    <i class="flaticon2-information text-warning"></i>
                    Ingresar el porcentaje que valdrá sobre el 100% de Tareas o
                    puede ingresar el valor neto en el siguiente campo.<br />

                    Ejemplo: Si tiene 4 Tareas y le quiere poner la misma
                    ponderación a cada Tarea, entonces en este campo debe
                    colocar
                    <strong>25</strong> ya que cada Tarea tendrá el 25% de la
                    nota de Tareas.
                  </span>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label>
                    ¿Será enviada electrónicamente?
                    <span class="form-required-mark">*</span>
                  </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9">
                  <div class="checkbox-inline">
                    <label class="checkbox" for="task:elements:online_p:t">
                      <input
                        type="radio"
                        name="online_p"
                        value="t"
                        id="task:elements:online_p:t"
                        checked="checked"
                        v-model="modeloAsignacion.envio_electronico"
                      />
                      <span></span>
                      Sí
                    </label>
                  </div>
                  <div class="checkbox-inline">
                    <label class="checkbox" for="task:elements:online_p:f">
                      <input
                        type="radio"
                        name="online_p"
                        value="f"
                        id="task:elements:online_p:f"
                        v-model="modeloAsignacion.envio_electronico"
                      />
                      <span></span>
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label>
                    ¿Podrá entregarse tarde?
                    <span class="form-required-mark">*</span>
                  </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9">
                  <div class="checkbox-inline">
                    <label class="checkbox" for="task:elements:late_submit_p:t">
                      <input
                        type="radio"
                        name="late_submit_p"
                        value="t"
                        id="task:elements:late_submit_p:t"
                        checked="checked"
                        v-model="modeloAsignacion.entrega_retrasada"
                      />
                      <span></span>
                      Sí
                    </label>
                  </div>
                  <div class="checkbox-inline">
                    <label class="checkbox" for="task:elements:late_submit_p:f">
                      <input
                        type="radio"
                        name="late_submit_p"
                        value="f"
                        id="task:elements:late_submit_p:f"
                        v-model="modeloAsignacion.entrega_retrasada"
                      />
                      <span></span>
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label>
                    ¿Tendrá nota?
                    <span class="form-required-mark">*</span>
                  </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9">
                  <div class="checkbox-inline">
                    <label
                      class="checkbox"
                      for="task:elements:requires_grade_p:t"
                    >
                      <input
                        type="radio"
                        name="requires_grade_p"
                        value="t"
                        id="task:elements:requires_grade_p:t"
                        checked="checked"
                        v-model="modeloAsignacion.tendra_nota"
                      />
                      <span></span>
                      Sí
                    </label>
                  </div>
                  <div class="checkbox-inline">
                    <label
                      class="checkbox"
                      for="task:elements:requires_grade_p:f"
                    >
                      <input
                        type="radio"
                        name="requires_grade_p"
                        value="f"
                        id="task:elements:requires_grade_p:f"
                        v-model="modeloAsignacion.tendra_nota"
                      />
                      <span></span>
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label>
                    ¿Se usará en foros?
                    <span class="form-required-mark">*</span>
                  </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9">
                  <div class="checkbox-inline">
                    <label class="checkbox" for="task:elements:use_forums:t">
                      <input
                        type="radio"
                        name="use_forums"
                        value="t"
                        id="task:elements:use_forums:t"
                        v-model="modeloAsignacion.usara_foros"
                      />
                      <span></span>
                      Sí
                    </label>
                  </div>
                  <div class="checkbox-inline">
                    <label class="checkbox" for="task:elements:use_forums:f">
                      <input
                        type="radio"
                        name="use_forums"
                        value="f"
                        id="task:elements:use_forums:f"
                        checked="checked"
                        v-model="modeloAsignacion.usara_foros"
                      />
                      <span></span>
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group row form-element">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-form-label text-md-right"
                >
                  <label>
                    Agregar asignación Tarea en varias clases o secciones
                  </label>
                </div>
                <div class="col-lg-9 col-xl-9 col-md-9">
                  <div class="checkbox-inline">
                    <label
                      class="checkbox"
                      for="task:elements:add_to_more_classes_p:t"
                    >
                      <input
                        type="checkbox"
                        name="add_to_more_classes_p"
                        value="t"
                        id="task:elements:add_to_more_classes_p:t"
                        v-model="modeloAsignacion.asignacion_clases"
                      />
                      <span></span>
                      &nbsp;
                    </label>
                  </div>
                  <span class="form-text text-muted">
                    <i class="flaticon2-information text-warning"></i>
                    Haga click aquí si desea agregar esta asignación a varias
                    clases o secciones
                  </span>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #modal-footer="{ ok, cancel }">
          <b-button variant="success" @click="ok()"> Aceptar </b-button>
          <b-button variant="secondary" @click="cancel()"> Cancelar </b-button>
        </template>
      </b-modal>

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
                :items="allTareas"
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
                :items="allProyectos"
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
                :items="allFinales"
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
                :items="allParciales"
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

import { mapGetters, mapActions } from "vuex";

export default {
  name: "asignaciones",
  components: {
    Table
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
      ]
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
    this.initModeloAsignacion();
  },
  computed: {
    ...mapGetters(["allTareas", "allProyectos", "allFinales", "allParciales"])
  },
  methods: {
    ...mapActions(["addTarea"]),
    handleOk() {
      if (this.actionType == "Agregar") {
        // this.asignaciones[this.listName].push(this.modeloAsignacion);
        switch (this.listName) {
          case "tareas":
            this.addTarea(this.modeloAsignacion);
            break;
          case "proyectos":
            this.addProyecto(this.modeloAsignacion);
            break;
          case "finales":
            this.addFinal(this.modeloAsignacion);
            break;
          case "parciales":
            this.addParcial(this.modeloAsignacion);
            break;
          default:
            break;
        }
      }
      this.initModeloAsignacion();
    },
    initModeloAsignacion() {
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
    handleDeletedItem(data) {
      this.asignaciones[data.listName].splice(data.index, 1);
      switch (data.listName) {
        case "tareas":
          this.modeloAsignacion = this.allTareas[data.index];
          break;
        case "proyectos":
          this.modeloAsignacion = this.allProyectos[data.index];
          break;
        case "finales":
          this.modeloAsignacion = this.allFinales[data.index];
          break;
        case "parciales":
          this.modeloAsignacion = this.allParciales[data.index];
          break;
        default:
          break;
      }
    },
    handleEditRecord(data) {
      switch (data.listName) {
        case "tareas":
          this.modeloAsignacion = this.allTareas[data.index];
          break;
        case "proyectos":
          this.modeloAsignacion = this.allProyectos[data.index];
          break;
        case "finales":
          this.modeloAsignacion = this.allFinales[data.index];
          break;
        case "parciales":
          this.modeloAsignacion = this.allParciales[data.index];
          break;
        default:
          break;
      }
      this.actionType = "Editar";
      this.$bvModal.show("modal-agregar-tarea");
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
