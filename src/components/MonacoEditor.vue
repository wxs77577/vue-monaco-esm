<template>
  <div ref="editor"></div>
</template>

<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.main";

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: 'javascript'
    }
  },
  data(){
    return {
      $editor: null
    }
  },
  watch: {
    value(newValue){
      if (newValue !== this.$editor.getValue()) {
        this.$editor.setValue(newValue)
      }
    }
  },
  methods: {
    updateValue(){
      this.$emit('input', this.$editor.getValue())
    }
  },
  created() {
    this.$nextTick(() => {
      const editor = monaco.editor.create(this.$refs.editor, {
        value: this.value,
        language: this.language
      });
      
      editor.onKeyUp(() => this.updateValue())
      editor.onMouseUp(() => this.updateValue())
      this.$editor = editor
    });
  }
};
</script>

