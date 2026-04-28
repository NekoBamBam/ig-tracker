const oldFollowers =
require("../../snapshot_old.json");

const newFollowers =
require("./snapshot_new.json");


const unfollows =
oldFollowers.filter(
user =>
!newFollowers.includes(user)
);


const newPeople =
newFollowers.filter(
user =>
!oldFollowers.includes(user)
);


console.log(
"\nTe dejaron de seguir:"
);

console.log(unfollows);


console.log(
"\nNuevos seguidores:"
);

console.log(newPeople);