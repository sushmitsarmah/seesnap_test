<template>
    <section class="welcome">
        <img alt="SeeSnap logo" class="logo" src="../assets/logo.svg" />
        <h3 class="welcome-text">Glad to have you, {{name}}! 👋</h3>
        <p class="welcome-sms-check">
            Check your SMS for the code we’ve just sent you and type it in 📨
        </p>
        <form class="sms-form" v-on:keyup.prevent.enter="submitForm($event)">
            <input class="form-input" name="code1" type="text" v-model="smscode.code1" maxlength="1"/>
            <input class="form-input" name="code2" type="text" v-model="smscode.code2" maxlength="1"/>
            <input class="form-input" name="code3" type="text" v-model="smscode.code3" maxlength="1"/>
            <input class="form-input" name="code4" type="text" v-model="smscode.code4" maxlength="1"/>
        </form>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Welcome',
    props: ['name'],
    data: () => {
        return {
            smscode: {
                code1: null,
                code2: null,
                code3: null,
                code4: null
            }
        }
    },
    computed: {
        ...mapGetters([
            'getSmsCode',
            'validateSmsCode'
        ])
    },
    methods: {
        ...mapActions([
            'setSmsCode'
        ]),
        async submitForm (e) {
            /* set the code in the vuex store. if successfully stored then success is true */
            const success = await this.setSmsCode(this.smscode)

            if (!success) {
                alert('sms code not entered / not a number!')
            } else {
                /* validate the sms code */
                const msg = this.validateSmsCode ? 'sms code is valid' : 'sms code is invalid'
                alert(msg)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .welcome {
        padding-left: 23px;
        padding-right: 23px;

        @media (min-width: 1025px) {
            width: 55%;
        }

        .logo {
            width: 156px;
            margin-bottom: 24px;
        }

        .welcome-text {
            font-weight: 500;
            font-size: 23px;
            line-height: 30px;
            letter-spacing: -0.015em;
            color: #333333;
            margin-bottom: 6px;

            flex: none;
            order: 0;
            align-self: flex-start;
            margin: 0px 6px;
        }

        .welcome-sms-check {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            display: flex;
            align-items: flex-end;
            letter-spacing: -0.015em;

            /* Dark Grey */
            color: #333333;

            /* Inside Auto Layout */
            flex: none;
            order: 1;
            align-self: center;
            margin: 0px 6px;
        }

        .sms-form {
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            .form-input {
                display: inline-block;
                width: 23%;
                height: 36px;
                background: #F9F9F9;
                border-radius: 6px;
                color: #000000;
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 30px;
                text-align: center;
                border: none;
                &:focus {
                    border: 1.5px solid #4F14BC;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>
