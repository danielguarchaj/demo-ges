// import axios from 'axios';

export default {
    state: {
        tareas: [
            {
                id: 1,
                nombre: "tarea1",
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
            {
                id: 3,
                nombre: "tarea3",
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
            }
        ],
        proyectos: [
            {
              id: 2,
              nombre: "proyecto2",
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
            {
              id: 3,
              nombre: "proyecto3",
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
            }
        ],
        finales: [
            {
              id: 1,
              nombre: "finales1",
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
            {
              id: 3,
              nombre: "finales3",
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
            }
        ],
        parciales: [
            {
              id: 1,
              nombre: "parcial1",
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
            {
              id: 3,
              nombre: "parcial3",
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
            }
          ]
    },
    actions: {
        async deleteTarea({ commit }, id) {
            commit('removeTarea', id);
        },
        async addTarea({ commit }, data) {
            data.id = Math.floor(Math.random() * 10000);
            commit('addTarea', data);
        },

        async deleteProyecto({ commit }, id) {
            commit('removeProyecto', id);
        },
        async addProyecto({ commit }, data) {
            data.id = Math.floor(Math.random() * 10000);
            commit('addProyecto', data);
        },

        async deleteFinal({ commit }, id) {
            commit('removeFinal', id);
        },
        async addFinal({ commit }, data) {
            data.id = Math.floor(Math.random() * 10000);
            commit('addFinal', data);
        },

        async deleteParcial({ commit }, id) {
            commit('removeParcial', id);
        },
        async addParcial({ commit }, data) {
            data.id = Math.floor(Math.random() * 10000);
            commit('addParcial', data);
        },
        
    },
    getters: {
        allTareas: state => state.tareas,
        allProyectos: state => state.proyectos,
        allFinales: state => state.finales,
        allParciales: state => state.parciales
    },
    mutations: {
        setTareas: (state, tareas) => (state.tareas = tareas),
        addTarea: (state, newTarea) => state.tareas.push(newTarea),
        removeTarea: (state, id) => state.tareas = state.tareas.filter(tarea => tarea.id !== id),

        setProyectos: (state, proyectos) => (state.proyectos = proyectos),
        removeProyecto: (state, id) => state.proyectos = state.proyectos.filter(proyecto => proyecto.id !== id),
        addProyecto: (state, newProyecto) => state.proyectos.push(newProyecto),
        
        setFinales: (state, finales) => (state.finales = finales),
        removeFinal: (state, id) => state.finales = state.finales.filter(final => final.id !== id),
        addFinal: (state, newFinal) => state.finales.push(newFinal),

        setParciales: (state, parciales) => (state.parciales = parciales),
        removeParcial: (state, id) => state.parciales = state.parciales.filter(parcial => parcial.id !== id),
        addParcial: (state, newParcial) => state.parciales.push(newParcial)
    }
}