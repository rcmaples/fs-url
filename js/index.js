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
    
    let searchType = '';
    searchType = $('#searchField').val();
    
    switch(searchType){
      case 'email':
        console.log('case: email');
        generateEmailURL(textArr);
        break;
      case 'name':
        console.log('case: name');
        generateNameURL(textArr);
        break;
      case 'uid':
        console.log('case: uid');
        generateUidURL(textArr);
        break;
    }
    
    // urlGenerator(textArr);
    resetSelect()
  });
}

function resetSelect(){
  $('#searchField').prop('selectedIndex', 0)
}

function generateNameURL(searchArray) {
  let url=''
  let searchString = searchArray.map(item => `"${item}"`).join();
  console.log(searchString);
  let encoded = encodeURIComponent(searchString);
  console.log(encoded);
  if (window.location == `https://fs-url.glitch.me/staging`){
   url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserDisplayName:is:%5B${encoded}%5D)):():():():)/0`;
  } else {
   url = `https://app.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserDisplayName:is:%5B${encoded}%5D)):():():():)/0`;
  }
 console.log(url);
  displayURL(url);
}

function generateUidURL(searchArray) {
  let url=''
  let searchString = searchArray.map(item => `"${item}"`).join();
  console.log(searchString);
  let encoded = encodeURIComponent(searchString);
  console.log(encoded);
  if (window.location == `https://fs-url.glitch.me/staging`){
   url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserAppKey:==:%5B${encoded}%5D)):():():():)/0`;
  } else {
   url = `https://app.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserAppKey:==:%5B${encoded}%5D)):():():():)/0`;
  }
 console.log(url);
  displayURL(url);
}


function generateEmailURL(searchArray) {
  let url=''
  let searchString = searchArray.map(item => `"${item}"`).join();
  console.log(searchString);
  let encoded = encodeURIComponent(searchString);
  console.log(encoded);
  if (window.location == `https://fs-url.glitch.me/staging`){
   url = `https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserEmail:==:%5B${encoded}%5D)):():():():)/0`;
  } else {
   url = `https://app.fullstory.com/ui/org/segments/everyone/people:search:((NOW%2FDAY-29DAY:NOW%2FDAY%2B1DAY):((UserEmail:==:%5B${encoded}%5D)):():():():)/0`;
  }
 console.log(url);
  displayURL(url);
}


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
