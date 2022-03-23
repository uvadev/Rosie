/**
 * Responds to a MESSAGE JCampus && Password || Microsoft && Password.
 *
 * @param {Object} userName the event.username object from Chat
 * @param {Object} argumentText the event.message.argumentText object from Chat
 */
const forgotGmailMicrosoftPassword = (userName, userInput) => {
  MailApp.sendEmail({
    to: "",
    subject: "Can you help out " + userName + " w/reseting gmail/microsoft password",
    htmlBody: "Said this to UVA_Bot " + userInput
  });
  return {
    "cards": [
      {
        "header": {
          "title": "Sending ticket to ...",
          "subtitle": "look for a response in your gmail soon"
        }
      }
    ]
  }
}
