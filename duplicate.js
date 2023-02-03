const names = ["james", "Rosey", "Susana", "Stave", "Tingo", "Kim", "Jon", "james", "Resey", "Stave", "Jon", "Yukla", "Kaderoz", "lino"];

console.log(names);
console.log(Array.isArray(names));

function removeDublicate(names){
    const uniqueId = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(uniqueId.includes(name) === false){
            uniqueId.push(name);
        }
    }
    return uniqueId;
}

let uniqueName = removeDublicate(names);
console.log(uniqueName);

// second problem solve

let tokenNames = ["safepal", "polkadot", "KCS", "OJX", "Doge", "BNB", "polkadot", "KSC", "BNB", "Algo", "UNI", "Cake", "Bake", "CTK", "Cake", "Bake"];


function removeDuplicateToken(tokenNames){
    let uniqTokenName = [];
    for(let i = 0; i < tokenNames.length; i++){
        let tokenName = tokenNames[i];
        if(uniqTokenName.includes(tokenName) === false){
            uniqTokenName.push(tokenName);
        }
    }
    return uniqTokenName;
}
let uniqTokenName = removeDuplicateToken(tokenNames);
console.log(uniqTokenName);