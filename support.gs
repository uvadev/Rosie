/**
 * Responds to a /support Chat.
 */
const support = () => {
  const supportCard =
  {
    "cards": [
      {
        "header": {
          "title": "UVA Tech Support",
          "subtitle": "list of support options",
          "imageUrl": "https://universityview.academy/wp-content/uploads/2020/01/LYNX-REVISED-JAN2019-e1578069141697-513x640.jpg"
        },
        "sections": [
          {
            "widgets": [
              {
                "keyValue": {
                  "topLabel": "MISTG",
                  "content": ""
                }
              },
              {
                "keyValue": {
                  "topLabel": "Phone",
                  "content": ""
                }
              }
            ]
          },
          {
            "widgets": [
              {
                "keyValue": {
                  "topLabel": "UVA Tech Support",
                  "content": ""
                }
              }
            ]
          },
          {
            "widgets": [
              {
                "keyValue": {
                  "topLabel": "Canvas Support",
                  "content": `<font color ="#4287f5">Canvas Chat`,
                  "onClick": {
                    "openLink": {

                      url: "https://"

                    }
                  },
                }
              },
              {
                "keyValue": {
                  "topLabel": "Phone",
                  "content": ""
                }
              }
            ]
          }
        ]
      }
    ]
  }
  return supportCard
}
