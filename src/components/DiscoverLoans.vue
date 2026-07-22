<template>
     <section class="loan-panels">
    <div
      v-for="(item, index) in loans"
      :key="index"
      class="panel"
      :style="{ backgroundImage: `url(${item.image})` }"
    >
      <div class="overlay"></div>

      <div class="content">
        <h3>
          <span class="number">{{ item.number }}</span>
          {{ item.title }}
        </h3>

        <div class="extra">
          <p>{{ item.description }}</p>
          <button>Find Out More</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loans: [
        {
          number: "01.",
          title: "Personal Loan",
          description: "But that’s not the kind of attention you want, is it?",
          image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
        },
        {
          number: "02.",
          title: "Business Loan",
          description: "Flexible funding for growing companies.",
          image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
        },
        {
          number: "03.",
          title: "Education Loan",
          description: "Invest in your future education today.",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        },
        {
          number: "04.",
          title: "Commercial Loan",
          description: "Financing for large scale operations.",
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
        },
        {
          number: "05.",
          title: "Health Loan",
          description: "Support for medical and healthcare needs.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
        }
      ]
    }
  }
}
</script>

<style  scoped>
.loan-panels {
  display: flex;
  height: 420px;
  overflow: hidden;
}

.panel {
  flex: 1;
  position: relative;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: flex 0.4s ease;
}


.panel:hover {
  flex: 1.4;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(12, 26, 54, 0.65);
  transition: background 0.3s ease;
}

.panel:hover .overlay {
  background: rgba(12, 26, 54, 0.8);
}

.content {
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  color: white;
  z-index: 2;
}

h3 {
  font-weight: 600;
  font-size: 22px;
}

.number {
  color: #8cc63f;
  margin-right: 6px;
}

.extra {
  margin-top: 12px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.35s ease;
}

.panel:hover .extra {
  opacity: 1;
  transform: translateY(0);
}

.extra p {
  font-size: 14px;
  margin-bottom: 14px;
  max-width: 240px;
}

button {
  border: none;
  background: transparent;
  color: white;
  font-weight: 600;
  border-bottom: 2px solid #8cc63f;
  padding-bottom: 4px;
  cursor: pointer;
}







@media screen and (max-width: 1024px) {

.loan-panels{
  flex-wrap: wrap;
  height: auto;
}

.panel{
  flex: 1 1 50%;
  height: 260px;
}

.panel:hover{
  flex: 1 1 50%;
}

}




@media screen and (max-width: 768px) {

.loan-panels{
  flex-direction: column;
  height: auto;
}

.panel{
  flex: none;
  width: 100%;
  height: 220px;
}

.panel:hover{
  flex: none;
}

.content{
  bottom: 20px;
  left: 20px;
  right: 20px;
}

h3{
  font-size: 18px;
}

.extra p{
  max-width: 100%;
}

}


@media screen and (max-width: 300px){

.content{
  bottom: 15px;
}

h3{
  font-size: 16px;
}

.extra p{
  font-size: 13px;
}

button{
  font-size: 13px;
}

}

</style>