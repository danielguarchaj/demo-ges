<style></style>

<template>
  <div class="card mb-3">
    <div class="card-header bg-transparent border-1">
      <h3 class="mb-0">
        <i class="py-0 fa fa-edit text-primary"></i>
        Resumen de Asignaciones
      </h3>
    </div>
    <div class="card-body">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam,
      sapiente vel qui voluptas quia consectetur, quasi dolores provident eos
      quaerat numquam amet aperiam eveniet totam distinctio dolorum sed
      suscipit?
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "resumenAsignaciones",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  mounted() {}
};
</script>
