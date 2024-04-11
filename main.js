import Hero from './js/enfant.js';

import Personne from './js/maman.js';

const superMan=new Personne("clarck",33,"fly",false);
const grandHero=new Hero("Alexandre",25,"climb","masculin","film");

console.log(grandHero);
console.log(superMan.getInfo());
const h1=document.querySelector("h1");
const div =document.createElement("div");
const p=document.createElement("p");
h1.after(div);

div.append(p);
p.textContent=superMan.getInfo();

