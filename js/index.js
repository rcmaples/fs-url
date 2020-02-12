function getStarted() {
  // do stuff
  console.log('jQuery is ready.');
  formSubmission();

  //
}

function formSubmission() {
  $('form').submit(function(event) {
    event.preventDefault();
    let textArr = $('#searchCriteria')
      .val()
      .trim()
      .split(/\n/);
    console.log(textArr);
    
    let encodedText = encodeText(textArr)
    
    let searchType = '';
    searchType = $('#searchField').val();
    
    switch(searchType){
      case 'email':
        console.log('case: email');
        generateEmailURL(encodedText);
        break;
      case 'name':
        console.log('case: name');
        generateNameURL(encodedText);
        break;
      case 'uid':
        console.log('case: uid');
        generateUidURL(encodedText);
        break;
      case 'orgid':
        console.log('case: orgid')
        generateOrgIdURL(encodedText);
        break;
      case 'orgName':
        console.log('case: orgName')
        generateOrgNameURL(encodedText);
        break;
      case 'soldTo':
        console.log('case: HD Supply - Sold To')
        generateHDSupplySoldTo(encodedText);
        
    }
    resetSelect()
  });
}

function resetSelect(){
  $('#searchField').prop('selectedIndex', 0)
}


function encodeText(arr){
  let searchString = arr.map(item => `"${item}"`).join();
  let str = encodeURI(searchString).replace(/[()]/g, function(c){
    return '%' + c.charCodeAt(0).toString(16);
  });
  console.log(`str: `, str)
  return str;
}


function generateHDSupplySoldTo(encoded) {
  let url=''
  url = `https://app.fullstory.com/ui/GYHXA/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((user_soldTo_str:==:%5B${encoded}%5D)):():():():)/0`;
  displayURL(url);
}


function generateEmailURL(encoded) {
  let url=''
  if (window.location == `https://fs-url.glitch.me/staging`){
   url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserEmail:==:%5B${encoded}%5D)):():():():)/0`;
  } else {
   url = `https://app.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserEmail:==:%5B${encoded}%5D)):():():():)/0`;
  }
  console.log(`encoded: `, encoded)
  // console.log(`url: `, url)
  displayURL(url);
}

function generateOrgNameURL(encoded) {
  let url=''
  if (window.location == `https://fs-url.glitch.me/staging`){
   url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((user_OrgName_str:==:%5B${encoded}%5D)):():():():)/0`;
  } else {
   url = `https://google.com`;
  }
  displayURL(url);
}

// function generateOrgNameURL(searchArray) {
//   let url=''
//   let searchString = searchArray.map(item => `"${item}"`).join();
//   let encoded = encodeURIComponent(searchString);
//   if (window.location == `https://fs-url.glitch.me/staging`){
//    url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((user_OrgName_str:==:%5B${encoded}%5D)):():():():)/0`;
//   } else {
//    url = `https://google.com`;
//   }
//   displayURL(url);
// }

function generateOrgIdURL(encoded) {
  let url=''
  if (window.location == `https://fs-url.glitch.me/staging`){
   url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((user_OrgId_str:==:%5B${encoded}%5D)):():():():)/0`;
  } else {
   url = `https://google.com`;
  }
  displayURL(url);
}

// function generateOrgIdURL(searchArray) {
//   let url=''
//   let searchString = searchArray.map(item => `"${item}"`).join();
//   let encoded = encodeURIComponent(searchString);
//   if (window.location == `https://fs-url.glitch.me/staging`){
//    url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((user_OrgId_str:==:%5B${encoded}%5D)):():():():)/0`;
//   } else {
//    url = `https://google.com`;
//   }
//   displayURL(url);
// }

function generateNameURL(encoded) {
  let url=''
  if (window.location == `https://fs-url.glitch.me/staging`){
   url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserDisplayName:is:%5B${encoded}%5D)):():():():)/0`;
  } else {
   url = `https://app.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserDisplayName:is:%5B${encoded}%5D)):():():():)/0`;
  }
  displayURL(url);
}


// function generateNameURL(searchArray) {
//   let url=''
//   let searchString = searchArray.map(item => `"${item}"`).join();
//   let encoded = encodeURIComponent(searchString);
//   if (window.location == `https://fs-url.glitch.me/staging`){
//    url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserDisplayName:is:%5B${encoded}%5D)):():():():)/0`;
//   } else {
//    url = `https://app.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserDisplayName:is:%5B${encoded}%5D)):():():():)/0`;
//   }
//   displayURL(url);
// }

function generateUidURL(encoded) {
  let url=''
  if (window.location == `https://fs-url.glitch.me/staging`){
   url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserAppKey:==:%5B${encoded}%5D)):():():():)/0`;
  } else {
   url = `https://app.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserAppKey:==:%5B${encoded}%5D)):():():():)/0`;
  }
  displayURL(url);
}


// function generateUidURL(searchArray) {
//   let url=''
//   let searchString = searchArray.map(item => `"${item}"`).join();
//   let encoded = encodeURIComponent(searchString);
//   if (window.location == `https://fs-url.glitch.me/staging`){
//    url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserAppKey:==:%5B${encoded}%5D)):():():():)/0`;
//   } else {
//    url = `https://app.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserAppKey:==:%5B${encoded}%5D)):():():():)/0`;
//   }
//   displayURL(url);
// }


// function generateEmailURL(searchArray) {
//   let url=''
//   let searchString = searchArray.map(item => `"${item}"`).join();
//   console.log(searchString);
//   let encoded = encodeURIComponent(searchString);
//   console.log(encoded);
//   if (window.location == `https://fs-url.glitch.me/staging`){
//    url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserEmail:==:%5B${encoded}%5D)):():():():)/0`;
//   } else {
//    url = `https://app.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserEmail:==:%5B${encoded}%5D)):():():():)/0`;
//   }
//  console.log(url);
//   displayURL(url);
// }


function displayURL(url) {
  $('.js-url').html(`
  <a target="_blank" href=${url}>${url}</a>
  `);
}

$(getStarted);

/* Decoded Templates:
All Time Email:
https://app.staging.fullstory.com/ui/thefullstory.com/segments/everyone/people:search:(:((UserEmail:==:["rc@fullstory.com","rc@rcmaples.io"])):():():():)/0
Past Month Email:
https://app.staging.fullstory.com/ui/thefullstory.com/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserEmail:==:%5B%22rc%40fullstory.com%22%2C%22rc%40rcmaples.io%22%5D)):():():():)/0

User ID:
https://app.staging.fullstory.com/ui/thefullstory.com/segments/everyone/people:search:(:((UserAppKey:==:["rc@fullstory.com","rc@rcmaples.io"])):():():():)/0

User Name:
https://app.staging.fullstory.com/ui/thefullstory.com/segments/everyone/people:search:(:((UserDisplayName:is:["RC Maples","Ben McCormack"])):():():():)/0
*/
