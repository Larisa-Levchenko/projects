<template>
   <header class="header" :class="{ 'header_active': active }">
      <div class="section section_flex">
         <div class="header__block">
            <div class="header__logo">
               <Logo />
            </div>
            <BurgerButton @toggleActive="toggleActive" :active="active" />
         </div>
         <nav class="header__nav">
            <a href="#" class="header__item"> О нас </a>
            <a href="#" class="header__item"> Услуги </a>
            <a href="#" class="header__item"> Проекты </a>
            <a href="#" class="header__item"> Блог </a>
            <a href="#" class="header__item"> Контакты </a>
         </nav>
      </div>
   </header>
</template>

<script>
import Logo from "@/components/blocks/Logo.vue";
import BurgerButton from "@/components/blocks/BurgerButton.vue";

export default {
   components: {
      Logo,
      BurgerButton
   },
   data() {
      return {
         active: false
      }
   },
   methods: {
      toggleActive() {
         this.active = !this.active
      }
   }
};
</script>
