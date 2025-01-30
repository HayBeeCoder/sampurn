<template>
  <section class="wrapper hero-gradient">
    <img src="@/assets/sampurn-logo.png" alt="Sampurn's logo" class="hero-logo" />
    <p class="hero-tagline">Master Trading: Your Journey to Financial Journey starts here</p>
    <button class="btn hero-btn btn-default-font yellow-orange-gradient">
      <p class="btn-mask-gradient">

        ENROL NOW
      </p>
    </button>
  </section>
</template>

<style scoped>

.btn p{

  font-size: 1rem;
  font-weight: 700;


}

.btn{
  padding: 0.8em 2em;
  border-radius: 0.6em;
}


.hero-btn{
  margin-top: 2em;
}


.btn-default-font{
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.4rem;
}
.wrapper {
  min-height: 100vh;
  /* background: purple; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.hero-logo{
  width: 300px;
}

.hero-tagline{
  font-size: 1.2rem;

  width: 80%;
  max-width: 420px;
  text-align: center;
  color: #D9D9D9;
}

@media (min-width: 369px){

}

@media (min-width: 768px){
  .hero-logo{
    width: 400px;
  }
}

@media (min-width: 969px){

}

</style>
