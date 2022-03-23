/**
 * Responds to a REMOVED_FROM_SPACE event in Chat.
 * @param {object} event the event object from Chat
 */
const onRemoveFromSpace = (event) => {
  console.info(event);
  let bye = `|╯°□°|╯︵ ┻━┻ Why do this to me. Was I not useful?`;
  console.info(bye,
    (event.space.name ? event.space.name : `| °-°|removed from this chat`));
}
