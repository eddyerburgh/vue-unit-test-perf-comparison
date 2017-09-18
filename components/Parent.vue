<template>
  <div>
    <child v-for="item in items" :key={item} >{{item}}</child>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'parent',
  components: {
    Child
  },
  data () {
    return {
      items: ['item1', 'item2', 'item3']
    }
  }
}
</script>
