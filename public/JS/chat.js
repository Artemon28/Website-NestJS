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
    async sendMessage() {
      if (this.validateInput()) {
        const message = {
          name: this.name,
          text: this.text
        }
        const chatRecord = {
          "name": this.name,
          "value": this.text,
        };

        const response = await fetch('/chat', {
          method: 'POST',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
          mode: "same-origin",
          body: JSON.stringify(chatRecord),
        })

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
  async created() {
    this.socket = io(location.origin)
    this.socket.on('msgToClient', (message) => {
      this.receivedMessage(message)
    })

    const allRec = await fetch('/chat/1', {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    })

    const arrayRec = await allRec.json();

    for (var i = 0; i < 51; i++) {
      const message = {
        name: arrayRec[i].name,
        text: arrayRec[i].value,
      }
      this.receivedMessage(message)
    }

  }
})