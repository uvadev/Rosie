/**
 * Responds to a MESSAGE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Chat
 */
const onMessage = (event) => {
  //console.log(event);

  if (event.message.slashCommand) {
    switch (event.message.slashCommand.commandId) {
      case 1:  // /help
        return botHelp();
      case 2: //support information
        return support();
      case 3: //smh gif
        return smh();
      case 4: //resources card info
       schoolNavLIPop();
       return schoolSiteCard();
       case 5: //student current grades in active courses
       return studentsCurrentGrades();
    }
  }

  if (!event.message.argumentText
    || event.message.argumentText === "undefined") {// 
    return atRosie(event);
  } else {
    // Other existing handling for users invoking your bot by name.
    if (event.message.argumentText.toLowerCase().includes("wifi")
      && event.message.argumentText.toLowerCase().includes("password")
      || event.message.argumentText.toLowerCase().includes("wifi")
      && event.message.argumentText.toLowerCase().includes("passwords")) {
      return wifiPassBack();
    }
    if (event.message.argumentText.toLowerCase().includes("password")
      && event.message.argumentText.toLowerCase().includes("gmail")
      || event.message.argumentText.toLowerCase().includes("password")
      && event.message.argumentText.toLowerCase().includes("jcampus")
      || event.message.argumentText.toLowerCase().includes("password")
      && event.message.argumentText.toLowerCase().includes("microsoft")) {
      return forgotGmailMicrosoftPassword(event.user.displayName, event.message.argumentText.trim());
    }
    if (event.message.argumentText.toLowerCase().includes("weekly")
      && event.message.argumentText.toLowerCase().includes("report")) {
      return openWeeklyReport(event.user.displayName);
    }
    if (event.message.argumentText.toLowerCase().includes("monthly")
      && event.message.argumentText.toLowerCase().includes("update")) {
      return openMonthlyUpdate();
    }
    if (event.message.argumentText.trim().toLowerCase() === "prompt") {
      return rosiePrompt();
    }
    if (event.message.argumentText.toLowerCase().includes("thank")
      && event.message.argumentText.includes("@")) {
      return thanksRosie();
    }
    if (event.message.argumentText.toLowerCase().includes("welcome")
      && event.message.argumentText.includes("@")) {
      return welcomeRosie();
    }
    if (event.message.argumentText.toLowerCase().includes("laptop")
      && event.message.argumentText.includes("battery")
      || event.message.argumentText.toLowerCase().includes("computer")
      && event.message.argumentText.includes("battery")
      || event.message.argumentText.toLowerCase().includes("macbook")
      && event.message.argumentText.includes("battery")) {
      return laptopBattery(event.user.displayName, event.message.argumentText.trim());
    }
    if (event.message.argumentText.toLowerCase().includes("password")
      && event.message.argumentText.toLowerCase().includes("adobe")
      || event.message.argumentText.toLowerCase().includes("password")
      && event.message.argumentText.toLowerCase().includes("connect")) {
      return forgotAdobePassword(event.user.displayName, event.message.argumentText.trim());
    }
    if (event.message.argumentText.toLowerCase().includes("file")
      && event.message.argumentText.toLowerCase().includes("upload")) {
      return letterMaker();
    }
    if(ACCOM.find(text => text.Abbreviation  === event.message.argumentText.toUpperCase().trim()) !== undefined){
      return accToWord(event.message.argumentText.trim().toUpperCase());
    }
  }
}
