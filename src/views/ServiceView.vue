<template>
    <div>
        <Navbar/>
        <Service/>
        <Footer/>

    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Service from '../components/Service.vue';
import Footer from '../components/Footer.vue';
    export default {
        components:{
            Navbar,Service,Footer

        }
        
    }
</script>

<style scoped>

</style>