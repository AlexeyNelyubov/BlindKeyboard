import {onUnmounted, ref} from 'vue'

export const timer = ()=> {
    const testingTime = ref(0)
    const timer = setInterval(()=>{
        testingTime.value ++
    }, 1000)

    const startNewTest = ()=> testingTime.value = 0;

    onUnmounted(()=>{
        clearInterval(timer)
    })

    return {testingTime, startNewTest}
}