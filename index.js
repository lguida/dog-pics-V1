function getDogImage(number) {
    console.log(number);
    const urlToFetch = 'https://dog.ceo/api/breeds/image/random/' + number;
    console.log(urlToFetch)
    fetch(urlToFetch)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson,number))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
  function displayResults(responseJson,number) {
    console.log(responseJson);
    //replace the existing image with the new one
    $('.results-img').replaceWith(
      `<img src="${responseJson.message[0]}" class="results-img">`)
    
    for (i = 0; i < number; i++){
      console.log(responseJson.message[i])
    }
    
    //display the results section
    //$('.results').removeClass('hidden');
    //
    //}
  }
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      let numPhotosToFind = 3;
      numPhotosToFind = $(event.currentTarget).find('#photo-num').val(); 
      if (numPhotosToFind > 50){
          alert("Please select a number between 1 and 50")
      }
      else{
        getDogImage(numPhotosToFind);
      }
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });