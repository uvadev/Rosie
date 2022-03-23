async function studentsCurrentGradesCard(event) {
  let canvasId = await sisToCanvasId(event['common']['formInputs']['canvasID']['']['stringInputs']['value']);
  const data = await writeScores(canvasId);
  const dataHis = await kidHistory(canvasId);
  const dataSub = await kidMissingSubs(canvasId);
  let dialogh = {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": `| ⌐■_■|ノ Rosie did the thing `,
                "widgets": [
                  {
                    "decoratedText": {
                      "text": `${data[0]}`,
                      "bottomLabel": "",
                      "startIcon": {
                        "knownIcon": "PERSON",
                        "altText": "user icon",
                        "imageType": "CIRCLE"
                      },
                      "topLabel": ""
                    },
                    "horizontalAlignment": "CENTER"
                  },
                  {
                    "textParagraph": {
                      "text": `${data.slice(1).map(function (key) { return key }).join("")}`
                    }
                  }
                ]
              },
              {
                "header": `${data[0]}'s Recent History`,
                "widgets": [
                  {
                    "textParagraph": {
                      "text": `${dataHis}`
                    }
                  }
                ],
                "collapsible": true
              },
              {
                "header": `${data[0]}'s Missing Submissions`,
                "widgets": [
                  {
                    "textParagraph": {
                      "text": `${dataSub}`
                    }
                  }
                ],
                "collapsible": true
              }
            ]
          }
        }
      }
    }
  };
  return dialogh;
}
