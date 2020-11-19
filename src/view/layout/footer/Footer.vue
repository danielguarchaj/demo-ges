<template>
  <div id="kt_footer" class="footer bg-white py-4 d-flex flex-lg-column">
    <!--begin::Container-->
    <div
      class="d-flex flex-column flex-md-row align-items-center justify-content-center"
      v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
    <img id="img-footer" alt="logo-footer" class="img-footer w-100px " :src="layoutConfig('self.logo.footer')">

    </div>
    <!--end::Container-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTFooter",
  computed: {
    ...mapGetters(["layoutConfig"]),

    /**
     * Check if subheader width is fluid
     */
    widthFluid() {
      return this.layoutConfig("footer.width") === "fluid";
    }
  }
};
</script>
