<template>
  <div class="home">
    <div>{{name}}</div>
    <div>{{person}}</div>
    <div>{{info}}</div>
  </div>
</template>

<script>
// @ is an alias to /src'

export default {
  name: 'Home',
  data() {
    return {
      name: 'child app two',
      person: {},
      info: ''
    }
  },
  methods: {},
  mounted() {
    // 监听state，当main app的msg发生变化时，修改name，体现在页面上
    this.$onGlobalStateChange((state, prev) => {
      if(state.msg != prev.msg) {
        this.name = state.msg
      }
      this.person = state.person
      this.info = state.info
    })
  }
}
</script>
