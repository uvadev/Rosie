
const sisToCanvasId = async (kidCID) => {
    let token = BID;
    let kidId;
  const fetchUrl = `/api/v1/accounts/1/users?enrollment_type=student&search_term=${kidCID[0]}`;
  const options = {
    credentials: "same-origin",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
    muteHttpExceptions: true,
    timeout: 5000,
  };
const response = UrlFetchApp.fetch(fetchUrl,options);
  (response.getResponseCode = 200 ? kidId = Object.values(JSON.parse(response.getContentText())).filter(x =>x.sis_user_id === kidCID[0]) : console.error(response.getResponseCode));
  return kidId[0].id
}

const nmGvr = async (res) =>{
 return JSON.parse(res).name;
};

const kidPro = async (kidCID) =>{
  let token = BID;
  let kidName;
  //
  //
  const fetchUrl = `/api/v1/users/${kidCID}`
  const options = {
    credentials: "same-origin",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
    muteHttpExceptions: true,
    timeout: 5000,
  };
  const response = UrlFetchApp.fetch(fetchUrl,options);
  (response.getResponseCode = 200 ? kidName = await nmGvr(response.getContentText()) : console.error(response.getResponseCode));

  return kidName;
};

const semesterList = async () => {
  let token = BID;
  let enrollTerms;
  let mapScores;
  //vars
  //

  const filterEnrollments = async (res) => {
    enrollTerms = JSON.parse(res).enrollment_terms.filter(
      (list) => Date.parse(list.end_at) > Date.now()
    );
  }


  const fetchUrl = `/api/v1/accounts/1/terms?per_page=100`;
  const options = {
    credentials: "same-origin",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
    muteHttpExceptions: true,
    timeout: 5000,
  };
  const response = UrlFetchApp.fetch(fetchUrl,options);
  (response.getResponseCode = 200 ? await filterEnrollments(response.getContentText()) : console.error(response.getResponseCode));
  const termIds = await enrollTerms.map((lI) => lI.id);
  return termIds;
};


const kidGrades = async (kidCID) => {
  let token = BID;
  let scores;
  //vars
  //

  const kidScores = async (res) => {
     scores = JSON.parse(res).map((item) => {
      return {
        score: item.enrollments[0]["computed_current_score"],
        score1: item.enrollments[0]["current_period_computed_current_score"],
        name: item.name,
        id: item.enrollment_term_id
      }
     });
  };

  const fetchUrl = `/api/v1/users/${kidCID}/courses?enrollment_state=active&include[]=total_scores&include[]=current_grading_period_scores`;
  const options = {
    credentials: "same-origin",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
    muteHttpExceptions: true,
    timeout: 5000,
  };
  const response = UrlFetchApp.fetch(fetchUrl,options);
  (response.getResponseCode = 200 ? await kidScores(response.getContentText()) : console.error(response.getResponseCode));
  
  return scores;
};

const writeScores = async (kCID) =>{
  let studentGradesOutput = [];
  const kidN = await kidPro(kCID);
  const kidG = await kidGrades(kCID);
  studentGradesOutput.push(kidN);
  const semesterListz = await semesterList();
for await (score of kidG){
                  if (semesterListz.indexOf(score.id) !== -1) {
                    const { score: theScore, name: name, score1: theOtherScore } = score;
                    studentGradesOutput.push(`
                    <b><font color="#77bfe6">${name}</font></b>,
                    <b>Current Score:</b> ${theScore ? theScore : "<strike>Not Available</strike>"},
                    <b>Current Grading Period Score:</b> ${theOtherScore ? theOtherScore : "<strike>Not Available</strike>"},
                    `)
                  };
                };
console.log(studentGradesOutput);
return studentGradesOutput;
}
// ------------------------------------------------------------------------------------------------------------------------------------------
// User History
// ------------------------------------------------------------------------------------------------------------------------------------------


const kidHistory = async (kidCID) =>{
  let token = BID;
  let kidHis;
  //
  const parseHis = async (res) => {
  kidHis = JSON.parse(res).map((item) => {
    return {
      course: `<font color="#77bfe6">Course: ${item.context_name}</font><br>`,
      name: `Assignment: ${item.asset_name}<br>`,
      time: `${new Date(item.visited_at).toString().slice(0,24)}<br>-------------------------------<br>`
    }
  })
};
  //
  const fetchUrl = `/api/v1/users/${kidCID}/history`
  const options = {
    credentials: "same-origin",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
    muteHttpExceptions: true,
    timeout: 5000,
  };
  const response = UrlFetchApp.fetch(fetchUrl,options);
  (response.getResponseCode = 200 ? await parseHis(response.getContentText()) : console.error(response.getResponseCode));
  let kidHisFinal = kidHis.map(function (key) { return Object.values(key).join("") })
  return kidHisFinal.join("");
  //console.log(kidHisFinal);
};

//-----------------------------------------------------------------------------------------------------------------------------------
// User Missing Submissions 
//------------------------------------------------------------------------------------------------------------------------------------

const kidMissingSubs = async (kidCID) =>{
  let token = BID;
  let kidSubs;
  //
  const parseHis = async (res) => {
  kidSubs = JSON.parse(res).map((item) => {
    return {
      course: `<font color="#77bfe6">Course: ${item.course.name}</font><br>`,
      name: `Assignment: ${item.name}<br>`,
      pp: `Points Possible: ${item.points_possible}<br>`,
      due: `${new Date(item.due_at).toString().slice(0,24)}<br>-------------------------------<br>`
    }
  })
};
  //
  const fetchUrl = `/api/v1/users/${kidCID}/missing_submissions?include[]=course&filter[]=submittable&per_page=100`
  const options = {
    credentials: "same-origin",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
    muteHttpExceptions: true,
    timeout: 5000,
  };
  const response = UrlFetchApp.fetch(fetchUrl,options);
  (response.getResponseCode = 200 ? await parseHis(response.getContentText()) : console.error(response.getResponseCode));
  let kidSubFinal = kidSubs.map(function (key) { return Object.values(key).join("") })
  return kidSubFinal.join("");
  //console.log(kidSubFinal);
};
