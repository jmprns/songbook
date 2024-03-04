export const useSnackbar = defineStore('snackbar', {
    state: () => ({
        message: '',
        show: false
    }),
    actions: {
        setMessage: (message) => this.message = message,
        showSnackbar: (status) => this.show = status
    }
})