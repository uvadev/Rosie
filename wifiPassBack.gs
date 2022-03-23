/**
 * Responds to a MESSAGE wifi && password.
 *
 * @param none
 */
const wifiPassBack = () => {
  const eWifi = ["",""];
  const aCWifi = ["",""];
  const vCWifi = ["",""];
  const lDWifi = ["",""];
  const cPWifi = ["",""]

  return {
    "cards": [
      {
        "header": {
          "title": "UVA Wifi Info",
          "subtitle": "Network Name -> Password",
          "imageUrl": "https://images.vexels.com/media/users/3/132688/isolated/lists/90c9e8b2e0e4f4a824e2b59cfa265af5-wifi-logo-sign.png"
        },
        "sections": [
          {
            "widgets": [
              {
                "keyValue": {
                  "topLabel": eWifi[0],
                  "content": eWifi[1]
                }
              },
              {
                "keyValue": {
                  "topLabel": aCWifi[0],
                  "content": aCWifi[1]
                }
              },
              {
                "keyValue": {
                  "topLabel": vCWifi[0],
                  "content": vCWifi[1]
                }
              },
              {
                "keyValue": {
                  "topLabel": lDWifi[0],
                  "content": lDWifi[1]
                }
              },
              {
                "keyValue": {
                  "topLabel": cPWifi[0],
                  "content": cPWifi[1]
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
