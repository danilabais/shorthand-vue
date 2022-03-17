import { createStore } from 'vuex'
import userModule from '@/store/user'
import generalModule from '@/store/general'

export default createStore({
  modules:{
    userModule,generalModule
  }
})
