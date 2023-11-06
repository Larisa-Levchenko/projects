<template>
    <footer class="footer">
        <div class="section section_flex">
            <div class="footer__info">
                <div class="footer__logo">
                    <Logo />
                </div>
                <span class="footer__item">
                    Web and machine learning developing company
                </span>
            </div>
            <nav class="footer__nav">
                <a class="footer__item" href="tel:+7 499 679 45 79">
                    +7 499 679 45 79
                </a>
                <a class="footer__item" href="mailto:hello@cyberia.ru">
                    hello@cyberia.ru
                </a>
                <a class="footer__item" target="_blank" href="https://goo.gl/maps/DqEWmDY4u7WXbW6P9">
                    Улица 144, оф. 11
                </a>
                <a href="#" class="footer__item"> Главная</a>
                <a href="#" class="footer__item"> Услуги </a>
                <a href="#" class="footer__item"> Проекты </a>
                <a href="#" class="footer__item"> Блог </a>
                <a href="#" class="footer__item"> О нас </a>
                <a href="#" class="footer__item"> Команда </a>
            </nav>
            <div class="footer__copyright">
                <span class="footer__item">
                    2022, digital-агентство Cyberia
                </span>
                <a href="#" class="footer__item">
                    Положение о защите персональных данных
                </a>
                <a href="#" class="footer__item">
                    Политика в отношении обработки &shy; и защиты персональных данных
                </a>
                <a href="#" class="footer__item">
                    Оферта оказания услуг
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from "@/components/blocks/Logo.vue";

export default {
    components: {
        Logo,
    },
};
</script>
