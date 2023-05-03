import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTestingParamsStore = defineStore('testingParams', () => {
  const isFinishTesting = ref(false);
  const finishTesting = ()=> {
    isFinishTesting.value = true;
  }
  const speed = ref(0);
  const accuracy = ref(0);
  const changeTestingParams = (newSpeed, newAccuracy)=> {
    speed.value = newSpeed;
    accuracy.value = newAccuracy;
  }
  const  updateTestingParamsStore = ()=> {
    isFinishTesting.value = false;
    speed.value = 0;
    accuracy.value = 0;
  }

  return { isFinishTesting, speed, accuracy, finishTesting, changeTestingParams, updateTestingParamsStore}
})
