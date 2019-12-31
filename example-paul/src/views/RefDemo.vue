<template>
  <div>
    <h1>Ref Demo</h1>

    <div class="card">
      <div class="card-body">
        <input ref="input" type="text" class="form-control" />
        <button class="btn btn-primary mt-4" @click="$refs.input.focus()">
          Set Focus
        </button>
      </div>
    </div>
  </div>
</template>
