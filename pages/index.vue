<template>
    <main v-if="!loading">
        <Contract v-if="termsOfUse" :accept-btn="false" @closeContract="termsOfUse = false"/>
        <Header />
        <Start ref="start" />
        <Work />
        <Users class="user" />
<!--        <Users1 class="mobile-user" />-->
        <Price />
        <Materials />
        <Questions />
        <Footer @openTermsOfUse="openTermsOfUse" />
    </main>
</template>

<script>
import Header from "~/components/landing/Header";
import Start from "~/components/landing/Start";
import Work from "~/components/landing/Work";
import Users from "~/components/landing/Users";
// import Users1 from "~/components/landing/Users1";
import Price from "~/components/landing/Price";
import Materials from "~/components/landing/Materials";
import Questions from "~/components/landing/Questions";
import Footer from "~/components/landing/Footer";
import Contract from "~/components/landing/Contract";

export default {
    name: 'Landing',
    data() {
        return {
            loading: true,
            termsOfUse: false,
        }
    },
    async mounted() {
        await this.mountChatra(document, window, 'Chatra')
        this.loading = false
    },
    components: {
        Header,
        Start,
        Work,
        Users,
        // Users1,
        Price,
        Materials,
        Questions,
        Footer,
        Contract,
    },
    methods: {
        openTermsOfUse() {
            const top = window.scrollY + this.$refs.start
            window.scrollTo(0, top)
            this.termsOfUse = true
        },
        mountChatra(d, w, c) {
            w.ChatraID = 'DZxjAri5Thit3pr2K';
            const s = d.createElement('script');
            w[c] = w[c] || function () {
                (w[c].q = w[c].q || []).push(arguments);
            };
            s.async = true;
            s.src = 'https://call.chatra.io/chatra.js';
            if (d.head) d.head.appendChild(s);
        },
    },
}
</script>
<style scoped>
.mobile-user {
    display: none;
}
@media (max-width: 768px) {
    .user {
        display: none;
    }
    .mobile-user {
        display: block;
    }
}
</style>
