<!--<template>-->
<!--    <section class="auth-container">-->
<!--        <div class="auth-tabs">-->
<!--            <RouterLink to="/login" class="auth-tabs__item">Авторизация</RouterLink>-->
<!--            <a class="auth-tabs__item active">Регистрация</a>-->
<!--        </div>-->
<!--        <form class="auth-form" @submit="registration">-->
<!--            <EvolAuthInput required label="Фамилия" v-model="values.last_name"-->
<!--                           :error="!$v.values.last_name.required && $v.values.last_name.$dirty"-->
<!--                           form-group-w="100%" input-w="100%"/>-->
<!--&lt;!&ndash;            <div class="error-field" v-if="!$v.values.last_name.required && $v.values.last_name.$dirty">&ndash;&gt;-->
<!--&lt;!&ndash;                {{ $store.state.validations.required }}&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--            <EvolAuthInput required label="Имя" v-model="values.first_name"-->
<!--                           :error="!$v.values.first_name.required && $v.values.first_name.$dirty"-->
<!--                           form-group-w="100%" input-w="100%"/>-->
<!--&lt;!&ndash;            <div class="error-field" v-if="!$v.values.first_name.required && $v.values.first_name.$dirty">&ndash;&gt;-->
<!--&lt;!&ndash;                {{ $store.state.validations.required }}&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--            <EvolAuthInput label="Отчество" v-model="values.middle_name" form-group-w="100%" input-w="100%" />-->

<!--&lt;!&ndash;            <EvolAuthInput required label="Телефон" v-model="values.phone"&ndash;&gt;-->
<!--&lt;!&ndash;                           :error="!$v.values.phone.required && $v.values.phone.$dirty"/>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="error-field" v-if="!$v.values.phone.required && $v.values.phone.$dirty">&ndash;&gt;-->
<!--&lt;!&ndash;                {{ $store.state.validations.required }}&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--            <label class="phone-label" for="phone">Телефон<span class="phone-label-required">*</span></label>-->

<!--            <VuePhoneNumberInput class="phone-input" v-model="values.phone"-->
<!--                                 @update="results = $event"-->
<!--                                 id="phone"-->
<!--                                 default-country-code="RU"-->
<!--                                 :translations="{-->
<!--                                          countrySelectorLabel: 'Выбор страны',-->
<!--                                          phoneNumberLabel: 'Номер телефона',-->
<!--                                          example: 'Пример :'-->
<!--                                        }"-->
<!--                                 :border-radius=10-->
<!--                                 error-color="#f13131"-->

<!--                                 :error="!$v.values.phone.required && $v.values.phone.$dirty"/>-->
<!--            <div class="error-field" v-if="!$v.values.phone.required && $v.values.phone.$dirty">-->
<!--                {{ $store.state.validations.required }}-->
<!--            </div>-->

<!--            <EvolAuthInput label="E-mail" v-model="values.email" form-group-w="100%" input-w="100%" />-->

<!--            <EvolAuthInput label="Промо" v-model="values.referral_code" form-group-w="100%" input-w="100%" />-->

<!--            <EvolAuthInput required label="Пароль" v-model="values.password" type="password"-->
<!--                           :error="!$v.values.password.required && $v.values.password.$dirty"-->
<!--                           form-group-w="100%" input-w="100%"/>-->
<!--            <div class="error-field" v-if="!$v.values.password.required && $v.values.password.$dirty">-->
<!--                {{ $store.state.validations.required }}-->
<!--            </div>-->

<!--            <EvolAuthInput required label="Подтверждение пароля" v-model="values.password_confirmation" type="password"-->
<!--                           :error="!$v.values.password_confirmation.sameAsPassword && $v.values.password_confirmation.$dirty ||-->
<!--                            !$v.values.password_confirmation.required && $v.values.password_confirmation.$dirty"-->
<!--                           form-group-w="100%" input-w="100%"/>-->
<!--            <div class="error-field" v-if="!$v.values.password_confirmation.required && $v.values.password_confirmation.$dirty">-->
<!--                {{ $store.state.validations.required }}-->
<!--            </div>-->

