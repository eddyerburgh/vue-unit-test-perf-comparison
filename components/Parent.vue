<template>
  <div>
    <basic v-for="item in items" :key={item} >{{item}}</basic>
  </div>
</template>

<script>
import Basic from './Basic.vue'

export default {
  name: 'parent',
  components: {
    Basic
  },
  data () {
    return {
      items: ['item1', 'item2', 'item3']
    }
  }
}
</script>
