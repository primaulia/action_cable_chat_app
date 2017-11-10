App.room = App.cable.subscriptions.create('RoomChannel', {
  connected: function () {
    console.log('x is connected')
  },
  disconnected: function () {},
  received: function (data) {
    console.log(`
      new message
      data.content is ${data.content}
      data.username is ${data.username}
    `)

    var html = `
      <div class="message">
        <div class="message-user">
          ${data.username}:
        </div>
        <div class="message-content">
          ${data.content}
        </div>
      </div>
    `

    $('#messages-table').append(html)
    $('#message_content').val('')
  }
})
