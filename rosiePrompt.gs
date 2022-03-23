/**
 * Responds to a MESSAGE prompt Rosie then gives a smart alec response w/rick roll w/no ads.
 *
 */
const rosiePrompt = () => {
  const rosieCard = {
    "cards": [
      {
        "sections": [
          {
            "widgets": [
              {
                "keyValue": {
                  "topLabel": `|ﾉ＾◡＾|ﾉ︵ ┻━┻`,
                  "content": "description",
                  "contentMultiline": "false",
                  "button": {
                    "textButton": {
                      "text": "description",
                      "onClick": {
                        "openLink": {
                          "url": "https://www.youtube.com/watch?v=QtBDL8EiNZo"
                        }
                      }
                    }
                  }
                }
              },
              {
                "image": {
                  "imageUrl": "https://media1.tenor.com/images/4172816bd0ec11085f5211adefc1377e/tenor.gif?itemid=16509379",
                  "onClick": {
                    "openLink": {
                      "url": "https://www.youtube.com/watch?v=QtBDL8EiNZo"
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
  return rosieCard;
}
