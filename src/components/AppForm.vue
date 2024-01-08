<script>
export default {
  name: "AppForm",
  data() {
    return {
      nameValue: "",
      phoneValue: "",
      emailValue: "",
      commentValue: "",
      agreementValue: false,
    }
  },
  computed: {
    isButtonBlocked() {
      return this.$store.getters.isButtonBlocked;
    }
  },
  methods: {
    saveName() {
      localStorage.setItem("name", this.nameValue);
    },
    savePhone() {
      localStorage.setItem("phone", this.phoneValue);
    },
    saveEmail() {
      localStorage.setItem("email", this.emailValue);
    },
    saveComment() {
      localStorage.setItem("comment", this.commentValue);
    },
    saveAgreement() {
      localStorage.setItem("agreement", this.agreementValue);
    },
    submitForm() {
      let form = document.querySelector("form");
      let request = new FormData(form);
      let responseBlock = document.getElementById("response-block");
      this.$store.dispatch('blockButton');
      fetch("https://formcarry.com/s/DuS_CasfnL", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(request.entries()))
      })
          .then(response => {
            setTimeout(() => {
              if (response.status === 200) {
                responseBlock.innerHTML = "Данные успешно отправлены";
                responseBlock.style.color = "white";
                responseBlock.style.display = "block";
                localStorage.clear();
                this.updateForm();
              } else {
                responseBlock.innerHTML = "Ошибка при отправке данных";
                responseBlock.style.color = "red";
                responseBlock.style.display = "block";
              }

              this.$store.dispatch('unblockButton');
            }, 1000);
          })
          .catch(error => {
            setTimeout(() => {
              responseBlock.innerHTML = "Ошибка при отправке данных";
              responseBlock.style.color = "red";
              responseBlock.style.display = "block";
              console.log(error);

              this.$store.dispatch('unblockButton');
            }, 1000);
          });
    },
    updateForm() {
      this.nameValue = ""
      this.phoneValue = "";
      this.emailValue = "";
      this.commentValue = "";
      this.agreementValue = false;
    }
  },
  mounted() {
    this.nameValue = localStorage.getItem("name");
    this.phoneValue = localStorage.getItem("phone");
    this.emailValue = localStorage.getItem("email");
    this.commentValue = localStorage.getItem("comment");
    this.agreementValue = localStorage.getItem("agreement");
  }
};
</script>

<template>
  <div class="container p-0">
    <form class="contact-form" @submit.prevent="submitForm">
      <input @input="saveName" v-model="nameValue" type="text" class="form-control"
             id="name" placeholder="Ваше имя" required/>
      <input @input="savePhone" v-model="phoneValue" type="tel" pattern="[0-9+]+" class="form-control" id="telephone"
             placeholder="Телефон" name="phone" required/>
      <input @input="saveEmail" v-model="emailValue" type="email" class="form-control" id="email" placeholder="E-mail"
             name="email" required/>
      <textarea @input="saveComment" v-model="commentValue" class="form-control" id="comment"
                placeholder="Ваш комментарий" name="comment" required>
      </textarea>
      <div class="form-check my-7 p-2">
        <input @change="saveAgreement" v-model="agreementValue" type="checkbox" id="agreement" name="check" required/>
        <span class="form-check-label">Отправляя заявку, я даю согласие на  <a href="/privacy-policy" class="orange">
          обработку персональных данных</a>.<span class="text-danger">*</span>
        </span>
      </div>
      <button type="submit" class="btn submit-btn" :class="{ 'loading': isButtonBlocked }" :disabled="isButtonBlocked">
        <span v-if="isButtonBlocked">&nbsp;</span>
        <span v-else>Свяжитесь с нами</span>
      </button>
      <div class="m-0 p-0" id="response-block"></div>
    </form>
  </div>
</template>

<style scoped>
input {
  background: 0 0;
  border: 1px solid rgba(256, 256, 256, .3);
  border-radius: 5px;
  color: white !important;
  margin-bottom: 7px;
  line-height: 1.2;
  font-weight: 500;
  font-size: 14px;
  padding: 26px 24px;
}

input:focus {
  background: 0 0;
  border-color: rgb(216, 38, 38);
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px #f44336;
}

textarea {
  color: white !important;
  line-height: 1.2;
  font-weight: 500;
  font-size: 14px;
  background: 0 0;
  border: 1px solid rgba(256, 256, 256, .3);
  border-radius: 5px;
  padding: 26px 24px;
  margin-bottom: 7px;
}

textarea:focus {
  background: 0 0;
  border-color: rgb(216, 38, 38);
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px #f44336;
}

.form-check-label {
  margin: 0 0 10px 5px;
  font-size: 12px;
}

.submit-btn {
  background: rgb(216, 38, 38);
  border: 2px solid rgb(216, 38, 38);
  border-radius: 4px;
  color: white !important;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 11px;
  margin: 0;
  width: 100%;
  padding: 20px 14px;
  line-height: 1;
  transition: background .3s;
  position: relative;
}

.submit-btn:hover {
  background: none;
  border: 2px rgb(216, 38, 38) solid;
}

.submit-btn:focus,
.submit-btn:disabled,
.submit-btn:active,
.submit-btn:not(:disabled):not:active {
  background: none;
  border: 2px rgb(216, 38, 38) solid;
  box-shadow: none;
  outline: none;
}

.submit-btn.loading:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s infinite linear;
}

.submit-btn.loading {
  background: rgb(216, 38, 38);
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.contact-form a {
  text-decoration: none;
  color: rgb(216, 38, 38);
}

form {
  max-width: 100%;
}

::placeholder {
  color: white !important;
}
</style>