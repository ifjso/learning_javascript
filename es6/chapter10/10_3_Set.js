const roles = new Set();

roles.add("User");
console.log(roles);

roles.add("Admin");
console.log(roles);

console.log(roles.size);

roles.add("User");
console.log(roles.size);

console.log(roles.delete("Admin"));
console.log(roles);
console.log(roles.delete("Admin"));