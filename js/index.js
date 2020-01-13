function getStarted() {
  // do stuff
  console.log('jQuery is ready.');
  formSubmission();

  //
}

function formSubmission() {
  $('form').submit(function(event) {
    event.preventDefault();
    let textArr = $('textarea')
      .val()
      .trim()
      .split(/\n/);

    console.log(textArr);
    // $('textarea').val('');
    urlGenerator(textArr);
  });
}

function urlGenerator(searchArray) {
  let searchString = searchArray.map(item => `"${item}"`).join();
  console.log(searchString);
  let encoded = encodeURIComponent(searchString);
  console.log(encoded);
  let url = `
  https://app.staging.fullstory.com/ui/org/segments/everyone/people:search:(:((UserEmail:==:%5B${encoded}%5D)):():():():)/0`;

  displayURL(url);
}

function displayURL(url) {
  $('.js-url').html(`
  <a target="_blank" href=${url}>${url}</a>
  `);
}

$(getStarted);

/* Templates:

https://app.staging.fullstory.com/ui/thefullstory.com/segments/everyone/people:search:(:((UserEmail:==:["rc@fullstory.com","rc@rcmaples.io"])):():():():)/0


*/
