import Vue from 'vue'
import Vuex from 'vuex'
import { VALID_CODE } from '@/constants.json'

Vue.use(Vuex)

/* constants */
export const SET_SMS_CODE = 'SET_SMS_CODE'

export default new Vuex.Store({
    state: {
        smscode: null
    },
    mutations: {
        [SET_SMS_CODE] (state, code) {
            state.smscode = code
        }
    },
    getters: {
        /* validate the sms code */
        validateSmsCode: (state) => {
            return +state.smscode === VALID_CODE
        },
        getSmsCode: (state) => {
            return state.smscode
        }
    },
    actions: {
        /* set the sms code. if not null then convert to string and join
        ** return true if joined code is a number of length 4
        */
        setSmsCode (context, smscode) {
            if (
                smscode.code1 &&
                smscode.code2 &&
                smscode.code3 &&
                smscode.code4
            ) {
                const sms = smscode.code1.toString() +
                    smscode.code2.toString() +
                    smscode.code3.toString() +
                    smscode.code4.toString()

                if (sms.match(/[0-9]{4}/) && sms.length === 4) {
                    context.commit(SET_SMS_CODE, +sms)
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        }
    },
    modules: {
    }
})
