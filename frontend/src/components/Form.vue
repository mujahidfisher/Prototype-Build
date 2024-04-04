<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <input type="text" id="firstName" class="form-control" v-model="firstName" autocomplete="off" placeholder="First name" required @invalid="handleInvalidInput" @input="clearInvalidInput" />

        <input type="text" id="lastName" class="form-control" v-model="lastName" autocomplete="off" placeholder="Last name" required @invalid="handleInvalidInput" @input="clearInvalidInput" />

        <button class="btn btn-primary mt-3" type="submit">SUBMIT</button>
      </div>
    </form>
    <p v-if="message" class="text-success">{{ message }}</p>
    <p v-if="error" class="text-danger">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    };
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
    error() {
      return this.$store.state.error;
    }
  },
  methods: {
    async submitForm() {
      if (!this.firstName || !this.lastName) {
        // Handle empty fields
        return;
      }
      await this.$store.dispatch('registerUser', { firstName: this.firstName, lastName: this.lastName });
    },
    handleInvalidInput(event) {
      event.target.setCustomValidity(event.target.getAttribute('placeholder'));
    },
    clearInvalidInput(event) {
      event.target.setCustomValidity('');
    }
  }
}
</script>

