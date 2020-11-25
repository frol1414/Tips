<template>
    <header class="header" :class="{'dropdown': dropdown}">
        <ul class="header-list" :class="{'dropdown': dropdown}">
            <li class="header-list__item">Получателям</li>
            <li class="header-list__item">О сервисе</li>
            <li class="header-list__item">Помощь</li>
        </ul>
        <div class="header-wrapper">
            <svg class="header-burger" :class="{'dropdown': dropdown}" width="32" height="21" viewBox="0 0 32 21" fill="none"
                 xmlns="http://www.w3.org/2000/svg" @click="showDropdown">
                <path d="M2 2H29.4615" stroke="#ffffff" stroke-width="3.92308" stroke-miterlimit="10"
                      stroke-linecap="round"/>
                <path d="M2 10.5H29.4615" stroke="#ffffff" stroke-width="3.92308" stroke-miterlimit="10"
                      stroke-linecap="round"/>
                <path d="M2 19H29.4615" stroke="#ffffff" stroke-width="3.92308" stroke-miterlimit="10"
                      stroke-linecap="round"/>
            </svg>

            <svg class="header-logo" width="127" height="31" viewBox="0 0 127 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M120.621 25.1818C119.496 25.1818 118.396 25.0346 117.323 24.7403C116.249 24.4459 115.392 24.0737 114.752 23.6235L115.998 21.1562C116.622 21.5717 117.366 21.9094 118.232 22.1691C119.115 22.4115 119.981 22.5327 120.829 22.5327C122.768 22.5327 123.738 22.0219 123.738 21.0003C123.738 20.5155 123.487 20.1779 122.985 19.9874C122.5 19.797 121.712 19.6152 120.621 19.442C119.478 19.2689 118.543 19.0698 117.816 18.8447C117.106 18.6196 116.483 18.23 115.946 17.676C115.427 17.1046 115.167 16.3168 115.167 15.3125C115.167 13.9966 115.713 12.9491 116.803 12.1699C117.911 11.3735 119.401 10.9752 121.27 10.9752C122.223 10.9752 123.175 11.0878 124.127 11.3129C125.08 11.5206 125.859 11.8063 126.465 12.1699L125.218 14.6373C124.041 13.9447 122.716 13.5984 121.245 13.5984C120.292 13.5984 119.565 13.7456 119.063 14.0399C118.578 14.3169 118.336 14.6892 118.336 15.1567C118.336 15.6761 118.595 16.0484 119.115 16.2735C119.652 16.4813 120.474 16.6804 121.582 16.8708C122.69 17.044 123.599 17.2431 124.309 17.4682C125.019 17.6933 125.625 18.0742 126.127 18.6109C126.647 19.1477 126.906 19.9095 126.906 20.8965C126.906 22.195 126.344 23.2339 125.218 24.0131C124.093 24.7922 122.56 25.1818 120.621 25.1818Z" fill="white"/>
                <path d="M52.794 21.8544H52.7443L48.9916 11.7891H45.7607L51.1786 25.1349H54.2355L59.6534 11.7891H56.5468L52.794 21.8544Z" fill="white"/>
                <path d="M66.8623 11.4905C62.7119 11.4905 59.7793 14.3734 59.7793 18.4741C59.7793 22.5499 62.7119 25.4329 66.8623 25.4329C71.0127 25.4329 73.995 22.5499 73.995 18.4741C73.995 14.3734 71.0375 11.4905 66.8623 11.4905ZM66.8623 22.7239C64.4764 22.7239 62.8113 20.9594 62.8113 18.4741C62.8113 15.9391 64.4516 14.1994 66.8623 14.1994C69.273 14.1994 70.9381 15.9391 70.9381 18.4741C70.9381 20.9594 69.2979 22.7239 66.8623 22.7239Z" fill="white"/>
                <path d="M75.8555 25.1638H79.1377V5.83508H75.8555V25.1638Z" fill="white"/>
                <path d="M93.3604 25.1639H96.6426V11.3055H93.3604V25.1639Z" fill="white"/>
                <circle cx="95.0015" cy="7.4762" r="1.64112" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M83.6491 19.8608L83.6506 19.8608C83.6501 19.8977 83.6498 19.9344 83.6498 19.9711C83.6498 23.6158 85.9879 25.3606 89.3417 25.3606C89.7538 25.3606 90.1464 25.3257 90.5171 25.2584L90.5247 25.2571L90.5171 22.8322C90.2814 22.8775 90.0343 22.901 89.7773 22.901C87.6866 22.901 86.2755 22.2071 86.2755 19.9711L86.2699 17.5509L86.3065 13.8406V13.4032H90.066V11.2643H86.3065V7.7915H83.6181L83.627 11.2643H81.2051V13.4032H83.6325L83.6491 19.8608Z" fill="white"/>
                <path d="M106.714 10.9999C104.527 10.9999 102.862 11.82 101.893 13.1869H101.843L101.694 11.2733H99.2334V30.0619H102.265V23.2274H102.315C103.309 24.3209 104.8 24.9422 106.739 24.9422C110.566 24.9422 113.35 22.0345 113.35 17.9835C113.35 13.9325 110.566 10.9999 106.739 10.9999H106.714ZM106.242 22.2333C103.856 22.2333 102.166 20.4687 102.166 17.9835C102.166 15.4485 103.856 13.7088 106.242 13.7088C108.603 13.7088 110.293 15.4485 110.293 17.9835C110.293 20.4687 108.603 22.2333 106.242 22.2333Z" fill="white"/>
                <path d="M38.6283 11.4905C34.4779 11.4905 31.4707 14.3734 31.4707 18.4741C31.4707 22.5499 34.4033 25.4329 38.5537 25.4329C41.6851 25.4329 44.6426 23.7926 45.4876 20.9842H42.3313C41.71 22.0529 40.6165 22.873 38.5786 22.873C36.3915 22.873 34.8258 21.3819 34.6021 19.6173H45.6367C45.6864 19.2445 45.7113 18.8717 45.7113 18.4741C45.7113 14.3734 42.8284 11.4905 38.6531 11.4905H38.6283ZM34.5773 17.306C34.8755 15.4172 36.4412 14.0503 38.6283 14.0503C40.8402 14.0503 42.4059 15.3426 42.5798 17.306H34.5773Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.52775 0.80542C0.683998 0.80542 0 1.48942 0 2.33317V24.18C0 25.0238 0.683995 25.7078 1.52775 25.7078H23.3746C24.2184 25.7078 24.9024 25.0238 24.9024 24.18V2.33317C24.9024 1.48942 24.2184 0.80542 23.3746 0.80542H1.52775ZM20.7225 15.0571H20.0131V14.3478C20.0131 13.9556 19.6961 13.6385 19.3038 13.6385H10.7921C10.3998 13.6385 10.0828 13.9556 10.0828 14.3478V18.6037V20.7316C10.0828 22.2985 11.3531 23.5689 12.92 23.5689H17.1759C18.4938 23.5689 19.5954 22.6617 19.9124 21.441H20.7225C21.8978 21.441 22.8504 20.4883 22.8504 19.313V17.1851C22.8504 16.0097 21.8978 15.0571 20.7225 15.0571ZM21.4318 19.313C21.4318 19.7046 21.114 20.0223 20.7225 20.0223H20.0131V19.313V18.6037V16.4758H20.7225C21.114 16.4758 21.4318 16.7935 21.4318 17.1851V19.313Z" fill="white"/>
            </svg>

            <svg class="header-login" @click="$router.push('/login')" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.625 0C9.25249 0 0 9.25249 0 20.625C0 31.9975 9.25249 41.25 20.625 41.25C31.9975 41.25 41.25 31.9975 41.25 20.625C41.25 9.25249 31.9975 0 20.625 0ZM15.6453 11.5837C16.9016 10.252 18.6696 9.51923 20.625 9.51923C22.5804 9.51923 24.3325 10.257 25.5938 11.5956C26.872 12.9521 27.4937 14.7746 27.347 16.734C27.0535 20.625 24.039 23.7981 20.625 23.7981C17.211 23.7981 14.1906 20.625 13.903 16.733C13.7573 14.7578 14.378 12.9293 15.6453 11.5837ZM20.625 38.0769C18.2952 38.0785 15.9889 37.6122 13.8427 36.7057C11.6965 35.7991 9.75424 34.4709 8.13101 32.7997C9.06068 31.4739 10.2452 30.3467 11.6154 29.4838C14.143 27.8636 17.3419 26.9712 20.625 26.9712C23.9081 26.9712 27.107 27.8636 29.6316 29.4838C31.0029 30.3463 32.1885 31.4735 33.119 32.7997C31.4959 34.4711 29.5536 35.7994 27.4074 36.706C25.2612 37.6125 22.9548 38.0787 20.625 38.0769Z" fill="white"/>
            </svg>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            dropdown: false,
        }
    },
    methods: {
        showDropdown() {
            this.dropdown = !this.dropdown
        },
    },
}

