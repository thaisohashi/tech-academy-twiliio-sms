import * as MessageService from "../services/message.service.js";

async function message(request, response) {
  const { message, phoneNumber } = request.body;
  try {
    const responseMesssage = await MessageService.sendMessage(
      message,
      phoneNumber
    );
    response.send(responseMesssage);
  } catch (error) {
    response.status(error.status).send(error);
  }
}

export { message };
