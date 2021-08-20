App.private_conversation = App.cable.subscriptions.create("Private::ConversationChannel", {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {}
});

$(document).on('submit', '.send-private-message', function(e) {
  e.preventDefault();
  var values = $(this).serializeArray();
  App.private_conversation.send_message(values);
  $(this).trigger('reset');
});

// send_message: function(message) {
//   return this.perform('send_message', {
//       message: message
//   });
// }

// def send_message(data)
//   message_params = data['message'].each_with_object({}) do |el, hash|
//     hash[el['name']] = el['value']
//   end
//   Private::Message.create(message_params)
// end