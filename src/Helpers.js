
export function calculateAge() {
    var ageDifMs = Date.now();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var minAge = Math.abs(ageDate.getUTCFullYear() - 2000);
    var maxAge = Math.abs(ageDate.getUTCFullYear() - 1910)
    return minAge, maxAge;
}
