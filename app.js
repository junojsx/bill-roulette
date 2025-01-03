const { createApp, reactive, computed } = Vue;

const DEFAULT_STATE = {
  state: false,
  inputName:"",
  names: [],
  error: "",
  showError: false,
  result:""
}

createApp({
  setup(){
    const data = reactive(DEFAULT_STATE) //creating the data this way instead of creating the default state object inside the set up is cleaner.


    return {
      data
    }
  }
}).mount("#app");