<!--            <div class="error-field" v-if="!$v.values.password_confirmation.sameAsPassword && $v.values.password_confirmation.$dirty">-->
<!--                Поле "Пароль" и "Подтверждение пароля" не совпадают-->
<!--            </div>-->
<!--&lt;!&ndash;            <button @click="recaptcha">Execute recaptcha</button>&ndash;&gt;-->
<!--            <div class="error-field" v-if="this.errors">-->
<!--                <div v-for="(el, idx) in errors" :key="idx">-->
<!--                    <p v-for="(item, idx) in el" :key="idx">{{item}}</p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <button type="submit" class="btn btn-main auth-btn">Регистрация</button>-->
<!--        </form>-->
<!--    </section>-->
<!--</template>-->

<!--<script>-->
<!--import EvolAuthInput from '@/components/EvolAuthInput';-->
<!--import VuePhoneNumberInput from 'vue-phone-number-input';-->
<!--import 'vue-phone-number-input/dist/vue-phone-number-input.css';-->
<!--import { mapActions } from "vuex";-->
<!--import { required, sameAs } from 'vuelidate/lib/validators'-->

<!--export default {-->
<!--    name: 'Registration',-->
<!--    data() {-->
<!--        return {-->
<!--            values: {-->
<!--                last_name: null,-->
<!--                first_name: null,-->
<!--                middle_name: null,-->
<!--                phone: null,-->
<!--                email: ' ',-->
<!--                referral_code: null,-->
<!--                password: null,-->
<!--                password_confirmation: null,-->
<!--            },-->
<!--            results: {},-->
<!--            errors: null,-->
<!--        }-->
<!--    },-->
<!--    methods: {-->
<!--        ...mapActions({-->
<!--            register: 'auth/register',-->
<!--        }),-->
<!--        async registration(e) {-->
<!--            e.preventDefault()-->

<!--            if (this.values.password !== this.values.password_confirmation) {-->
<!--                this.$v.$touch();-->
<!--                return;-->
<!--            }-->

<!--            if (this.$v.$invalid) {-->
<!--                this.$v.$touch();-->
<!--                return;-->
<!--            }-->
<!--            const res = await this.register({ ...this.values, country_code: this.results.countryCode })-->
<!--            if (res && res.errors) {-->
<!--                this.errors = res.errors-->
<!--                return-->
<!--            }-->
<!--            sessionStorage.setItem('phone', JSON.stringify(`${this.results.formatInternational}`))-->
<!--            await this.$router.push('/verification')-->
<!--        },-->
<!--        async recaptcha() {-->
<!--            await this.$recaptchaLoaded()-->
<!--            await this.$recaptcha('login')-->
<!--            const recaptcha = this.$recaptchaInstance-->
<!--            recaptcha.hideBadge()-->
<!--        },-->
<!--    },-->
<!--    validations() {-->
<!--        return {-->
<!--            values: {-->
<!--                last_name: { required },-->
<!--                first_name: { required },-->
<!--                phone: { required },-->
<!--                password: { required },-->
<!--                password_confirmation: {-->
<!--                    required,-->
<!--                    sameAsPassword: sameAs('password'),-->
<!--                },-->
<!--            },-->
<!--        }-->
<!--    },-->
<!--    components: { EvolAuthInput, VuePhoneNumberInput },-->
<!--}-->
<!--</script>-->
<!--<style scoped>-->
<!--    .phone-input {-->
<!--        margin-bottom: 25px;-->
<!--    }-->
<!--    .phone-label {-->
<!--        width: 190px;-->
<!--        font-size: 14px;-->
<!--        line-height: 16px;-->
<!--        color: var(&#45;&#45;text-color);-->
<!--        margin: 0 auto 4px 0;-->
<!--    }-->
<!--    .phone-label-required {-->
<!--        margin-left: 5px;-->
<!--        color: #f13131;-->
<!--    }-->
<!--</style>-->
