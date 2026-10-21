const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois depenses en nombres.
const transport = Number(transportTexte);
const alimentation = Number(alimentationTexte);
const loisirs = Number(loisirsTexte);   

// TODO : calculez le total, le budget restant et si le budget est respecte
const totalDepenses = transport + alimentation + loisirs;
const budgetRestant = budget - totalDepenses;
const budgetRespected = budgetRestant >= 0;

// TODO : affichez le rapport uniquement avec des litteraux de gabarit.

console.log(`Rapport de depenses à compléter pour ${nom}.`);
console.log(`Total des dépenses : ${totalDepenses} FCFA`);
console.log(`Budget restant : ${budgetRestant} FCFA`);
console.log(`Budget respecté : ${budgetRespected ? 'Oui' : 'Non'}`);    


