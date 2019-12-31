<template>
  <validation-observer ref="observer">
    <h1>Register</h1>

    <div class="card mx-auto" style="width: 40rem;">
      <div class="card-body text-left">
        <validation-provider
          rules="required|length:10"
          class="form-group"
          v-slot="{ errors, classes }"
        >
          <label for="inputId">身分證字號</label>
          <input
            v-model="formData.id"
            type="text"
            :class="classes"
            class="form-control"
            id="inputId"
          />
          <div class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </validation-provider>

        <validation-provider
          rules="required|max:30"
          class="form-group"
          v-slot="{ errors, classes }"
        >
          <label for="inputName">姓名</label>
          <input
            v-model="formData.name"
            type="text"
            :class="classes"
            class="form-control"
            id="inputName"
          />
          <div class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </validation-provider>

        <validation-provider
          rules="required|max:10|numeric"
          class="form-group"
          v-slot="{ errors, classes }"
        >
          <label for="inputPhone">手機號碼</label>
          <input
            v-model="formData.phone"
            type="text"
            :class="classes"
            class="form-control"
            id="inputPhone"
          />
          <div class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </validation-provider>

        <div class="text-center mt-4">
          <button class="btn btn-primary mr-4" @click="onSubmit">送出</button>
          <button class="btn btn-primary" @click="resetData">清除</button>
        </div>
      </div>
    </div>
  </validation-observer>
</template>

<script>
export default {
  data() {
    return {
      formData: this.getDefaultData()
    }
  },
  methods: {
    getDefaultData() {
      return {
        id: '',
        name: '',
        phone: ''
      }
    },
    async onSubmit() {
      if (await this.$refs.observer.validate()) {
        alert(JSON.stringify(this.formData))
      }
    },
    resetData() {
      this.formData = this.getDefaultData()
      this.$refs.observer.reset()
    }
  }
}
</script>
