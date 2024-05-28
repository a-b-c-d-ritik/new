console.log("HEllo bsuhue");

let fname="jadu";
let age=19;
console.log("hey "+fname+" are you "+age+" years old");

let ages=[23,36,42,77,90];

for(let i=0;i<ages.length;i++)
{
    if(ages[i]%2===0)
    console.log(ages[i]);
}

const ob=
{
    firstname:'jadu',
    lastname:'kumar',
    age:19,
    birthyr:2001,
    friends : ['max','nina','milli'],
    
    calcage:function(){
        return 2024-this.birthyr;
    }

};

console.log(ob);

console.log(ob.age);
console.log(ob['firstname']);

const Nkey='name';
//console.log(ob.('last'+Nkey));
for(let i=0;i<3;i++)
console.log(ob.friends[i]);

let z=prompt("Enter data(firstName/Lastname,age,Friends) to find: ");
if(ob[z])
console.log(ob[z]);
else
console.log("undefined");

console.log(ob.firstname+ " is "+ob.age+ " years old");
console.log(ob.firstname+ " has"+ob.friends.length+ " friends");
console.log(ob.calcage);