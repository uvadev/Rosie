/**
 * Responds to a MESSAGE event @ && thanks.
 *
 * Returns random Gif that says thanks
 */
const thanksRosie = () => {
  const randyGifs = [
    "https://media.giphy.com/media/gLv9hDfYSyFyg/giphy.gif",
    "https://media.giphy.com/media/nU704Y2jeFOHm/giphy.gif",
    "https://media.giphy.com/media/5xtDarmwsuR9sDRObyU/giphy.gif",
    "https://media.giphy.com/media/l3q2wJsC23ikJg9xe/giphy.gif",
    "https://media.giphy.com/media/xUPGcxpCV81ebKh7Vu/giphy.gif",
    "https://media.giphy.com/media/3oEjHWXddcCOGZNmFO/giphy.gif",
    "https://media.giphy.com/media/11htLOXJ6cC6KQ/giphy.gif",
    "https://media.giphy.com/media/WOISCgp6Ycnljqg9x8/giphy.gif",
    "https://media.giphy.com/media/fxyVGiXqwhe4PFaCZo/giphy.gif",
    "https://media.giphy.com/media/l0G17XyY2h9YKHrMI/giphy.gif",
    "https://media.giphy.com/media/EcJVgdgqcV7wAvWUay/giphy.gif",
    "https://media.giphy.com/media/wypXxlLUpzp7O/giphy.gif",
    "https://media.giphy.com/media/RKYL7EWaqbJMy8bOFH/giphy.gif",
    "https://media.giphy.com/media/G6yWdO1KsSgxyQMv0h/giphy.gif",
    "https://media.giphy.com/media/ZCZVa6W2f1W4mATLEc/giphy.gif",
    "https://media.giphy.com/media/5Cq0JRn77pwD6/giphy.gif",
    "https://media.giphy.com/media/xUySTJE4SmnSWHe4c8/giphy.gif",
    "https://media.giphy.com/media/9PH9saRidMXIs/giphy.gif",
    "https://media.giphy.com/media/18RnbF8lLA9tC/giphy.gif",
    "https://media.giphy.com/media/1lk1IcVgqPLkA/giphy.gif",
    "https://media.giphy.com/media/Ni4AelcekTuhy/giphy.gif"
  ];
  const thankYouCard = {
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
  return thankYouCard
}
