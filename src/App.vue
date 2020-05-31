<script>
export default {
  created() {
    console.log(this.$buefy);
  },
};
</script>

<template>
  <div class="section container">
    <b-button @click="$buefy.toast.open('The toast')">hello</b-button>
  </div>
</template>
