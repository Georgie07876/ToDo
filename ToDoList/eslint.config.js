import js from '@eslint/js'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier/recommended'

export default ts.config(
  // 1. Базовые правила JS
  js.configs.recommended,
  // 2. Правила TypeScript
  ...ts.configs.recommended,
  // 3. Правила Vue
  ...vue.configs['flat/recommended'],
  // 4. Интеграция с Prettier (обязательно последним!)
  prettier,
  {
    files: ['*.vue', '**/*.vue', '**/*.ts', '**/*.mts'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          trailingComma: 'none'
          vueIndentScriptAndStyle: true,
        }
      ]
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**', 'public/**'] 
)
