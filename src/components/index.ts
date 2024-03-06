import MyCom1 from './MyCom1.vue'
import MyCom2 from './MyCom2.vue'

const allGlobalComponents:any = {
  MyCom1,
  MyCom2
}

export default {
  install(app:any) {
    console.log(111111)
    Object.keys(allGlobalComponents).forEach(el => {
      app.component(el, allGlobalComponents[el])
    })
  }
}
