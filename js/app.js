const { createApp, reactive, computed } = Vue;

const DEFAULT_STATE = {
  state: true,
  inputName:"",
  names: [],
  error: "",
  showError: false,
  result:""
}

createApp({
  setup(){



    return {

    }
  }
}).mount("#app");