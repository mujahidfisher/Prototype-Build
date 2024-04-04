<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <input type="text" id="firstName" class="form-control" v-model="firstName" autocomplete="off"
          placeholder="First name" required @invalid="handleInvalidInput" @input="clearInvalidInput" />

        <input type="text" id="lastName" class="form-control" v-model="lastName" autocomplete="off"
          placeholder="Last name" required @invalid="handleInvalidInput" @input="clearInvalidInput" />

        <label for="personalityType1">Personality Type 1:</label>
        <select type="text" id="personalityType1" class="form-control" v-model="personalityType1"
          @invalid="handleInvalidInput" @input="clearInvalidInput" required>
          <option value="ENFP">ENFP</option>
          <option value="ENTJ">ENTJ</option>
          <option value="ENTP">ENTP</option>
          <option value="ESFJ">ESFJ</option>
          <option value="ESTJ">ESTJ</option>
          <option value="INFP">INFP</option>
          <option value="INTJ">INTJ</option>
          <option value="INTP">INTP</option>
          <option value="ISFJ">ISFJ</option>
          <option value="ISFP">ISFP</option>
          <option value="ISTJ">ISTJ</option>
          <option value="ISTP">ISTP</option>
        </select>

        <label for="personalityType2">Personality Type 2:</label>
        <select type="text" id="personalityType2" class="form-control" v-model="personalityType2"
          @invalid="handleInvalidInput" @input="clearInvalidInput" required>
          <option value="ENFP">ENFP</option>
          <option value="ENTJ">ENTJ</option>
          <option value="ENTP">ENTP</option>
          <option value="ESFJ">ESFJ</option>
          <option value="ESTJ">ESTJ</option>
          <option value="INFP">INFP</option>
          <option value="INTJ">INTJ</option>
          <option value="INTP">INTP</option>
          <option value="ISFJ">ISFJ</option>
          <option value="ISFP">ISFP</option>
          <option value="ISTJ">ISTJ</option>
          <option value="ISTP">ISTP</option>
        </select>

        <label for="personalityType3">Personality Type 3:</label>
        <select type="text" id="personalityType3" class="form-control" v-model="personalityType3"
          @invalid="handleInvalidInput" @input="clearInvalidInput" required>
          <option value="ENFP">ENFP</option>
          <option value="ENTJ">ENTJ</option>
          <option value="ENTP">ENTP</option>
          <option value="ESFJ">ESFJ</option>
          <option value="ESTJ">ESTJ</option>
          <option value="INFP">INFP</option>
          <option value="INTJ">INTJ</option>
          <option value="INTP">INTP</option>
          <option value="ISFJ">ISFJ</option>
          <option value="ISFP">ISFP</option>
          <option value="ISTJ">ISTJ</option>
          <option value="ISTP">ISTP</option>
        </select>

        <label for="personalityType4">Personality Type 4:</label>
        <select type="text" id="personalityType4" class="form-control" v-model="personalityType4"
          @invalid="handleInvalidInput" @input="clearInvalidInput" required>
          <option value="ENFP">ENFP</option>
          <option value="ENTJ">ENTJ</option>
          <option value="ENTP">ENTP</option>
          <option value="ESFJ">ESFJ</option>
          <option value="ESTJ">ESTJ</option>
          <option value="INFP">INFP</option>
          <option value="INTJ">INTJ</option>
          <option value="INTP">INTP</option>
          <option value="ISFJ">ISFJ</option>
          <option value="ISFP">ISFP</option>
          <option value="ISTJ">ISTJ</option>
          <option value="ISTP">ISTP</option>
        </select>

        <input type="number" id="enneagram" class="form-control" placeholder="Enneagram" v-model="enneagram" min="1"
          max="9" maxlength="1" @invalid="handleInvalidInput" @input="clearInvalidInput" required />

        <label for="mainUserPersona">Main User Persona:</label>
        <select type="text" id="mainUserPersona" class="form-control" v-model="mainUserPersona"
          @invalid="handleInvalidInput" @input="clearInvalidInput" required>
          <option value="Conscientiousness">Conscientiousness</option>
          <option value="Dominance">Dominance</option>
          <option value="Influence">Influence</option>
          <option value="Steadiness">Steadiness</option>
        </select>

        <label for="secondaryUserPersona">Secondary User Persona:</label>
        <select type="text" id="secondaryUserPersona" class="form-control" v-model="secondaryUserPersona"
          @invalid="handleInvalidInput" @input="clearInvalidInput" required>
          <option value="Agreeableness">Agreeableness</option>
          <option value="Conscientiousness">Conscientiousness</option>
          <option value="Extraversion">Extraversion</option>
          <option value="Neuroticism">Neuroticism</option>
          <option value="Openness">Openness</option>
        </select>

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
      lastName: '',
      personalityType1: '',
      personalityType2: '',
      personalityType3: '',
      personalityType4: '',
      enneagram: '',
      mainUserPersona: '',
      secondaryUserPersona: ''
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
      if (!this.firstName || !this.lastName || !this.personalityType1 || !this.personalityType2 || !this.personalityType3 || !this.personalityType4 || !this.enneagram || !this.mainUserPersona || !this.secondaryUserPersona) {
        // Handle empty fields
        return;
      }
      await this.$store.dispatch('registerUser', { firstName: this.firstName, lastName: this.lastName, personalityType1: this.personalityType1, personalityType2: this.personalityType2, personalityType3: this.personalityType3, personalityType4: this.personalityType4, enneagram: this.enneagram, mainUserPersona: this.mainUserPersona, secondaryUserPersona: this.secondaryUserPersona });
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
