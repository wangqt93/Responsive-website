const $$=s=>document.querySelectorAll(s)
const $=s=>document.querySelector(s)

var  num = $('.container').children.length

/*自动轮播mod*/
const carouse = {              
    init(){
        this.$container = $('.container')
        this.$$items = $$('.container .item')
        this.autoplay()
        this.bind()
    },
    autoplay(){
            timer = setInterval(()=>{
                        this.$$items.forEach(node=>{
                            if(node.style.zIndex==2){   //可以把2改成this.$container.children.length-1;增加轮播图片后方便设置
                                node.classList.add('active')
                                setTimeout(()=>{
                                    node.style.zIndex=0
                                },1000)                      
                            }else if(node.style.zIndex<2){
                                setTimeout(()=>{
                                    node.classList.remove('active')
                                    node.style.zIndex++
                                },500)

                            }
                        })
                    },2000)
    },
    bind(){
        this.$container.onmouseover = function () {
            clearInterval(timer);
        }
        this.$container.onmouseout =  ()=> {
            this.autoplay()
        }
    }
}
const App = {
    init(){
        [...arguments].forEach(module=>module.init())
    }
}
App.init(carouse)