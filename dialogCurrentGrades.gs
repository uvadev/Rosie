const studentsCurrentGrades = () => {
  let card = {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "widgets": [
                  {
                    "decoratedText": {
                      "topLabel": "",
                      "text": "|づ ◕‿◕ |づ Rosie's Helping Hand"
                    }
                  },
                  {
                    "textInput": {
                      "label": "SIS ID",
                      "type": "SINGLE_LINE",
                      "name": "canvasID",
                      "hintText": "000000000"
                    }
                  },
                  {
                    "buttonList": {
                      "buttons": [
                        {
                          "text": "Submit",
                          "onClick": {
                            "action": {
                              "function": "studentsCurrentGradesCard"
                            }
                          },
                          "altText": "Submit",
                          "color": {
                            "red": 0.098,
                            "green": 0.549,
                            "blue": 0.239,
                            "alpha": 1
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
  return card
}
