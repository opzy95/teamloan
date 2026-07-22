<template>
    <div class="service">
    
        <h1 style="text-align: center; padding-top: 60px; color: white; font-size: 30px;">
            Main Loan Service
        </h1>

    </div>
    <div class="service-1">
        <div class="box" >
            <img style="width: 250px; height: 150px;" src="../assets/images/img2.jpg" alt="">
            <div style="padding: 10px;">
                <h2 style="text-align: center;"><span>01.</span>Business Loan</h2>
                <p style="text-align: center;">Find Out More</p>
                </div>
            </div>
             <div class="box" >
            <img style="width: 250px; height: 150px;" src="../assets/images/img2.jpg" alt="">
            <div style="padding: 10px;">
                <h2 style="text-align: center;"><span>01.</span>Car Loan</h2>
                <p style="text-align: center;">Find Out More</p>
                </div>
            </div>
             <div class="box" >
            <img style="width: 250px; height: 150px;" src="../assets/images/img2.jpg" alt="">
            <div style="padding: 10px;">
                <h2 style="text-align: center;"><span>01.</span> Home Loan</h2>
                <p style="text-align: center;">Find Out More</p>
                </div>
            </div>
            </div>
            <div class="service-1">
             <div class="box" >
            <img style="width: 250px; height: 150px;" src="../assets/images/img2.jpg" alt="">
            <div style="padding: 10px;">
                <h2 style="text-align: center;"><span>01.</span>Credit & Debit Card</h2>
                <p style="text-align: center;">Find Out More</p>
                </div>
            </div>
             <div class="box" >
            <img style="width: 250px; height: 150px;" src="../assets/images/img2.jpg" alt="">
            <div style="padding: 10px;">
                <h2 style="text-align: center;"><span>01.</span>Education Loan</h2>
                <p style="text-align: center;">Find Out More</p>
                </div>
            </div>
             <div class="box" >
            <img style="width: 250px; height: 150px;" src="../assets/images/img2.jpg" alt="">
            <div style="padding: 10px;">
                <h2 style="text-align: center;"><span>01.</span>Health & Medical</h2>
                <p style="text-align: center;">Find Out More</p>
                </div>
            </div>
        </div>
       
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.service{
    width: 100%;
    height: 200px;
    background-color: rgb(82, 85, 117);
}
span{
    color: rgb(136, 196, 24);
}
.service-1{
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 45px;
    margin: 50px auto;
    justify-content: center;
}
.box{
    width: 250px;
     border: 0.5px solid grey;
}
.box:hover{
  box-shadow: 10px 10px 15px -5px rgba(0, 0, 0, 0.3);
}


</style>