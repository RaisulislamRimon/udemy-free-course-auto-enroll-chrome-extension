// find the enroll button if course is free 



setTimeout(() => {
  const enrollBtn = document.querySelectorAll('.buy-button button span')[0];
  const enrollBtnText = enrollBtn.innerHTML;

  if(enrollBtnText == "Enroll now"){
      enrollBtn.click();
  }
}, "5000");

// const lastEnrollBtn = document.querySelectorAll('button span');

// lastEnrollBtn[2]

// lastEnrollBtn[2].innerText


// const lastEnrollBtn = document.querySelectorAll('button span')[2];

// if(lastEnrollBtn.innerText == "Enroll now"){
//     lastEnrollBtn.click();
// }




setTimeout(() => {
  const lastEnrollBtn = document.querySelectorAll('button span')[2];
  const lastEnrollBtnText = lastEnrollBtn.innerText;

  if(lastEnrollBtnText == 'Enroll now'){
      lastEnrollBtn.click();
  }
}, "5000");

// start the course 




setTimeout(() => {
  const startCourseBtn = document.querySelectorAll(".ud-container .ud-btn span")[3];
  const startCourseBtnText = startCourseBtn.innerText;

  if(startCourseBtnText == 'Start course'){
    startCourseBtn.click();
  }

  setTimeout(function() {
    window.close();
  }, 5000);
}, "5000");
