import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        isMobile: document.body.clientWidth < 992 ? true : false, //设备类型
        isMenuLayout: false,
        
    },
    mutations: {
        goUrl(state, data){
            window.open(data);
        }
    },
    actions: {

    },

})