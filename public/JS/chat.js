const app = new Vue({
  el: '#app',
  data: {
    title: 'Обсуждаем гоночки',
    name: '',
    text: '',
    messages: [],
    socket: null
  },
  methods: {
    sendMessage() {
      if(this.validateInput()) {
        const message = {
          name: this.name,
          text: this.text
        }
        this.socket.emit('msgToServer', message)
        this.text = ''
      }
    },
    receivedMessage(message) {
      this.messages.push(message)
    },
    validateInput() {
      return this.name.length > 0 && this.text.length > 0
    }
  },
  created() {
    this.socket = io(location.origin) //http://localhost:12345
    this.socket.on('msgToClient', (message) => {
      this.receivedMessage(message)
    })
  }
})