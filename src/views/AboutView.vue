<template>
    <div>
        <Navbar/>
        <About/>
        <people/>
        <Footer/>

    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import About from '../components/About.vue';
import People from '../components/People.vue';
import Footer from '../components/Footer.vue';
    export default {
        components:{
            Navbar,About,People,Footer
        }
        
    }
</script>

<style scoped>

</style>