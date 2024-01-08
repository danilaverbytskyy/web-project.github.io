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
      errors: []
    }
  },
  computed: {
    isButtonBlocked() {
      return this.$store.getters.isButtonBlocked;
    }
  },
  methods: {
    getName() {
      localStorage.setItem("name", this.nameValue);
    },
    getPhone() {
      localStorage.setItem("phone", this.phoneValue);
    },
    getEmail() {
      localStorage.setItem("email", this.emailValue);
    },
    getComment() {
      localStorage.setItem("comment", this.commentValue);
    },
    getAgreement() {
      localStorage.setItem("agreement", this.agreementValue.toString());
    },
    checkPhone: function (phone) {
      let re = /^\+?[0-9]{10,15}$/;
      return re.test(phone);
    },
    submit() {
      if (this.checkForm()) {
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
      }
    },
    updateForm() {
      this.nameValue = ""
      this.phoneValue = "";
      this.emailValue = "";
      this.commentValue = "";
      this.agreementValue = false;
    },
    checkForm: function () {
      this.errors = [];

      if (!this.nameValue) {
        this.errors.push('Укажите имя.');
      }
      if (!this.phoneValue) {
        this.errors.push('Укажите телефон.');
      } else if (!this.checkPhone(this.phoneValue)) {
        this.errors.push('Укажите корректный номер телефона.');
      }
      if (!this.emailValue) {
        this.errors.push('Укажите электронную почту.');
      } else if (!this.checkEmail(this.emailValue)) {
        this.errors.push('Укажите корректный адрес электронной почты.');
      }
      if (!this.agreementValue) {
        this.errors.push('Дайте согласие.');
      }

      return this.errors.length === 0;
    },
    checkEmail: function (email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  mounted() {
    this.nameValue = localStorage.getItem("name");
    this.phoneValue = localStorage.getItem("phone");
    this.emailValue = localStorage.getItem("email");
    this.commentValue = localStorage.getItem("comment");
    this.agreementValue = localStorage.getItem("agreement") === 'true';
  }
};
</script>

<template>
  <div class="container p-0">
    <form class="contact-form" @submit.prevent="submit">
      <input @input="getName" v-model="nameValue" type="text" class="form-control"
             id="name" name="name" placeholder="Ваше имя" />
      <input @input="getPhone" v-model="phoneValue" type="text" class="form-control" id="telephone"
             placeholder="Телефон" name="phone"/>
      <input @input="getEmail" v-model="emailValue" type="text" class="form-control" id="email" placeholder="E-mail"
             name="email" />
      <textarea @input="getComment" v-model="commentValue" class="form-control" id="comment"
                placeholder="Ваш комментарий" name="comment">
      </textarea>
      <div class="form-check my-7 p-2">
        <input @change="getAgreement" v-model="agreementValue" type="checkbox" id="agreement" name="check" />
        <span class="form-check-label">Отправляя заявку, я даю согласие на  <a href="/privacy-policy" class="orange">
          обработку персональных данных</a>.<span class="text-danger">*</span>
        </span>
      </div>
      <div class="alert alert-danger" v-if="errors.length">
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
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
input, textarea, .submit-btn, ::placeholder {
  color: white !important;
}

input {
  background: 0 0;
  border: 1px solid rgba(256, 256, 256, .3);
  border-radius: 5px;
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
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px #f44536;
}

textarea {
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
</style>