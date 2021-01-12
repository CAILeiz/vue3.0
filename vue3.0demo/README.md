# vue3.0demo
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```

## setup是什么
在以下方法前执行：
Components
Props
Data
Methods
Computed Properties
Lifecycle methods
[***]可以不在使用难于理解的this
有两个可选参数
1. props - 属性 (响应式对象 且 可以监听(watch))
import {watch} from "vue"
export defalut {
	props: {
		name: String
	},
	setup(props) {
		watch(() => {
			console.log(props.name)
		})
	}
}
2. context 上下文对象 - 用于代替以前的this方法可以访问的属性
setup (props,context) {
	const {attrs,slots,parent,root,emit} = context
}

##  变量  集装箱
1. 单个数据 
let num = ref(3)
return {num}
2. 多个数据响应式
[a] 直接返回整个响应的数据
const state = relative({
    num: 3
})
return {state}
调用的时候是 state.num
[b] 返回...响应式的数据
const state = relative({
    num: 3
})
return {...toRef(state)}
调用的时候直接使用num即可



## 方法 Methods
setup() {
    function test() {}
    return {test}
}

## computed使用方式 跟vue2.0基本一致 根据存放作用域的位置可以分为两种定义方式
1. 直接在setup中作为一个变量
let computedNum = computed(() => {
    return state.num + state.age;
})
return { computedNum }
2. 作为state中的一个属性
const state = {
    computedNum: computed(() => {
        return state.num + state.age;
    })
}


## Watch 监听器
1. 所有依赖响应式对象监听
watchEffect(() => {
   results.value = getEventCount(searchInput.value);
 });
2. 特定响应式对象监听
watch(
  searchInput,
  () => {
    console.log("watch searchInput:");
  }
);
3. 特定响应式对象监听 可以获取新旧值
watch(
  searchInput,
 (newVal, oldVal) => {
    console.log("watch searchInput:", newVal, oldVal);
  },
);
4. 多响应式对象监听
watch(
  [firstName,lastName],
 ([newFirst,newLast], [oldFirst,oldlast]) => {
   // .....
  },
);
5. 非懒加载方式监听 可以设置初始值
watch(
  searchInput,
  (newVal, oldVal) => {
    console.log("watch searchInput:", newVal, oldVal);
  },
  {
    immediate: true, 
  }
);

## LifecycleHooks - 生命周期钩子
Vue2	            Vue3
beforeCreate        ❌setup(替代)
created             ❌setup(替代)
beforeMount         onBeforeMount
mounted             onMounted
beforeUpdate        onBeforeUpdate
updated             onUpdated
beforeDestroy       onBeforeUnmount
destroyed           onUnmounted
errorCaptured       onErrorCaptured
                    🎉onRenderTracked
                    🎉onRenderTriggered


## 路由传参形式
params ===> detail/:id
query ===> ?id=xxx



## 