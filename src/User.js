
export function getRandomUsers(userCount, seed, gender) {
  const calcAge = birthday => {
    let birthdayDate = new Date(birthday.split(' ')[0].replace(/\-+/g, '/'));
    const ageDifMs = parseInt(Date.now() - birthdayDate.getTime());
    // console.log(ageDifMs);
    const ageDate = new Date(ageDifMs);
    // console.log(ageDate);
    let age = Math.abs(ageDate.getUTCFullYear() - 1970);
      return age;
    };
  const promise = fetch(`https://randomuser.me/api/?results=${userCount}&nat=US&seed=${seed}&gender=${gender}`)
    .then(response => {
      if(response.status >= 400) {
        throw `Response invalid ( ${response.status} )`;
        return;
      }
      return response.json();
    })
    .then(({results}) => {

        return (
          results
          );
    })
    .catch(error => {
      console.log(error);
    });

  return promise;
}
