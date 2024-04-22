import {ref} from 'vue'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({
        nickname: '',
        avatar: '',
    })
    const setUserInfo = (val) => {
        userInfo.value = val
    }
    return {
        userInfo,
        setUserInfo
    }
})
