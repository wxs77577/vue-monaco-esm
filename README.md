# vue-monaco-esm

## Install
```
npm i vue-monaco-esm
```
## Usage
```html
<monaco-editor v-model="code" style="height:10em;border:1px solid #ccc;"></monaco-editor>
```

```javascript
import MonacoEditor from 'vue-monaco-esm'

export default {
  data(){
    return {
      code: 'const vm = new Vue({})'
    }
  },
  components: {
    MonacoEditor
  },
  // ...
}

```

