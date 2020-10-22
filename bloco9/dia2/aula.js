const appendJoke = (joke) => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = joke;
    ul.appendChild(li);
  };
  
  const getRandomJokeCallback = (term, callback) => {
    const param = { headers: { Accept: 'application/json' } };
    fetch(`https://icanhazdadjoke.com/search?term=${term}`, param)
      .then((response) => {
        response.json().then((data) => {
          const joke = data.results[0].joke;
          appendJoke(joke);
          callback ? callback() : undefined;
        })
      })
  }
  
  const fetchJokeCallback = () => {
    getRandomJoke("spider", 
      getRandomJoke("pizza",
        getRandomJoke("wolf",
          getRandomJoke("ant")
        )
      )
    );
  }
  
  const getRandomJoke = (term) => {
    return new Promise((resolve, reject) => {
      const param = { headers: { Accept: 'application/json' } };
      fetch(`https://icanhazdadjoke.com/search?term=${term}`, param)
        .then((response) => {
          response.json()
            .then((data) => {
              const joke = data.results[0].joke;
              appendJoke(joke);
              resolve();
            })
        });
    });
  }
  
  // const fetchJoke = () => {
  //   getRandomJoke("spider")
  //     .then(() => getRandomJoke("pizza"))
  //     .then(() => getRandomJoke("ant"))
  //     .then(() => getRandomJoke("wolf"))
  //     .catch((error) => console.log(error));
  
  //   console.log("XABLAU");
  // }
  
  const fetchJoke = async () => {
    try {
      await getRandomJoke("spider");
      await getRandomJoke("pizza");
      await getRandomJoke("wolf");
      await getRandomJoke("ant");
  
      console.log("XABLAU");
    } catch (error) {
      console.log(error);
    }
  }
  
  window.onload = fetchJoke();