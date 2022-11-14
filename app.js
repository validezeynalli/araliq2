class Message {
    constructor(authorName, time, text) {
        this.authorName = authorName
        this.time = time   
        this.text = text
    }

    toString() {
         console.log(`${this.authorName} --->  ${this.time}:${this.text}`)
    }
}


class Messenger {

    constructor() {
        this.messages = []
    }

    show_history() {
        // console.log(this.messages.map(message => message[1] + ' ' + message[0]).join('\n'));
        this.messages.map(message => message.toString())
    }

    send(author, text) {
        let message = new Message(author, text, new Date().getHours() + ':' + new Date().getMinutes())
        this.messages.push(message)
    }
}


let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()