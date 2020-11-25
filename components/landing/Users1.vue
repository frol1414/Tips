<template>
    <section>
        <p class="landing__title">Для кого</p>

        <VueSlickCarousel v-bind="settings">
<!--            <div v-for="el in getUsers" :key="el.id" class="user__item">-->
<!--                <img :src="`/img/landing/user${el.id}.webp`" alt="step1">-->
<!--                <p>{{ el.title }}</p>-->
<!--            </div>-->

            <template #customPaging="page">
                <div class="custom-dot" >
                    <p>{{ page }}</p>
                </div>
            </template>
        </VueSlickCarousel>

        <p class="users-desc">и для многих других</p>

    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: "Users1",
    data() {
        return {
            settings: {
                arrows: false,
                "centerMode": true,
                "centerPadding": "20px",
                "focusOnSelect": true,
                "infinite": true,
                "slidesToShow": 3,
                "dots": true,
                "slidesToScroll": 1,
                "autoplay": true,
                "autoplaySpeed": 3000,
                "cssEase": "linear",
                "adaptiveHeight": true,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": true,
                        },
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2,
                        },
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                        },
                    },
                ],
            },
        }
    },
    computed: {
        // ...mapGetters(['getUsers']),

    },
    components: {
        VueSlickCarousel,
    },

}
</script>

<style  scoped>
    .slick-slider .slick-list .slick-track {
        height: 400px;
    }
    .slick-active .custom-dot {
        width: 13px;
        height: 13px;
        margin: 13px 3px 0 0;
        transition: .1s;
    }
    .landing__title {
        margin-bottom: 55px;
        text-align: center;
    }
    .user__item {
        max-width: 350px;
        margin: 0 auto;
        padding: 50px 0;
        position: relative;
        transition: .5s;
    }
    .user__item:focus {
        outline: none;
    }
    .user__item img {
        width: 90%;
        margin: 0 auto;
        border-radius: 3px;
    }
    .user__item p {
        font-weight: 600;
        font-size: 31px;
        line-height: 35px;
        color: #ffffff;
        position: absolute;
        bottom: 20%;
        left: 20px;
    }
    .slick-current div div {
        transform: scale(1.6);
        transition: .5s;
        z-index: 100;
    }
    .custom-dot {
        width: 8px;
        height: 8px;
        background: #306DBA;
        margin: 15px 3px 0 3px;
        border-radius: 100%;
    }
    .custom-dot p {
        display: none;
    }
    .users-desc {
        font-weight: 600;
        text-align: center;
        color: #494949;
        font-size: 35px;
        line-height: 43px;
        margin: 40px 0 80px 0;
    }
    @media (max-width: 414px) {
        .landing__title {
            margin-bottom: 20px;
        }
        .user__item {
            max-width: none;
            display: block;
        }
        .user__item p {
            font-size: 15px;
            line-height: 35px;
            bottom: 21%;
            left: 13px;
        }
        .users-desc {
            font-size: 25px;
            line-height: 29px;
            margin: 40px 0;
        }
    }
</style>
