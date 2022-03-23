/**
 * Responds to a @rosie.
 *
 */
const atRosie = (event) => {
  let _intro;
  if (event.space.singleUserBotDm){
  _intro = [
    {
      "header": {
        "title": `Hello, | °ｰ°|ﾉ  ${event.user.displayName}. My name is Rosie.`,
        "subtitle": `You came to me for help and...`
      },
      "sections": [
        {
          "widgets": [
            {
              "textParagraph": {
                "text": `I will do everything that I can to help. I swear on my mother's rechageable batteries.<br>me--ヽ| °ｰ°|人(⌒_⌒ )ﾉ--you<br>To see a current list of things I can help with type: <br><font color="#ea9999"><b>/help<b></font><br> `
              }
            }
          ]
        }
      ]
    }
  ];}
  else {
    _intro =[
    {
      "header": {
        "title": `Hello, | °ｰ°|ﾉ  ${(event.space.displayName ? event.space.displayName : "chat")}. My name is Rosie.`,
        "subtitle": `You came to me for help and...`
      },
      "sections": [
        {
          "widgets": [
            {
              "textParagraph": {
                "text": `I will do everything that I can to help. I swear on my mother's rechageable batteries.<br>me--ヽ| °ｰ°|人(⌒_⌒ )ﾉ--you<br>To see a current list of things I can help with type: <br><font color="#ea9999"><b>/help<b></font><br> `
              }
            }
          ]
        }
      ]
    }
  ];
     }
  return {"cards": _intro}
}
