<template>
  <div>
    <h1>Counter</h1>

    <p>Counter: {{ counter }}</p>

    <div>
      <button type="button" class="btn btn-primary mr-3" @click="decrement">
        減 1
      </button>
      <button type="button" class="btn btn-primary mr-3" @click="reset">
        重置
      </button>
      <button type="button" class="btn btn-primary" @click="increment">
        加 1
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['counter'])
  },
  methods: {
    ...mapMutations(['decrement', 'increment', 'reset'])
  }
}
</script>
