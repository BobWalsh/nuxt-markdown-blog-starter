import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader version "^2.1.1" ,
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    icons: {
      iconfont: 'md',
    },
    theme: {
      primary: '#9652ff',
      success: '#3cd1c2',
      info: 'ffaa2c',
      success: '#fx3e70'
    },
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}