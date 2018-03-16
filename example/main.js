import Vue from "vue"

import app from "./app.vue"
import metaPageVisible from "src/index.js"

Vue.use(metaPageVisible);

new Vue({
    el:"#app",
    render(h){
        return h(app);
    },
    components:{
        app
    },
})