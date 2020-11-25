<template>
    <section class="questions">
        <p class="landing__title">Остались вопросы?</p>
        <button class="landing__btn" onclick="Chatra('openChat', true)">Написать нам</button>
    </section>
</template>

<script>

export default {
    name: "Question",
}
</script>

<style scoped>
    .questions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: url('./../../static/landing/questions-bg.webp') center no-repeat;
        background-size: cover;
        width: 100%;
        height: 417px;
        margin-top: 150px;
    }
    .landing__title {
        color: #FFFFFF;
        margin-bottom: 23px;
    }
    @media (max-width: 768px) {
        .questions {
            background-position: left top;
            height: 300px;
            margin-top: 90px;
        }
    }
    @media (max-width: 414px) {
        .questions {
            background-position: left top;
            background-size: cover;
            height: 170px;
            margin-top: 80px;
        }
        .landing__title {
            font-size: 26px;
            line-height: 32px;
        }
        .landing__btn {
            width: 156px;
            height: 26px;
            font-size: 10px;
            line-height: 12px;
            border-radius: 5px;
        }
    }
</style>
