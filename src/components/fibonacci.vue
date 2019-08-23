<template>
    <div id="fibonacci">
        <input type="text" v-model="int1">
        <p>{{ fibonacci }}</p>
    </div>
</template>

<script>
export default {
    name: 'fibonacci',
    data () {
        return{
            int1 : 0
        }
    },
    computed: {
        fibonacci: function(){
            // var arr = [0,1], num = this.int1;
            // for(let i = 2; i < num + 1; i++){
            //     arr.push(arr[i - 2] + arr[i - 1])
            // }
            // return arr[num];

            var num = this.int1;

            if (num <= 2) return 1;

            const f = [0, 1, 1];
            for(let i = 3; i <= num; i++) {
                f[i] = f[i-1] + f[i-2];
            }
            return f;
        }
    }
}
</script>

<style scoped>

</style>