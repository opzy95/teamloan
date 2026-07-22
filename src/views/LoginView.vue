<template>
    <div>
        <Navbar />
        <login />  
        <Footer />
        
    </div>
</template>

<script>
import login from '../auth/login.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Signup from '../auth/Signup.vue';
export default {
    components: {
        login,
        Navbar,
        Footer,
        Signup,
        

    }
}
</script>

<style scoped></style>