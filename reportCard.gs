/**
 * Card return for the admin report message
 */
const reportCard = (link,contentName) => {
  const rCard = {
    "cards": [
      {
        "sections": [
          {
            "widgets": [
              {
                "keyValue": {
                  "topLabel": `| •̀ㅂ•́|و found it`,
                  "content": contentName,
                  "contentMultiline": "false",
                  "onClick": {
                    "openLink": {
                      "url": link
                    }
                  },
                  "iconUrl": "https://lh4.googleusercontent.com/proxy/yZrAeSlr9I5zsjUdjVSbj56ZymHNJfJWJUlqiv1x2gj6lhIzVIVwbIRf6hA0O2gDC6nVgQQTxxuFOWXoOARZc3ZkuRdsauLvJFwO0Pi20Bz1NdLnUsMKI4Vo-EmE1Q36v-XPuSmP5VuVLeO7JqSJUuFK=s40",
                  "button": {
                    "textButton": {
                      "text": contentName,
                      "onClick": {
                        "openLink": {
                          "url": link
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
