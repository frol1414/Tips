<template>
    <section>
        <p class="landing__title">Для кого</p>

        <div class="users-list">
<!--            <div v-for="el in getUsers" :key="el.id" class="user__item">-->
<!--                <img :src="`/img/landing/user${el.id}.webp`" alt="step1">-->
<!--                <p>{{ el.title }}</p>-->
<!--            </div>-->
        </div>
        <p class="users-desc">и для многих других</p>

    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Users",
    data() {
        return {

        }
    },
    computed: {
        // ...mapGetters(['getUsers']),
    },
}
</script>

<style  scoped>
    .landing__title {
        margin-bottom: 55px;
        text-align: center;
    }
    .users-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        max-width: 1110px;
    }
    .user__item {
        max-width: 350px;
        margin: 10px;
        position: relative;
    }
    .users-desc {
        font-weight: 600;
        font-size: 35px;
        line-height: 43px;
        text-align: center;
        color: #494949;
        margin-bottom: 60px;
    }
    .user__item p {
        font-weight: 600;
        font-size: 38px;
        line-height: 46px;
        color: #ffffff;
        position: absolute;
        bottom: 12px;
        left: 32px;
    }
    .user__item img {
        border-radius: 5px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
        transition: .5s;
    }
    .user__item:hover img {
        transform: scale(1.05);
        transition: .5s;
    }
</style>
