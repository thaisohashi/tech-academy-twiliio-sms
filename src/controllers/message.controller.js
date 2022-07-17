import * as MessageService from "../services/message.service.js";

function message(request, response) {
  const { message, phoneNumber } = request.body;
  const responseMesssage = MessageService.sendMessage(message, phoneNumber);
  response.send(request.body);
}

export { message };
