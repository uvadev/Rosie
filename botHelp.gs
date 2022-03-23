/**
 * Responds to a /COMMAND help or @rosie.
 *
 */
const botHelp = () => {
  const _help = [
    {
      "header": {
        "title": `＼(º □ º )/....  HELP`,
        "subtitle": `|ง •̀_•́|ง things I can help with`
      },
      "sections": [
        {
          "widgets": [
            {
              "textParagraph": {
                "text": `<font color="#77bfe6">Prompt</font><br><i>Description</i><br>------------------------------<br><font color="#77bfe6">Wifi Password</font><br><i>shows wifi passwords for all buildings</i><br>-----------------<br><font color="#77bfe6">Gmail Password</font><br><i>sends a ticket To MIS to help you reset your gmail password</i><br>-----------------<br><font color="#77bfe6">JCampus Password</font><br><i>sends a ticket To MIS to help you reset your Microsoft password</i><br>-----------------<br><font color="#77bfe6">Microsoft Password</font><br><i>sends a ticket To MIS to help you reset your Microsoft password</i><br>-----------------<br><font color="#77bfe6">Adobe Password</font><br><i>sends a ticket To Daniel to help you reset your Adobe Connect</i><br>-----------------<br><font color="#77bfe6">Weekly report</font><br><i>Weekly report Document (Admins only)</i><br>-----------------<br><font color="#77bfe6">Monthly school updates</font><br><i>Monthly school update document</i><br>-----------------<br><font color="#77bfe6">Thank @someone</font><br><i>returns thank you gif to someone else in the room(replace @someone with persons name and must be within a room EX: @Rosie thank @Sara Mungall)</i><br>-----------------<br><font color="#77bfe6"> @someone Welcome</font><br><i>returns welcome gif to someone else in the room(replace @someone with persons name and must be within a room EX: @Rosie tell @Sara Mungall welcome)</i><br>-----------------<br><font color="#77bfe6">laptop/macbook battery</font><br><i>begins a ticket w/MIS to schedule a review of current laptop/Macbook</i><br>-----------------<br><font color="#77bfe6">Accommodations</font><br><i>type an accomedation Abbreviation and Rosie will give you the spelled out version (Ex: @Rosie ab)</i><br>-----------------<br><font color="#77bfe6">/help</font><br><i>list of things I can help with</i><br>------------------------------<br><font color="#77bfe6">/smh</font><br><i>shaking my head gif sent anonymously</i><br>------------------------------<br><font color="#77bfe6">/support</font><br><i>List of technical support resources</i><br>------------------------------<br><font color="#77bfe6">/teacherResources</font><br><i>Daniel's teacher resource site links</i><br>------------------------------<br><font color="#77bfe6">/currentGrades</font><br><i>Returns current grades, recent activity, and missing submission for a student based on their SIS ID </i><br>------------------------------<br>`
              }
            }
          ]
        }
      ]
    }
  ];
  return { "cards": _help }
}
