<!--<template>-->
<!--    <section class="auth-container">-->
<!--        <div class="auth-tabs">-->
<!--            <a class="auth-tabs__item active">Авторизация</a>-->
<!--            <RouterLink to="/registration" class="auth-tabs__item">Регистрация</RouterLink>-->
<!--        </div>-->
<!--        <form class="auth-form" @submit.prevent="login">-->
<!--                <label class="phone-label" for="phone">Телефон<span class="phone-label-required">*</span></label>-->

<!--                <VuePhoneNumberInput class="phone-input" v-model="phone"-->
<!--                                     @update="results = $event"-->
<!--                                     id="phone"-->
<!--                                     default-country-code="RU"-->
<!--                                     no-example-->
<!--                                     no-validator-state-->
<!--                                     :translations="{-->
<!--                                          countrySelectorLabel: 'Выбор страны',-->
<!--                                          phoneNumberLabel: 'Номер телефона',-->
<!--                                          example: 'Пример :'-->
<!--                                        }"-->
<!--                                     :border-radius=10-->
<!--                                     error-color="#f13131"-->

<!--                                     :error="!$v.phone.required && $v.phone.$dirty"/>-->
<!--            <div class="error-field" v-if="!$v.phone.required && $v.phone.$dirty">-->
<!--                {{ $store.state.validations.required }}-->
<!--            </div>-->

<!--            <EvolAuthInput required label="Пароль" v-model="password" type="password"-->
<!--                           :error="!$v.password.required && $v.password.$dirty" form-group-w="100%"-->
<!--                            input-w="100%"/>-->
<!--            <div class="error-field" v-if="!$v.password.required && $v.password.$dirty">-->
<!--                {{ $store.state.validations.required }}-->
<!--            </div>-->

<!--            <div class="error-field" v-if="this.errors">-->
<!--                <div v-for="(el, idx) in errors" :key="idx">-->
<!--                    <p v-for="(item, idx) in el" :key="idx">{{item}}</p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <button type="submit" class="btn btn-main auth-btn">Авторизация</button>-->

<!--&lt;!&ndash;            <div class="login-social">&ndash;&gt;-->
<!--&lt;!&ndash;                <p class="login-social__title">Войти в систему с</p>&ndash;&gt;-->
<!--&lt;!&ndash;                <div id="uLogin" class="login-social__list">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="login-social__item">&ndash;&gt;-->
<!--&lt;!&ndash;                        <a href="'vkontakte'">&ndash;&gt;-->
<!--&lt;!&ndash;                            <img :src="'img/icons/social/fb.png'" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                        </a>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="login-social__item">&ndash;&gt;-->
<!--&lt;!&ndash;                        <a @click="AuthProvider('vkontakte')">&ndash;&gt;-->
<!--&lt;!&ndash;                            <img :src="'img/icons/social/vk.png'" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                        </a>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="login-social__item">&ndash;&gt;-->
<!--&lt;!&ndash;                        <a href="'google'">&ndash;&gt;-->
<!--&lt;!&ndash;                            <img :src="'img/icons/social/gp.png'" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                        </a>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="login-social__item">&ndash;&gt;-->
<!--&lt;!&ndash;                        <a href="'mailru'">&ndash;&gt;-->
<!--&lt;!&ndash;                            <img :src="'img/icons/social/mr.png'" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                        </a>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="login-social__item">&ndash;&gt;-->
<!--&lt;!&ndash;                        <a href="'yandex'">&ndash;&gt;-->
<!--&lt;!&ndash;                            <img :src="'img/icons/social/ydx.png'" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                        </a>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--        </form>-->
<!--    </section>-->
<!--</template>a-->

<!--<script>-->
<!--import EvolAuthInput from '@/components/EvolAuthInput';-->
<!--import { mapActions } from "vuex"-->
<!--import VuePhoneNumberInput from 'vue-phone-number-input';-->
<!--import 'vue-phone-number-input/dist/vue-phone-number-input.css';-->
<!--import { required } from 'vuelidate/lib/validators'-->

