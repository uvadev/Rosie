/**
 * Not currently in use
 *
 * @param {Object} event the event object from Chat
 */
const onCardClick = (event) => {
  //console.info('here',event.common.formInputs.canvasID);
  //let reason = event.action.parameters[0].value;
  // if (event.action.actionMethodName == "gmailPermissionRequest") {
  //   gmailPermissionRequest(event);
  // }
  if (event.action.actionMethodName === 'studentsCurrentGradesCard') {
    //console.log(event);
    return studentsCurrentGradesCard(event);
  }
}
