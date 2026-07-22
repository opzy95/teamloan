<template>
    <div>
        <Navbar />
        <Signup />  
        <Footer />
        
    </div>
</template>


<script>
import login from '../auth/login.vue';
   import Signup from '../auth/Signup.vue';
   import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
    export default {
        components:{
            Navbar,
            Signup,
            login,
            Footer
        }
    }
</script>

<style lang="scss" scoped>

</style>