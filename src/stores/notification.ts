import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', () => {
    const showError = ref(false)

    function $setError () {
        showError.value = true;
    }

    function $resetError () {
        showError.value = false;
    }

    return { showError, $setError, $resetError }
})
