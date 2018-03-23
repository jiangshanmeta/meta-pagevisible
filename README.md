# meta-pagevisible

这个项目是实现对document.hidden以及visibilitychange事件的封装，并能够在vue实例上获得当前页面是否是活跃状态。 

## Usage

```javascript
Vue.use('meta-pagevisible');
```

插件选项

|  Name  | Description  |  Type  | Required |
|  :---: |     :--:     |  :--:  | :-----:  |
|  key   | 在vue实例上添加的访问页面状态的属性名，默认为 $isPageVisible | String | false |

在应用中

```javascript
export default{
    watch:{
        "$isPageVisible"(isPageVisible){
            console.log(isPageVisible);
        },
    }
}
```

可以监听页面活跃状态变化

## 用途

想象这么一个场景，前端需要隔一段时间就请求一下后端获取信息，但是如果用户焦点在其他页面上而不是我们的页面，这些请求可能是多余的，所以可以监听$isPageVisible，用户切走页面就停止请求，用户切回来恢复请求。