import withNuxt from './.nuxt/eslint.config.mjs'
import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'


export default withNuxt([
  { files: ['**/*.{js,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node, ...globals.es2021 }, ecmaVersion: 'latest' } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    ignores: ['node_modules', 'dist', 'public', '.nuxt']
  },
  eslintConfigPrettier,
  {
    rules: {
      'vue/multi-word-component-names': 0
    }
  }
])


