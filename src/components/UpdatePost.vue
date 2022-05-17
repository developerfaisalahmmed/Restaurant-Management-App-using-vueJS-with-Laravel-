<template>
<HeaderTop/>
    <h2> Hello User Welcome to UpdatePost page </h2>

</template>


<script >
import HeaderTop from './HeaderTop.vue';

export default {
     name: "UpdatePost",
     components:{
            HeaderTop      
     },
     mounted(){
            let user = localStorage.getItem('access_token');
            if(!user){
                 this.$router.push({name:'Login'})
            }
        }
}
</script>