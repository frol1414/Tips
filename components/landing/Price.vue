<template>
    <section>
        <p class="landing__title">Сколько это стоит</p>
        <div class="price-list">
            <div class="price-item">
                <p class="price-item__title">Подключение</p>
                <span></span>
                <p class="price-item__price">Бесплатно</p>
                <p class="price-item__desc">Подключиться может абсолютно каждый и совершенно бесплатно</p>
            </div>

            <div class="price-item">
                <p class="price-item__title">Комиссия</p>
                <span></span>
                <p class="price-item__price">5%</p>
                <p class="price-item__desc">Пять процентов от поступивших чаевых. Никаких дополнительных платежей или абонентской платы.</p>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: "Price",
    data() {
        return {
        }
    },
}
</script>

<style scoped>
    .landing__title {
        margin-bottom: 70px;
        text-align: center;
    }
    .price-list {
        display: flex;
        margin: 0 auto 130px auto;
        max-width: 820px;
    }
    .price-item {
        width: 100%;
        max-width: 350px;
        height: 310px;
        margin: 30px;
        background: #FFFFFF;
        box-shadow: 0 2px 9px 1px rgba(0, 0, 0, 0.12);
        border-radius: 3px;
    }
    .price-item__title {
        font-weight: 500;
        font-size: 21px;
        line-height: 25px;
        text-align: center;
        color: #306DBA;
        margin: 25px 0 17px 0;
    }
    .price-item span {
        display: block;
        width: 100%;
        height: 8px;
        background: #306DBA;
    }
    .price-item__price {
        font-weight: 600;
        font-size: 45px;
        line-height: 55px;
        color: #494949;
        text-align: center;
        margin: 29px 0 41px 0;
    }
    .price-item__desc {
        font-size: 20px;
        line-height: 24px;
        color: #616161;
        /*color: #8E9092;*/
        margin: 0 0 36px 16px;
    }
    @media (max-width: 768px) {
        .landing__title {
            margin-bottom: 10px;
        }
        .price-list {
            justify-content: center;
            margin: 0 auto 100px auto;
            max-width: 820px;
        }
        .price-item {
            max-width: 310px;
            height: 270px;
            margin: 20px;
        }
        .price-item__title {
            font-size: 20px;
            line-height: 24px;
            margin: 20px 0 14px 0;
        }
        .price-item span {
            height: 6px;
        }
        .price-item__price {
            font-size: 35px;
            line-height: 43px;
            margin: 20px 0 30px 0;
        }
        .price-item__desc {
            font-size: 20px;
            line-height: 24px;
            margin: 0 0 28px 13px;
            padding: 0 5px;
        }
    }
    @media (max-width: 414px) {
        .price-list {
            flex-direction: column;
            align-items: center;
            justify-content: normal;
            margin: 0 auto 70px auto;
        }
        .price-item {
            max-width: 280px;
            height: 245px;
            margin: 20px;
        }
        .price-item__title {
            font-size: 16px;
            line-height: 19px;
        }
        .price-item__price {
            font-size: 35px;
            line-height: 43px;
            margin: 25px 0 25px 0;
        }
        .price-item__desc {
            font-size: 16px;
            line-height: 19px;
            margin: 0 0 28px 13px;
            padding: 0 5px;
        }
    }
</style>
