<template>
  <div>e12</div>
  <div>9988</div>
  <div>88888--{{name}}</div>
  <button @click="handleClick">点击</button>
  <div>
    姓名：{{user.name}}
    年龄：{{user.age}}
  </div>

  <div>
    count: {{count}}
    double: {{double}}
    <button @click="changeCount">changeCount</button>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, readonly, computed, watch } from 'vue'

export default defineComponent({
  props: ['title'],
  setup(props) {
    // composition api
    // defineComponent 定义组件函数
    // setup - 组件的入口
    // ref - 创建值类型的响应式对象，替代data和computed
    // reactive - 创建应用类型的响应式对象
    // readonly 定义只读属性
    console.log(props.title)
    

    let name = ref('123')

    const user = reactive({
      name: '张三',
      age: 12
    })

    const userReadonly = readonly({
      name: 'zhangsan',
      age: 'twelve'
    })

    console.log(userReadonly)

    const handleClick = () => {
      // name = '0000'
      console.log('click')

      // ref - 调用value修改值类型的响应式对象
      name.value = '666' 

      // reactive - 修改引用类型时
      user.name = '李四'
      user.age = 13

      userReadonly.name = 123 // 只读属性不允许修改
    }

    // computed - 计算属性
    let count = ref(0)
    let double = computed(() => count.value * 2)
    let changeCount = () => {
      count.value++
    }

    // watch
    // 第一个参数，支持 响应式对象 or 函数（需要返回一个响应式对象）
    watch(name, (n, o) => {
      console.log(n, o)
    })

    return {
      count,
      double,
      name,
      user,
      handleClick,
      changeCount,
    }
  }
})
</script>

