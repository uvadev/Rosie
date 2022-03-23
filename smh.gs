  /**
 * Responds to a MESSAGE event @ && thanks.
 *
 * Returns random Gif that says thanks
 */
const smh = () => {
  const randyGifs = [
    "https://media.giphy.com/media/kyM03ODmD74Mo/source.gif",
    "https://media.giphy.com/media/NRXleEopnqL3a/source.gif",
    "https://media.giphy.com/media/S37TFlsu7io8g/source.gif",
    "https://media.giphy.com/media/qvVJ36yWjbq24/source.gif",
    "https://media.giphy.com/media/AjYsTtVxEEBPO/source.gif",
    "https://media.giphy.com/media/3og0INyCmHlNylks9O/source.gif",
    "https://media.giphy.com/media/kc6BeXqOFbNCH6Sf79/source.gif",
    "https://media.giphy.com/media/RBeddeaQ5Xo0E/source.gif",
    "https://media.giphy.com/media/OvrMMjROnZvHi/source.gif",
    "https://media.giphy.com/media/3ohzdMFPxSbZGSFxbW/giphy.gif",
    "https://media.giphy.com/media/ZfuidXHMQHfLW/source.gif",
    "https://media.giphy.com/media/RDisOrdKEBY2Y/source.gif",
    "https://media.giphy.com/media/3ohzdRmJspKrpKjL5C/source.gif",
    "https://media.giphy.com/media/LAFShX32UwUj6/source.gif",
    "https://media.giphy.com/media/qHY6ij6LYizle/source.gif",
    "https://media.giphy.com/media/gnEFiT8mTWplC/source.gif",
    "https://media.giphy.com/media/tZiLOffTNGoak/source.gif",
    "https://media.giphy.com/media/MMIKQNEsdmKSk/source.gif",
    "https://media.giphy.com/media/3oAt2dA6LxMkRrGc0g/source.gif",
    "https://media.giphy.com/media/B4ORVnBvJCVvq/source.gif",
    "https://media.giphy.com/media/husap494ivmwtYqMKL/source.gif",
    "https://media.giphy.com/media/ggES1ZrM3NU1trMvYh/source.gif"
  ];
  const smhCard = {
    "cards": [
      {
        "sections": [
          {
            "widgets": [
              {
                "image": {
                  "imageUrl": randyGifs[Math.floor(Math.random() * randyGifs.length)],
                  "onClick": {
                    "openLink": {
                      "url": ""
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
  return smhCard
}
