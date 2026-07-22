<template>
    <!-- <div class="page1">
        <h1>About Us</h1>
    </div> -->
     <div class="service">
    
        <h1 style="text-align: center; padding-top: 60px; color: white; font-size: 30px; ">
            About US
        </h1>
        </div>
    <section class="sec1">
        <div class="image" style="width: 40%;">
            <img width="400px" height="330px" src="../assets/images/img 1.jpg" alt="">
        </div>
        <div style="width: 50%;">
            <h2>Welcome To Loanday.</h2>
            <h3 style="padding-bottom: 20px;">However, there is much more to branding than</h3>
            <p class="mordern" style="padding-bottom: 12px; width: 29rem;">Where a powerful web presence has become a vital ingredient of your branding</p>
            <p class="mordern" style="width: 38rem; padding-bottom: 20px; line-height: 25px;">Unfortunately, many graphic design firms who position themselves as advertising agencies believe that branding your corporate identity is all about developing great looking visual solutions.</p>
            <button style="padding: 13px; font-size: 16px; width: 180px; border: none; color: white; background-color: rgb(136, 196, 24);">CONTACT US</button>
        </div>
    </section>
    <section class="sec2">
        <div>
            <h1 style="font-size: 30px; font-weight: bold;">Our Vision</h1>
            <p style="width: 19rem; line-height: 23px;">The modern world is in a continuous movement and people everywhere are looking for quick, safe means of accessing accurate information. Prompt information is vital for people who want to keep the</p>
        </div>
        <div>
            <h1 style="font-size: 30px;font-weight: bold;">Our Mission</h1>
            <p  style="width: 19rem; line-height: 23px;">The modern world is in a continuous movement and people everywhere are looking for quick, safe means of accessing accurate information. Prompt information is vital for people who want to keep the</p>
        </div>
        <div>
            <h1 style="font-size: 30px; font-weight: bold;">
                Our Value
            </h1>
            <p  style="width: 19rem; line-height: 23px;">
                The modern world is in a continuous movement and people everywhere are looking for quick, safe means of accessing accurate information. Prompt information is vital for people who want to keep the</p>
        </div>
    
    </section>
    <section class="sec3">
         <h1 style="text-align: center; padding-top: 50px; color: white; font-size: 30px; font-weight: bold;">
            Our History
         </h1>
         <p style="text-align: center; color: white;">
            Lorem Ipsum is simply dummy text of the printing and typesetting has been the
         </p>
         <div class="sub-sec">
            <div>
                <img width="80%" src="../assets/images/img2.jpg" alt="">
            </div>
            <div>
                <div class="all">
                    <h3 style="color:  rgb(136, 196, 24);">
                        25th, March 2004
                    </h3>
                    <h2 style="color: white;">
                        Open a company
                    </h2>
                    <p style="width: 23rem; line-height: 30px; color: white;">Paypopup.com is a four year old online advertising complex which consists thousands of specialized websites in providing unique</p>
                </div>
                <div class="all">
                    <h3 style="color:  rgb(136, 196, 24);">
                        25th, March 2004
                    </h3>
                    <h2 style="color: white; width: 20rem;">
                        Opened another branch in london
                    </h2>
                    <p style="width: 23rem; line-height: 30px; color: white;">Paypopup.com is a four year old online advertising complex which consists thousands of specialized websites in providing unique</p>
                </div>
                <div class="all">
                    <h3 style="color:  rgb(136, 196, 24);">
                       25th, March 2019
                    </h3>
                    <h2 style="color: white;">
                        Opening more branches in other countries
                    </h2>
                    <p style="width: 23rem; line-height: 23px; color: white;">Paypopup.com is a four year old online advertising complex which</p>
                </div>
                </div>
        </div>
    </section>
        
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.service{
    width: 100%;
    height: 200px;
    background-color: rgb(136, 129, 143) ;
}
.page1 h1{
    text-align: center;
}
.sec1{
    display: flex;
    gap: 1px;
    width: 100%;
    margin: 50px 30px 30px 90px ;
    justify-content: center;
}
.sec2{
    width: 100%;
    display: flex;
    gap: 15px;
   margin: 50px 50px 30px 30px ;
   justify-content: center;
}
/* .sec2-all{
    width: 90%;
    display: flex;
} */
.sec3{
    background-color: rgb(36, 49, 92);
    width: 100%;
    margin: 20px auto;
}
.sub-sec{
    width: 70%;
    display: flex;
    gap: 2px;
    margin: 45px auto ;
    padding: 20px;
}
@media screen and (max-width: 800px) {
    .service{
        width: 100%;
    }
    .sec1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 15px 20px;

    }
    .image{
        width: 90% !important;
    }
    .image img{
        width: 400px;
        height: 200px;
    }
    .mordern{
        width: 16rem !important;
    }
    .sec2{
        display: block;
    }
    .sec2 p{
        width: 17rem !important;
        margin-bottom: 10px;
    }
    .sub-sec{
        margin: 10px auto;
    }
    .sub-sec p{
        width: 15rem !important;
        /* margin-left: -20px; */
    }
    .all{
        margin-left: -54px;
    }
}


</style>