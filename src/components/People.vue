<template>
    <div>
        <h1 style="text-align: center;">
            Why People Choose Us
        </h1>
        <p style="text-align: center; color: black;">
            This question should make the viewer want to open the brochure to learn more.
        </p>

    </div>
    <div class="all">
        <div class="option">
            <img style="" src="../assets/images/day.png" alt="">
            <h1>
                Quick & Easy
            </h1>
            <p>
                Typography should be relevant and thought out. Type is so strong that it can
            </p>
        </div>
        <div class="option">
            <img src="../assets/images/security.png" alt="">
            <h1>
                Absolute Security
            </h1>
            <p>
                Typography should be relevant and thought out. Type is so strong that it can
            </p>
        </div>
        <div class="option">
            <img src="../assets/images/approval.png" alt="">
            <h1>
                Quick Approval
            </h1>
            <p>
                Typography should be relevant and thought out. Type is so strong that it can
            </p>
        </div>
        <div class="option">
            <img src="../assets/images/intrest.png" alt="">
            <h1>
                Low Interest Rates
            </h1>
            <p>
                Typography should be relevant and thought out. Type is so strong that it can
            </p>
        </div>
        <div class="option">
            <img src="../assets/images/personal.png" alt="">
            <h1>
                Personal Security
            </h1>
            <p>
                Typography should be relevant and thought out. Type is so strong that it can
            </p>
        </div>
        <div class="option">
            <img src="../assets/images/day.png" alt="">
            <h1>
                Disbursement Day
            </h1>
            <p>
                Typography should be relevant and thought out. Type is so strong that it can
            </p>
        </div>
    </div>
    <div class="form-section">
    <div class="call-back">
        <div class="request">
            <h1 style="color: white;">Request A Call Back</h1>
            <p style="color: white;">Posters had been a very beneficial marketing tool because it had paved to deliver an effective message that conveyed customer’s attention.</p>
            <p style="color: white; border-bottom: 2px solid rgb(136, 196, 24); width: 100px;">
                CONTACT  US
            </p>
        </div>
        <div >
            <div class="form">
            <input type="text" placeholder="Name" style="padding: 10px; background-color: white;">
            <input type="text" placeholder="Email" style="padding: 10px; background-color: white;">
            </div>
            <div class="form">
            <input type="text" placeholder="Phone" style="padding: 10px; background-color: white;">
            <input type="text" placeholder="Services" style="padding: 10px; background-color: white;">
            </div>
            <button style="padding: 10px; width: 100px; background-color: rgb(136, 196, 24); border: none; margin-left: 10px;">
                Submit
            </button>
            </div>
    
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.option{
    width: 25%;
    border: 1px solid black;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px -1px rgba(0,0.3,0.2,0.5),0 3px 4px -1px rgba(0.4,0,0,0.06);
}
.all{
    width: 80%;
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    margin: 30px 170px;
}
.request{
    width: 40%;
}
.call-back{
    width: 80%;
    display: flex;
    margin: 20px auto;
    gap: 50px;
    /* background-color: rgb(45, 57, 102); */
}
.form{
display: flex;
gap: 20px;
padding: 10px;
}
.form-section{
    background-color: rgb(45, 57, 102);
    width: 100%;
    padding: 20px;

}
@media screen and (max-width: 800px) {
    .all{
        display: block;
    }
    .option{
        width: 100%;
        margin: 20px -120px;
        justify-content: center;
    }
    .call-back{
        display: block;
    }
    .request{
        width: 100%;
        margin-bottom: 20px;
    }
    .form{
        display:flex;
        flex-direction: column;
        padding: 10px;
        gap: 20px;
    }
    .form-section{
        width: 100%;
    }
    
}

</style>