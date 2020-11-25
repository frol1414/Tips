<template>
    <section class="verification-container">
        <div class="verification">
            <p class="verification__title">Введите код из СМС</p>
            <form class="form" @submit.prevent="submitHandler" name="verify">
                <label for="code_1" class="form__title">
                    СМС с кодом было отправлено на номер {{phone}}
                </label>
                <div class="form-inputs">
                    <input @input="nextElement" ref="code" type="text" maxlength="1" id="code_1" name="code_1" v-model="code1" required>
                    <input @input="nextElement" type="text" maxlength="1" id="code_2" name="code_2" v-model="code2" required>
                    <input @input="nextElement" type="text" maxlength="1" id="code_3" name="code_3" v-model="code3" required>
                    <input @input="submitHandler" type="text" maxlength="1" id="code_4" name="code_4" v-model="code4" required>
                </div>
                <button type="submit" class="btn btn-main auth-btn">Подтвердить</button>

                <p class="form-retry_code" v-if="!repeatCodeBtn">Запросите код повторно через {{timer}} сек.</p>
                <p class="form-retry_code repeat" v-else @click="repeatCode">Отправить код повторно</p>
            </form>
        </div>

        <p class="verification__skip" @click="$router.push('/tips/home')">Пропустить</p>
    </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "Verification",
    data() {
        return {
            repeatCodeBtn: false,
            code1: null,
            code2: null,
            code3: null,
            code4: null,
            timer: 100,
            phone: null,
        }
    },
    mounted() {
        this.phone = JSON.parse(sessionStorage.getItem('phone'))
        this.$refs.code.focus()
        this.interval()
    },
    methods: {
        ...mapActions({
            verify: 'auth/verify',
            fetchRepeatCode: 'auth/fetchRepeatCode',
        }),
        nextElement(event) {
            event.target.nextElementSibling.focus();
        },
        interval() {
            this.repeatCodeBtn = false
            this.timer = 100
            this.int = setInterval(() => {
                this.timer--
                if (this.timer <= 0) {
                    this.repeatCodeBtn = true
                    clearInterval(this.int)
                }
            }, 1000)
        },
        async repeatCode() {
            const res = await this.fetchRepeatCode()
            if (res) {
                await this.interval()
            }
        },
        async submitHandler() {
            const res = await this.verify({ code: `${this.code1}${this.code2}${this.code3}${this.code4}` })
            if (res.status) {
                await this.$router.push('/tips/home')
            }
        },
    },
}
</script>

<style scoped>
.verification {
    width: 550px;
    height: 445px;
    background: #FFFFFF;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 13px;
    margin: 10px auto 0 auto;
    animation: opacity .5s;
}
.verification__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #013E8C;
    padding: 18px 0;
    text-align: center;
}
.verification__skip {
    text-align: center;
    margin-top: 30px;
    color: #e0e0e0;
    cursor: pointer;
}
.form {
    border-top: 7px solid #013E8C;
}
.form__title {
    font-size: 16px;
    line-height: 19px;
    color: #81878E;
    text-align: center;
    margin-top: 50px;
}
.form-inputs {
    display: flex;
    justify-content: center;
    margin: 50px 0;
}
.form-inputs input {
    width: 56px;
    height: 91px;
    margin: 0 15px;
    border: 2px solid #013E8C;
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: bold;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    color: #013E8C;
}
.form-inputs input:focus {
    outline: none;
}
.auth-btn {
    margin: 0 auto 30px auto;
}
.form-retry_code {
    font-size: 16px;
    line-height: 19px;
    color: #81878E;
    margin-bottom: 30px;
    transition: .3s;
}
.form-retry_code.repeat {
    color: #013E8C;
    cursor: pointer;
}
@media (max-width: 480px) {
    .verification-container {
        width: 90%;
    }
    .verification {
        width: 100%;
        height: 445px;
        background: #FFFFFF;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border-radius: 13px;
        margin: 10px auto 0 auto;
        animation: opacity .5s;
    }
    .verification__title {
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #013E8C;
        padding: 18px 0;
        text-align: center;
    }
    .verification__skip {
        text-align: center;
        margin-top: 30px;
        color: #e0e0e0;
        cursor: pointer;
    }
    .form {
        border-top: 7px solid #013E8C;
    }
    .form__title {
        font-size: 16px;
        line-height: 19px;
        color: #81878E;
        text-align: center;
        margin-top: 50px;
    }
    .form-inputs {
        display: flex;
        justify-content: center;
        margin: 50px 0;
    }
    .form-inputs input {
        width: 56px;
        height: 91px;
        margin: 0 15px;
        border: 2px solid #013E8C;
        box-sizing: border-box;
        border-radius: 5px;
        font-weight: bold;
        font-size: 50px;
        line-height: 59px;
        text-align: center;
        color: #013E8C;
    }
    .form-inputs input:focus {
        outline: none;
    }
    .auth-btn {
        margin: 0 auto 30px auto;
    }
    .form-retry_code {
        font-size: 16px;
        line-height: 19px;
        color: #81878E;
        margin-bottom: 30px;
        transition: .3s;
    }
    .form-retry_code.repeat {
        color: #013E8C;
        cursor: pointer;
    }
}
</style>