</script>

<style scoped>
    .header {
        position: absolute;
        background: rgba(40, 40, 40, 0.2);
        backdrop-filter: blur(7px);
        height: 75px;
        width: 100%;
    }
    .header-wrapper {
      padding: 16px 0 220px 0;
        position: absolute;
        top: 0;
        right: 65px;
    }
    .header-burger,
    .header-logo {
        display: none;
    }
    .header-list {
        list-style-type: none;
        display: flex;
        align-items: center;
        margin: 0 155px 0 auto;
        height: 100%;
        width: 330px;
    }
    .header-list__item {
        margin: 0 15px;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        cursor: pointer;
    }
    .header-login,
    .header-burger {
        cursor: pointer;
    }
    @media (max-width: 768px) {
        .header-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 3;
            height: 75px;
            width: 100%;
            padding: 16px 65px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header-burger,
        .header-logo {
            display: block;
        }
        .header-list {
            width: 100%;
            height: 220px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            padding: 70px 0 0 15px;
            background: rgba(40, 40, 40, 0.8);
            backdrop-filter: blur(7px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            transform: translateY(-220px);
            transition: .3s;
        }
        .header.dropdown {
            background: transparent;
            backdrop-filter: blur(0);
        }
        .dropdown {
            transform: translateY(0);
            transition: .3s;
        }
        .header-burger path:nth-child(1) {
            transition: .3s;
        }
        .header-burger path:nth-child(3) {
            transition: .3s;
        }
        .header-burger.dropdown path:nth-child(2) {
            display: none;
        }
        .header-burger.dropdown path:nth-child(1) {
            transform: translate(10px, -2px) rotate(45deg);
            transform-origin: left top;
            transition: .3s;
        }
        .header-burger.dropdown path:nth-child(3) {
            transform: translate(10px, 2px) rotate(-45deg);
            transform-origin: left bottom;
            transition: .3s;
        }
        .header-list__item {
            margin: 10px 15px;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: #FFFFFF;
            cursor: pointer;
        }
    }
    @media (max-width: 414px) {
        .header-wrapper {
            padding: 16px 30px;
        }
    }
    @media (max-width: 320px) {
        .header-wrapper {
            padding: 16px 20px;
        }
        .header-login {
            width: 30px;
            height: 30px;
        }
        .header-burger {
            width: 28px;
            height: 18px;
        }
    }
</style>
