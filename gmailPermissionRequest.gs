/**
 * Not currently in use
 *
 * @param {Object} event the event object from Hangouts Chat
 */
const gmailPermissionRequest = (event) => {
  MailApp.sendEmail({
    to: "",
    subject: `${event.user.displayName} just added`,
    htmlBody: `UVA_Bot added ${event.user.displayName} to ${event.space.displayName}`
  });
}
