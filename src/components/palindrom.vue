<template>
  <div class="palin">
    <input type="text" v-model="palindromtext">
    <p v-if="show">Palindrom</p>
    <p v-else>Bukan Palindrom</p>
    <button v-on:click="palindrom"> process </button>
  </div>
</template>

<script>
export default {
  name: 'palindrom',
  data () {
    return {
      palindromtext : '',
      show: false
    }
  },
  methods: {
    palindrom () {
      let re = /[\W_]/g;

      let lowRegStr = this.palindromtext.toLowerCase().replace(re, '');

      let reverseStr = lowRegStr.split('').reverse().join('');

      if(reverseStr === lowRegStr){
        return this.show = true;
      }
      return this.show = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
