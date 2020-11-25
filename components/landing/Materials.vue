<template>
    <section class="materials">
        <p class="landing__title">Материалы</p>

        <div class="materials-item" :class="{'reverse': el.reverse}" v-for="el in getMaterials" :key="el.id">
            <div class="materials-item__img-block">
                <img :src="`/img/landing/${el.img}.webp`" :alt="'{{el.img}}'" width="auto" height="100">
            </div>
            <div class="materials-item__title-block">
                <p class="materials-item__title">{{el.title}}</p>
                <p class="materials-item__desc">{{el.desc}}</p>
            </div>
        </div>

    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Materials",
    computed: {
        ...mapGetters(['getMaterials']),
    },
}
</script>

<style scoped>
    .landing__title {
        margin-bottom: 70px;
        text-align: center;
    }
    .materials {
        padding: 0 100px;
    }
    .materials-item {
        display: flex;
        margin-bottom: 50px;
    }
    .materials-item.reverse {
        flex-direction: row-reverse;
    }
    .materials-item__img-block {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .materials-item__img-block img {
        height: 100%;
    }
    .materials-item__title-block {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
    }
    .materials-item__title {
        font-weight: 600;
        font-size: 55px;
        line-height: 67px;
        color: #494949;
        margin-bottom: 15px;
    }
    .materials-item__desc {
        font-size: 30px;
        line-height: 37px;
        color: #8E9092;
    }
    @media (max-width: 768px) {
        .landing__title {
            margin-bottom: 30px;
        }
        .materials {
            padding: 0 35px;
        }
        .materials-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 40px;
        }
        .materials-item.reverse {
            flex-direction: column;
            align-items: center;
        }
        .materials-item__img-block {
            order: 2;
            width: 100%;
        }
        .materials-item__img-block img {
            height: 100%;
            max-height: 380px;
        }
        .materials-item__title-block {
            order: 1;
            width: 100%;
        }
        .materials-item__title {
            font-size: 35px;
            line-height: 39px;
            margin-bottom: 15px;
        }
        .materials-item__desc {
            font-size: 23px;
            line-height: 27px;
            margin-right: 50px;
        }
    }
    @media (max-width: 414px) {
        .materials {
            padding: 0 25px;
        }
        .materials-item {
            margin-bottom: 15px;
        }
        .materials-item__img-block img {
            max-height: 280px;
        }
        .materials-item__title-block {
            padding-left: 10px;
            margin-bottom: 20px;
        }
        .materials-item__title {
            font-size: 27px;
            line-height: 33px;
            margin-bottom: 8px;
        }
        .materials-item__desc {
            font-size: 15px;
            line-height: 18px;
            margin-right: 20px;
        }
    }
    @media (max-width: 320px) {
        .materials {
            padding: 0 15px;
        }
        .materials-item__img-block img {
            max-height: 220px;
        }
        .materials-item__title-block {
            padding-left: 10px;
            margin-bottom: 10px;
        }
    }
</style>
