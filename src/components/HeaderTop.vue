<template>
   <div class="navbar">
  <router-link to="/"> Home </router-link>
  <router-link to="/add-post"> Add Post  </router-link>
  <router-link to="/update-post"> Update Post  </router-link>
  <a v-on:click="Logout" href="#" class="right">Logout</a>
</div>
</template>

<script>

export default {
    name:'HeaderTop',
    methods:{
        Logout(){
            //console.log('logout');
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>


<style >
/* Increase the font size of the heading */
/* .header h1 {
  font-size: 40px;
} */

/* Style the top navigation bar */
.navbar {
  overflow: hidden;
  background-color: #ddd;
}

/* Style the navigation bar links */
.navbar a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

/* Right-aligned link */
.navbar a.right {
  float: right;
}

/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: green;
}

</style>