/* filterByCountry
Skapa en funktion som tar emot listan på användare från user.js och en landskod 
och returnerar en ny lista innehållande endast användare med den landskoden. */

function filterByCountry(users, countryCode) {
    return users.filter(user => user.nat === countryCode);
}       
console.log(filterByCountry(users, 'AU'));

/* filterByGender
Skapa en funktion som tar emot listan på användare och en sträng "Male" eller "Female"
 och returnerar en ny lista innehållande endast kvinnliga eller manliga användare. */

function filterByGender(users, gender) {
  const femaleTitles = ["mrs", "miss", "ms", "mademoiselle", "madame"];

  return users.filter(user => {
    const title = user.name.title.toLowerCase();
    return gender === "Female" && femaleTitles.includes(title);
  });
}

const femaleUsers = filterByGender(users, "Female");
console.log("Kvinnliga användare:", femaleUsers);

/* listEmails
Skapa en funktion som tar emot listan på användare och 
returnerar en lista innehållandes endast användarnas emailaddresser */

function listEmails(users) {
    return users.map(user => user.email);
}

const emailList = listEmails(users);
console.log("Användarnas e-postadresser:", emailList);


