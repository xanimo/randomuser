
export function getRandomUsers(userCount, gender) {
  const promise = fetch(`https://randomuser.me/api/?results=${userCount}&nat=US&gender=${gender}`)
    .then(response => {
      if(response.status >= 400) {
        throw `Response invalid ( ${response.status} )`;
        return;
      }
      return response.json();
    })
    .then(({results}) => {
      return results;
    })
    .catch(error => {
      console.log(error);
    });

  return promise;
}
