/**
 * Responds to a MESSAGE weekly && report
 *
 * @param {Object} userName the event.username object from Chat
 */
//admin list config
const openWeeklyReport = (userName) => {
  const High = "";
  const Middle = "";
  const Elementary = "";
  const FullSchool = "";
  const ContentName = "";


  const adminList = {
    "":High,
    "":Middle
  }
  /**look through the keys and see if username is present**/
  if (Object.keys(adminList).includes(userName)) {
    const thisUserSheet = adminList[userName];
    return reportCard(thisUserSheet,ContentName);
  }
}