<!--export default {-->
<!--    name: 'Login',-->
<!--    data() {-->
<!--        return {-->
<!--            phone: null,-->
<!--            defaultCountryCode: null,-->
<!--            email: null,-->
<!--            password: null,-->
<!--            results: {},-->
<!--            errors: null,-->
<!--        }-->
<!--    },-->
<!--    mounted() {-->
<!--        window.addEventListener('message', this.onMessage, false);-->
<!--    },-->
<!--    beforeDestroy() {-->
<!--        window.removeEventListener('message', this.onMessage);-->
<!--    },-->
<!--    methods: {-->
<!--        ...mapActions({-->
<!--            signIn: 'auth/signIn',-->
<!--        }),-->
<!--        async login(e) {-->
<!--            e.preventDefault()-->
<!--            if (this.$v.$invalid) {-->
<!--                this.$v.$touch();-->
<!--                return;-->
<!--            }-->
<!--            const res = await this.signIn({ phone: this.phone, password: this.password, country_code: this.results.countryCode })-->
<!--            if (res && res.errors) {-->
<!--                this.errors = res.errors-->
<!--                return-->
<!--            }-->
<!--            await this.$router.push('/tips/home')-->
<!--        },-->
<!--        AuthProvider(provider) {-->
<!--            // eslint-disable-next-line no-use-before-define-->
<!--            const newWindow = openWindow('', 'message');-->
<!--            fetch(`http://mobile-api.test/api/login/${provider}`, { method: 'post', credentials: 'include' }).then(response => {-->
<!--                response.json().then(res => {-->
<!--                    newWindow.location.href = res.redirect_url-->
<!--                })-->
<!--            }).catch(err => {-->
<!--                console.log({ err })-->
<!--            });-->
<!--        },-->
<!--        onMessage(e) {-->
<!--            if (e.origin !== 'https://api2.evolpay.ru' || !e.data.token) {-->
<!--                return-->
<!--            }-->
<!--            localStorage.setItem('token', e.data.token);-->
<!--        },-->
<!--    },-->
<!--    validations: {-->
<!--        password: { required },-->
<!--        phone: { required },-->
<!--    },-->
<!--    components: {-->
<!--        EvolAuthInput,-->
<!--        VuePhoneNumberInput,-->
<!--    },-->
<!--}-->

<!--function openWindow(url, title, options = {}) {-->
<!--    let newOption = options;-->
<!--    let newUrl = url;-->
<!--    if (typeof newUrl === 'object') {-->
<!--        newOption = url-->
<!--        newUrl = ''-->
<!--    }-->
<!--    newOption = { newUrl, title, width: 600, height: 720, ...newOption }-->
<!--    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left-->
<!--    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top-->
<!--    const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width-->
<!--    const height = window.innerHeight || document.documentElement.clientHeight || window.screen.height-->
<!--    newOption.left = ((width / 2) - (newOption.width / 2)) + dualScreenLeft-->
<!--    newOption.top = ((height / 2) - (newOption.height / 2)) + dualScreenTop-->
<!--    const optionsStr = Object.keys(newOption).reduce((acc, key) => {-->
<!--        acc.push(`${key}=${options[key]}`)-->
<!--        return acc-->
<!--    }, []).join(',')-->
<!--    const newWindow = window.open(newUrl, title, optionsStr)-->
<!--    if (window.focus) {-->
<!--        newWindow.focus()-->
<!--    }-->
<!--    return newWindow-->
<!--}-->
<!--</script>-->
<!--<style scoped>-->
<!--.phone-input {-->
<!--    margin-bottom: 25px;-->
<!--}-->
<!--.phone-label {-->
<!--    width: 190px;-->
<!--    font-size: 14px;-->
<!--    line-height: 16px;-->
<!--    color: var(&#45;&#45;text-color);-->
<!--    margin: 0 auto 4px 0;-->
<!--}-->
<!--.phone-label-required {-->
<!--    margin-left: 5px;-->
<!--    color: #f13131;-->
<!--}-->
<!--.login-social__list {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    width: 270px;-->
<!--    margin-bottom: 65px;-->
<!--}-->
<!--.login-social__title {-->
<!--    font-size: 17px;-->
<!--    line-height: 20px;-->
<!--    text-align: center;-->
<!--    color: #7D7D7D;-->
<!--    margin-bottom: 16px;-->
<!--}-->
<!--.login-social__item {-->
<!--    margin: 0 8px;-->
<!--    width: 38px;-->
<!--    height: 38px;-->
<!--}-->
<!--.login-social__item img {-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--}-->
<!--@media (max-width: 320px) {-->
<!--    .login-social__list {-->
<!--        justify-content: center;-->
<!--        margin-bottom: 30px;-->
<!--    }-->
<!--    .login-social__item {-->
<!--        margin: 0 5px;-->
<!--        width: 30px;-->
<!--        height: 30px;-->
<!--    }-->
<!--}-->
<!--</style>-->
