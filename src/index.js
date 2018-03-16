let hidden;
let visibilityChange; 

let prefixs = ['','moz','webkit','ms','o'];

for(let prefix of prefixs){
    if(typeof document[prefix?prefix+'Hidden':'hidden'] !== 'undefined'){
        hidden = prefix?prefix+'Hidden':'hidden';
        visibilityChange = prefix + 'visibilitychange';
        break;
    }
}

export default{
    install(Vue,{key='$isPageVisible'}={}){
        const visibilityVM = new Vue({
            data:{
                visible:true,
            },
        });

        if(hidden){
            visibilityVM.visible = !document[hidden];
            document.addEventListener(visibilityChange,function(){
                if(document[hidden]){
                    visibilityVM.visible = false;
                }else{
                    visibilityVM.visible = true;
                }
            },false);
        }else{
            window.addEventListener("blur",function(){
                visibilityVM.visible = false;
            },false);

            window.addEventListener("focus",function(){
                visibilityVM.visible = true;
            },false);
        }

        Object.defineProperty(Vue.prototype,key,{
            get(){
                return visibilityVM.visible;
            },
        });

    }
}