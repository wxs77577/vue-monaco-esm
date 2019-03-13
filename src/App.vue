<template>
  <div id="app">
    <h1>MonacoEditor</h1>
    <monaco-editor v-model="code" style="height:10em;border:1px solid #ccc;"></monaco-editor>

  </div>
</template>

<script>
import MonacoEditor from "./components/MonacoEditor";

export default {
  name: "app",
  data() {
    return {
      code: "const vm = new Vue({})"
    };
  },
  components: {
    MonacoEditor
  }
};
</script>

<style>

</style>
