import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

export default createStore({
  state: {
    firstName: "",
    lastName: "",
    personalityType1: "",
  },
  mutations: {
    setFirstName(state, firstName) {
      state.firstName = firstName;
    },
    setLastName(state, lastName) {
      state.lastName = lastName;
    },
    setPersonalityType1(state, personalityType1) {
      state.personalityType1 = personalityType1;
    },
    clearForm(state) {
      state.firstName = "";
      state.lastName = "";
      state.personalityType1 = "";
    },
  },
  actions: {
    async registerUser({ state, commit }, userData) {
      try {
        const response = await axios.post("https://prototype-api-iakc.onrender.com/register", userData);
        if (response.status === 201) {
          commit("clearForm");
          Swal.fire({
            icon: "success",
            title: "Success",
            text: response.data.message,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: response.data.error,
          });
        }
      } catch (error) {
        console.error("Error registering user:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Internal server error",
        });
      }
    },
  },
});