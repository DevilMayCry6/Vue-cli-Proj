<template>
    <div id="home">
        
    </div>
</template>
<script>
export default {
    name:'Home',

    data(){
        return(){

        }
    },
    created(){
        this.$axios.get('getlunbo')
        .this(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log('轮播图数据异常',err)
        })
    }
}
</script>