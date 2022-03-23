/**
 * Return for the call monthlyUpdate thate returns 3 links correspondence to elem middle and high.
 */
const monthlyReportCard = (links) => {
  const rCard = {
    "cards": [
      {
        "sections": [
          {
            "widgets": [
              {
                "keyValue": {
                  "topLabel": `| •̀ㅂ•́|و found it`,
                  "content": links[0][0],
                  "contentMultiline": "false",
                  "onClick": {
                    "openLink": {
                      "url": links[0][1]
                    }
                  },
                  "iconUrl": "https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png",
                  "button": {
                    "textButton": {
                      "text": links[0][0],
                      "onClick": {
                        "openLink": {
                          "url": links[0][1]
                        }
                      }
                    }
                  }
                }
              },
              {
                "keyValue": {
                  "topLabel": `| •̀ㅂ•́|و found it`,
                  "content": links[1][0],
                  "contentMultiline": "false",
                  "onClick": {
                    "openLink": {
                      "url": links[1][1]
                    }
                  },
                  "iconUrl": "https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png",
                  "button": {
                    "textButton": {
                      "text": links[1][0],
                      "onClick": {
                        "openLink": {
                          "url": links[1][1]
                        }
                      }
                    }
                  }
                }
              },
              {
                "keyValue": {
                  "topLabel": `| •̀ㅂ•́|و found it`,
                  "content": links[2][0],
                  "contentMultiline": "false",
                  "onClick": {
                    "openLink": {
                      "url": links[2][1]
                    }
                  },
                  "iconUrl": "https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png",
                  "button": {
                    "textButton": {
                      "text": links[2][0],
                      "onClick": {
                        "openLink": {
                          "url": links[2][1]
                        }
                      }
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
  return rCard;
}
