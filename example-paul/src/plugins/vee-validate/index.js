import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  configure,
  extend
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

const messages = {
  required: '此欄位為必填欄位。'
}

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule] || '輸入格式錯誤，請重新輸入。'
  })
})

configure({
  classes: {
    invalid: 'is-invalid'
  }
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
