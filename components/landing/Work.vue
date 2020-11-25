<template>
    <section class="work">
        <p class="landing__title">Как работает сервис</p>

        <div class="tabs-content">
            <div v-show="currentTab === 1" class="tabs-content__item">
                <div class="left-block">
                    <p class="item__title"><span></span>Шаг 1</p>
                    <p class="item__desc">Отсканируйте QR-код или приложите смартфон с функцией NFC</p>
                </div>
                <div class="right-block">
                    <img src="~/static/landing/Step1.webp" alt="step1" width="auto" height="100%">
                </div>
            </div>

            <div v-show="currentTab === 2" class="tabs-content__item">
                <div class="left-block">
                    <p class="item__title"><span></span>Шаг 2</p>
                    <p class="item__desc">Введите сумму чаевых, оставьте комментарий и оплатите</p>
                </div>
                <div class="right-block">
                    <img src="~/static/landing/Step2.webp" alt="step1">
                </div>
            </div>

            <div v-show="currentTab === 3" class="tabs-content__item">
                <div class="left-block">
                    <p class="item__title"><span></span>Шаг 3</p>
                    <p class="item__desc">Готово! Вы отправили чаевые</p>
                </div>
                <div class="right-block">
                    <img src="~/static/landing/Step3.webp" alt="step1">
                </div>
            </div>
        </div>

        <div class="tabs-buttons">
            <div :class="{'tab-active': currentTab === 1}" @click="currentTab = 1">Шаг 1</div>
            <div :class="{'tab-active': currentTab === 2}" @click="currentTab = 2">Шаг 2</div>
            <div :class="{'tab-active': currentTab === 3}" @click="currentTab = 3">Шаг 3</div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Work",
    data() {
        return {
            currentTab: 1,
        }
    },
}
</script>

<style scoped>
    .landing__title {
        margin: 75px 0 55px 70px;
    }
    .tabs-buttons {
        height: 70px;
        width: 100%;
        max-width: 1155px;
        display: flex;
        background: #FFFFFF;
        box-shadow: 0 2px 9px 1px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin: 0 auto 130px auto;
    }
    .tabs-buttons div {
        width: 100%;
        max-width: 385px;
        height: 100%;
        font-weight: 500;
        font-size: 21px;
        line-height: 25px;
        color: #306DBA;
        display: flex;
        justify-content: center;
        cursor: pointer;
        box-sizing: border-box;
        padding-top: 23px;
        -webkit-tap-highlight-color: transparent;
    }
    .tab-active {
        border-bottom: 7px solid #306DBA;
        transition: .1s;
    }
    .tabs-content {
        height: auto;
        width: 100%;
        max-width: 1155px;
        margin: 0 auto 90px auto;
    }
    .tabs-content__item {
        display: flex;
        animation: opacity .3s;
    }
    .left-block {
        width: 60%;
    }
    .right-block {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right-block img {
        height: 100%;
    }
    .item__title {
        font-weight: 600;
        font-size: 55px;
        line-height: 67px;
        color: #494949;
        margin: 150px 0 14px 0;
    }
    .item__title span {
        display: inline-block;
        width: 14px;
        height: 14px;
        background: #306DBA;
        margin: 0 13px 10px 0;
        border-radius: 100%;
    }
    .item__desc {
        font-size: 30px;
        line-height: 37px;
        color: #8E9092;
        padding-left: 28px;
    }
    @media (max-width: 768px) {
        .work {
            padding: 0 30px;
        }
        .landing__title {
            margin: 75px 0 50px 0;
        }
        .tabs-buttons {
            margin: 0 auto 100px auto;
        }
        .tabs-content {
            margin: 0 auto 50px auto;
        }
        .tabs-content__item {
            flex-direction: column;
            align-items: center;
        }
        .left-block {
            width: 100%;
            order: 2;
        }
        .right-block {
            order: 1;
            width: 100%;
        }
        .item__title {
            font-size: 37px;
            line-height: 37px;
            margin: 60px 0 14px 0;
        }
        .item__title span {
            width: 12px;
            height: 12px;
            margin: 0 13px 5px 0;
        }
        .item__desc {
            font-size: 25px;
            line-height: 28px;
        }
    }
    @media (max-width: 414px) {
        .work {
            padding: 0 25px;
        }
        .landing__title {
            margin: 45px 65px 25px 0;
        }
        .tabs-buttons {
            height: 45px;
            margin: 0 auto 70px auto;
        }
        .tabs-buttons div {
            max-width: 385px;
            font-size: 12px;
            line-height: 14px;
            padding-top: 16px;
        }
        .tabs-content {
            margin: 0 auto 35px auto;
        }
        .left-block {
            height: 100px;
        }
        .right-block img {
            max-height: 290px;
        }
        .item__title {
            font-size: 27px;
            line-height: 33px;
            margin: 20px 0 7px 0;
        }
        .item__title span {
            width: 7px;
            height: 7px;
            margin: 0 13px 5px 0;
        }
        .item__desc {
            font-size: 15px;
            line-height: 18px;
        }
    }
</style>
