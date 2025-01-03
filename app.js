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
    const data = reactive(DEFAULT_STATE) //creating the data this way instead of creating the default state object inside the set up is cleaner.

    //methods

    //add name
    const addNameToList = () => {
      const userName= data.inputName;
      data.names.push(userName)
      return console.log(data.names)
    }

    //remove name

    const removeName = (index) => {
      data.names.splice(index, 1)
    }



    return {
      //this is where you import all datas and methods from the setup.
      data,
      addNameToList,
      removeName
    }
  }
}).mount("#app");