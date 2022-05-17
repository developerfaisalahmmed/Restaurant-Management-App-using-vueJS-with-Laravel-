<template>
    <h2>Login Page </h2>
    <div>
            <input type="email" v-model="email" name="email" placeholder="email"><br>
            <input type="password" v-model="password" name="password" placeholder="password"><br>
            <button v-on:click="Login" > Submit </button>
            <h2> Dont't have account  <router-link to="/registration"> Register Now </router-link> </h2>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "LoginPage",
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
          async Login() {
                //console.log('Click',this.name,this.email,this.password);
                let result = await axios.post("http://127.0.0.1:8000/api/login",{
                    email:this.email,
                    password:this.password,
                });
                //console.log(result)
                if(result.status == 200){
                    //alert("Sign Up DOne");
                    localStorage.setItem('access_token',JSON.stringify(result.data.access_token))
                    this.$router.push({name:'Home'})
                }
            }
        },
        mounted(){
            let user = localStorage.getItem('access_token');
            if(user){
                 this.$router.push({name:'Home'})
            }
        }
    }
</script>

<style scoped>
    input {
        margin: 10px;
        width: 300px;
    }
</style>