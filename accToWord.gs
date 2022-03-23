/**
 * resonse to accomedations abbreviate
 *
 */
const accToWord = (txt) => {
  console.log(`event = ${txt}`);
  let _abbr;
  let spell = ACCOM.find(o => o.Abbreviation === txt);
  _abbr = [
    {
      "header": {
        "title": `╰|  ͡° ͜ʖ ͡° |つ──☆*:・ﾟ Kazam`,
        "subtitle": `${txt} should be...`
      },
      "sections": [
        {
          "widgets": [
            {
              "textParagraph": {
                "text": `${spell.Accommodation}`
              }
            }
          ]
        }
      ]
    }
  ];
  return {"cards": _abbr}
}
const something = () =>{
  accToWord()
}
