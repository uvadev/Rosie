/**
 * Responds to a MESSAGE with !event.message.argumentText or on add to space.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
const rosieIntro = (event)=> {
let message = ``;
  const hello = ` Hello, | °ｰ°|ﾉ  ${event.user.displayName} My name is Rosie`;
  const intro = `
    You came to me for help and 
    I will do everything that I can to help.
    I swear on my mother's rechageable batteries.
    ヽ| °ｰ°|人(⌒_⌒ )ﾉ
    `;
  const outro =`To see a current list of things I can help with type: 
    /help
    `;

  if (event.space.singleUserBotDm) {
    message = `${hello}
     ${intro}
     ${outro}
     `;
  } else {
    message = `${hello} Thank you for adding me to 
     ${(event.space.displayName ? event.space.displayName : "this chat. ")}
     ${intro}
     ${outro}
     `;
  }
  return { "text": message };
}
