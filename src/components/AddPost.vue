<template>
<HeaderTop/>
    <h2> Hello User Welcome to AddPost page </h2>
    <div>
        <input type="text" v-model="post_title" name="post_title" placeholder="title"><br>
        <textarea v-model="description" name="description" placeholder="description"> </textarea><br>
        <button v-on:click="SignUp"> Submit </button>

    </div>
</template>


<script >
import HeaderTop from './HeaderTop.vue';

export default {
     name: "AddPost",
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


<style scoped>
    input {
        margin: 10px;
        width: 300px;
    }
    textarea {
        margin: 10px;
        width: 300px;
    }
    button {
        margin: 10px;
        width: 300px;
    }
</style>