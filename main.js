import hero from './js/enfant.js';

import personne from './js/maman.js';

const superMan=new personne("clarck",33,"fly",false);
const grandHero=new hero("Alexandre",25,"climb","masculin","film");

console.log(grandHero);
console.log(superMan.getInfo());
