const letterMaker = () => {
    const uploadLinks = [
      {
        "sections": [
          {
            "widgets": [
              {
                "keyValue": {
                  "topLabel": `─=≡Σ((( つ•̀ω•́)つLET’S GO!`,
                  "content": "File Uploads & VPNs",
                  "contentMultiline": "false",
                  "onClick": {
                    "openLink": {
                      "url": "https://"
                    }
                  },
                  "iconUrl": "https://www.gstatic.com/images/branding/product/2x/forms_2020q4_48dp.png",
                  "button": {
                    "textButton": {
                      "text": "File Uploads & VPNs",
                      "onClick": {
                        "openLink": {
                          "url": ""
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
    return {"cards": uploadLinks}
}
