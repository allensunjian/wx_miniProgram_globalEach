###  gloabalForEach小程序页面守卫 基本用法
###### 针对小程序，实现连接混入自定义程序的程序

    
-  使用场景一
小程序每一个页面如果想配置分享功能就必须每个页面都配置onShareAppMessage函数，特别是页面做完之后的新需求，就会变得特别麻烦，还容易漏页面。
实现：
```javascript
PageForeach({
   resetTarget:{
       onShareAppMessage:function (res) {  //自定义重写的函数
           return share(res)
       }
   }
}
)();
function share () {
	return {
        title: 'XX小程序',
        path: '/pages/index/index',
        imageUrl: '/static/img/logo1.png',
        success: function (res) {
            wx.showToast({
                title: '转发成功'
            })
        },
        fail: function (res) {
            wx.showToast({
                icon:'none',
                title: '转发失败'
            })
        }
    }
}
```
完成以上配置即可完成 页面的分享动作的一致性


###  gloabalForEach小程序页面守卫 进阶用法
- 拿小程序页面的this.data代理程序为例

```javascript
PageForeach({
   resetTarget:{
       onShareAppMessage:function (res) {
           return share(res)
       }
   }
},
    WX_proxy_shell({  //注入代理外壳配置
        injection: ['watch'],  //功能注入，注入watch功能
        proxyPage: ['home'], // 需要实现代理的页面 
        moisturises: { // 注入规则函数
            watch: function () {
                console.log('注入watch')
            }
        }
})
)();
```
1、目标是实现简单的配置实现watch功能
2、无需使用this.setData就可以触发视图改变

### 目前还未完成目标

