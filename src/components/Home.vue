<template>
<HeaderTop/>
    <h2> Hello User Welcome to home page </h2>
 <table style="width:100%">

  <tr v-for="item in posts" :key="item.id">
    <th>{{item.id}}</th> 
    <!-- <th>{{item.category_id}}</th>
    <th>{{item.sub_category_id}}</th>
    <th>{{item.child_category_id}}</th>  -->
    <th>{{item.post_title}}</th>
    <!-- <th>{{item.post_title_slug}}</th>
    <th>{{item.post_image}}</th> -->
    <th style="width:90%">{{item.description}}</th>
    <!-- <th>{{item.status}}</th>
    <th>{{item.created_at}}</th>
    <th>{{item.updated_at}}</th> -->
  </tr>



</table> 
</template>


<script >
import HeaderTop from './HeaderTop.vue';
import axios from 'axios';
export default {
     name: "HomePage",
     data(){
         return{
             posts:[],
         }
     },
     components:{
            HeaderTop      
     },
    async mounted(){
            let user = localStorage.getItem('access_token');
            if(!user){
                 this.$router.push({name:'Login'})
            }

            let result = await axios.get("http://127.0.0.1:8000/api/posts");
           // console.log(result);
            this.posts = result.data;

        }
}
</script>


<style >
table, th, td {
  border: 1px solid black;
  
}
</style>