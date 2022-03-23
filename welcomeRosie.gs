/**
 * Responds to a MESSAGE event @ && thanks.
 *
 * Returns random Gif that says thanks
 */
const welcomeRosie = () => {
  const randyGifs = [
    "https://media.giphy.com/media/Q7y3K35QjxCBa/source.gif",
    "https://media.giphy.com/media/CaCFuS5lS9Q64/source.gif",
    "https://media.giphy.com/media/zLhThaK2kiZgY/source.gif",
    "https://media.giphy.com/media/felyWZRMgfd28/source.gif",
    "https://media.giphy.com/media/jmZh66axpz0IhFfAQw/source.gif",
    "https://media.giphy.com/media/kca7KwHpuUaOCoNcwi/source.gif",
    "https://media.giphy.com/media/9LwGb67aSQwVGIshn5/source.gif",
    "https://media.giphy.com/media/1ZVBVvY5kS7qUHhqI2/source.gif",
    "https://media.giphy.com/media/z6XSwQj34tEI/source.gif",
    "https://media.giphy.com/media/hr6p5UHdDn8RO/source.gif",
    "https://media.giphy.com/media/l19i0KAlyiKCEPbqKs/source.gif",
    "https://media.giphy.com/media/LTdkRDqf2Aaju/source.gif",
    "https://media.giphy.com/media/JwjBy94VzDd6/source.gif",
    "https://media.giphy.com/media/8YKstBTN4i68E/giphy.gif",
    "https://media.giphy.com/media/VGs4AxrJBk9aw/source.gif",
    "https://media.giphy.com/media/G5hNa0j0APyJG/source.gif",
    "https://media.giphy.com/media/POWvddaQEHrgc/source.gif",
    "https://media.giphy.com/media/111ebonMs90YLu/source.gif",
    "https://media.giphy.com/media/PKRWcVDuKXPry/source.gif",
    "https://media.giphy.com/media/3orifbI65TpFsotE2c/source.gif",
    "https://media.giphy.com/media/u2MIH8GoM8Dle/source.gif"
  ];
  const welcomeCard = {
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
  return welcomeCard
}
