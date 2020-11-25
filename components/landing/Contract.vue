<template>
    <section class="contract-container" :style="{top: !acceptBtn ? '0' : '-80px'}" @click="close">
        <div class="contract">
            <p class="contract__title">Пользовательское соглашение</p>
            <div class="contract-wrapper" :style="{height: !acceptBtn ? '90%' : '390px'}">
                <ContractText />
            </div>

            <div class="contract-input" v-if="acceptBtn">
                <span :class="{'contract-input__active': acceptConditions}">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0.799988L3.4 7.19999L1 4.79999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>

                <input id="accept" type="checkbox" v-model="acceptConditions">
                <label for="accept">Я принимаю условия Пользовательскоого соглашения</label>
            </div>

            <button v-if="acceptBtn" type="button" class="contract__btn" :disabled="!acceptConditions"
                    :class="{'contract__btn-disable': !acceptConditions}" @click="acceptContract">
                Принять
            </button>
        </div>

    </section>
</template>

<script>
import ContractText from "~/components/landing/ContractText";
import { mapActions } from 'vuex'

export default {
    name: "Contract.vue",
    data() {
        return {
            acceptConditions: false,
        }
    },
    props: {
        acceptBtn: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        ...mapActions(['fetchAcceptContract']),
        closeContract() {
            this.$emit('closeContract')
        },
        close() {
            if (!this.acceptBtn) {
                this.$emit('closeContract')
            }
        },
        async acceptContract() {
            const res = await this.fetchAcceptContract()
            res.code === 200 ? await this.closeContract() : null
        },
    },
    components: { ContractText },
}
</script>

<style scoped>
.contract-container {
    position: absolute;
    left: 0;
    right: 0;
    top: -80px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
    animation: opacity .3s ease;
}

.contract {
    position: absolute;
    padding: 30px;
    top: 85px;
    width: 100%;
    max-width: 680px;
    height: 640px;
    border-radius: 13px;
    animation: opacity .3s;
    z-index: 15;
    left: calc(50% - 345px);
    background: #FFFFFF;
}

.contract__title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 25px;
}

.contract-wrapper {
    margin-bottom: 30px;
    width: 100%;
    max-width: 620px;
    height: 390px;
    border: 1px solid #B9B9B9;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px 20px 10px 10px;
    overflow-y: auto;
}

.contract-input {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 30px;
}
.contract-input input {
    position: absolute;
    top: 0;
    left: 0;
    width: 19px;
    height: 19px;
    opacity: 0;
}

.contract-input span {
    width: 19px;
    height: 19px;
    border: 0.7px solid rgba(73, 73, 73, 0.3);
    box-sizing: border-box;
    border-radius: 3px;
    margin-right: 10px;
    cursor: pointer;
    position: relative;
}

.contract-input svg {
    position: absolute;
    top: 5px;
    left: 4px;
}

.contract-input__active {
    background: #013E8C;
}
.contract-input label {
    font-size: 14px;
    line-height: 16px;
    color: #494949;
    cursor: pointer;
}
.contract__btn {
    width: 190px;
    height: 45px;
    background: #82AFE6;
    border-radius: 13px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF !important;
    border: none;
    cursor: pointer;
    display: block;
    margin: 0 auto;
}
.contract__btn-disable {
    background: #D6E8FE;
    cursor: default;
}

@media (max-width: 768px) {
    .contract {
        position: absolute;
        top: 40px;
        width: 90%;
        max-width: 680px;
        height: 640px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
}
@media (max-width: 414px) {
    .contract {
        padding: 20px;
    }

    .contract-wrapper {
        padding: 10px 20px 0 10px;
    }
    .contract__title {
        font-size: 19px;
        line-height: 19px;
    }
    .contract-input label {
        font-size: 12px;
        line-height: 14px;
    }
}
</style>
