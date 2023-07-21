<script setup>

</script>

<template>

  <div v-for="n in [1, 2, 3, 4, 5]" class="skeleton repos-skeleton">
    <div class="columns">
      <div class="column">
        <article class="message">
          <div class="message-header">
            <p />
          </div>
          <div class="message-body">
            <p />
          </div>
        </article>
      </div>
    </div>
  </div>

</template>

<style>

.skeleton {
  .message-header {
    background-color: #e2e2e2;
    animation: loading .7s infinite alternate;
  }
}

@keyframes loading {
  from {background-color:#ccc;}
  to {background-color: #0D111799;}
}

.repos-skeleton {
  margin-top: 30px;
}
</style>