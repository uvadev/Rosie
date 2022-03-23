/**
 * Responds to an ADDED_TO_SPACE event in Chat.
 * @param {object} event the event object from Chat
 * @return {object} JSON-formatted response
 * @see https://developers.google.com/hangouts/chat/reference/message-formats/events
 */

const onAddToSpace = (event) => {
  console.info(event);
  return rosieIntro(event);
}
