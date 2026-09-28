// ============================================================
// OUTILS DE STYLE POUR LE TERMINAL
// ============================================================

// 1. Un dictionnaire des codes d'échappement ANSI
// Ces codes indiquent au terminal de changer la couleur du texte.
const couleurs = {
  reset: "\x1b[0m",     // Arrête la couleur, retour à la normale
  rouge: "\x1b[31m",    // Pour les erreurs
  vert: "\x1b[32m",     // Pour les succès
  jaune: "\x1b[33m",    // Pour les avertissements ou les menus
  bleu: "\x1b[34m",     // Pour les informations
  magenta: "\x1b[35m",  // Pour mettre en évidence un résultat
  cyan: "\x1b[36m",     // Pour les titres de section
  gras: "\x1b[1m",      // Rend le texte plus épais (bold)
};

// 2. La fonction d'aide (Helper function)
// Elle prend votre texte, ajoute la couleur au début, 
// et ajoute le code "reset" à la fin pour ne pas colorer la suite.
function colorer(texte, code) {
  return code + texte + couleurs.reset;
}

// ============================================================
// EXEMPLES D'UTILISATION
// ============================================================

// Exemple A : Couleur simple
console.log(colorer("Opération réussie !", couleurs.vert));
console.log(colorer("Fichier introuvable.", couleurs.rouge));
console.log(colorer("Menu Principal", couleurs.jaune));

// Exemple B : Combiner des styles (Couleur + Gras)
// Vous pouvez additionner les codes avec le signe "+"
console.log(colorer("TITRE IMPORTANT", couleurs.cyan + couleurs.gras));

// Exemple C : Mélanger du texte normal et du texte coloré dans une phrase
const nom = "Alice";
const score = 95;
console.log(
  "Le joueur " + 
  colorer(nom, couleurs.bleu) + 
  " a obtenu " + 
  colorer(score + " points", couleurs.magenta + couleurs.gras) + 
  " !"
);




const prompt=require('prompt-sync')();

const candidats= [
    {
        cin: "HH123",
        nom: "bouchkak",
        prenom: "sanae",
        partiPolitique: "PAM",
        age: 45,
        electeurs: ["E001", "E002", "E003", "E004"]
    },
    {
        cin: "HJ123",
        nom: "Alaoui",
        prenom: "Sara",
        partiPolitique: "PAM",
        age: 38,
        electeurs: ["E005", "E006"]
    },
    {
        cin: "HC123",
        nom: "Bennani",
        prenom: "Omar",
        partiPolitique: "PJD",
        age: 50,
        electeurs: ["E007", "E008", "E009"]
    },
    {
        cin: "HM123",
        nom: "Amrani",
        prenom: "Salma",
        partiPolitique: "RNI",
        age: 42,
        electeurs: ["E010"]
    },
    {
        cin: "HC123",
        nom: "nainia",
        prenom: "Mehdi",
        partiPolitique: "PAM",
        age: 47,
        electeurs: ["E011", "E012", "E013", "E014", "E015"]
    },
    {
        cin: "HA123",
        nom: "bouchkak",
        prenom: "sanae",
        partiPolitique: "PAM",
        age: 45,
        electeurs: ["E001", "E002", "E003", "E004"]
    },
    {
        cin: "HO123",
        nom: "sdaq",
        prenom: "Sara",
        partiPolitique: "PAM",
        age: 38,
        electeurs: ["E005", "E006"]
    },
    {
        cin: "HP123",
        nom: "lkhal",
        prenom: "Omar",
        partiPolitique: "PJD",
        age: 50,
        electeurs: ["E007", "E008", "E009"]
    },
    {
        cin: "Hf123",
        nom: "belouali",
        prenom: "Salma",
        partiPolitique: "RNI",
        age: 42,
        electeurs: ["E010"]
    },
    {
        cin: "Hb123",
        nom: "ait hmad",
        prenom: "ayoub",
        partiPolitique: "PAM",
        age: 47,
        electeurs: ["E011", "E012", "E013", "E014", "E015"]
    }
];
 


// const  cin=parseInt(prompt('entrer CIN'));
// const nom=prompt('entrer le nom');
// const prenom=prompt('enter le prenom');
// const age=parseInt(prompt('enter votre age'));



let condition =true;
while(condition){
   console.log(`
        1-ajouter un nouveau candidaat
        2-ajouter plusieurs candidat
        3-afficher la liste de candidats
        4-voter pour un candidat
        5-modifier les informations d un candidat
        6-supprimer un candidat
        7-recherche les candidtas
        8-statistique de election:
        9-quitter
    `);
         let infos=parseInt(prompt('entrer votre choix  :'))
         switch(infos){
            case 1:
ajouterCandidat();
            break;
            case 2:
ajouterPlusieursC();
            break;
         
             case 3:
AffichagelisteCandidats();
              break;
              case 4:
voter();
              break;

              case 5:
modifierCandidat();
              break;

              case 6:
suppCandidat();
              break;

              case 7:
rechercheCandidat();
              break;

              case 8:
statistiqueelecteurs();
              break;

              case 9:
                condition=false;
console.log("au revoir");
              break;

         }

     
}

function ajouterCandidat() {

    const cinajout = prompt("Entrer CIN : ");

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cinajout) {
            console.log("CIN DEJA EXIST");
            return;
        }
    }

    const nom = prompt("Entrer le nom : ");
    const prenom = prompt("Entrer le prenom : ");
    const age = parseInt(prompt("Entrer votre age : "));
    const partiPolitique = prompt("Entrer ton partiPolitique : ");

    const candidat = {
        cin: cinajout,
        nom: nom,
        prenom: prenom,
        age: age,
        partiPolitique: partiPolitique,
        electeurs:[]
    };

    candidats.push(candidat);

    console.log("Candidat bien ajouté", candidat);
}




function AffichagelisteCandidats(){
    const choix=prompt(`
        1-tries les condidats
        2-filtrer et afficher uniq les candidats d un parti specifique
        3-afficher tous les candidats
    `);
    if (choix==="1"){
 for(let i=0;i<candidats.length-1;i++){
        for(let j=i+1;j<candidats.length;j++){
            if(candidats[i].electeurs.length<candidats[j].electeurs.length){
                swap=candidats[i]
                candidats[i]=candidats[j]
                candidats[j]=swap
            }


        }
        

        }
                console.table(candidats)
        
    }
      else if(choix==="2"){
        let TROUV=0;
        const partipl=prompt('entrer un partie politique  ');
        for ( let i=0;i<candidats.length;i++){
            if(candidats[i].partiPolitique===partipl){ 
                TROUV=1;
                console.log(`
                    CIN : ${candidats[i].cin}
                    Nom et Prenom : ${candidats[i].nom } ${candidats[i].prenom}
                    Age : ${candidats[i].age}
                    Partie Politique : ${candidats[i].partiPolitique}
                    Nombre de vote : ${candidats[i].electeurs}`);
                }
            
            }
             if (TROUV==0){
                     console.log('Aucun parti ');
            }
else if(choix==="3"){
            console.table(candidats)
        } 
        
    }
 }



    function ajouterPlusieursC(){
    const nombre =parseInt(prompt('combien tu vous vouler :'));
for( let i=0;i<nombre;i++){
 const  cin=prompt('entrer CIN   :');
const partiPolitique=prompt('entrer ton partiPolitique :')
const nom=prompt('entrer le nom  ');
const prenom=prompt('enter le prenom  : ');
const age=parseInt(prompt('enter votre age : '));

const candidat={
    nom:nom,
    prenom:prenom,
    age:age,
cin:cin,
partiPolitique:partiPolitique,
electeurs :[],

};
candidats.push(candidat);
console.log(candidat);
}
}


function voter() {

    const proprecin = prompt("Entrer le CIN de l'électeur");

    // Vérifier si le CIN existe déjà
    for (let i = 0; i < candidats.length; i++) {

        for (let j = 0; j < candidats[i].electeurs.length; j++) {

            if (proprecin === candidats[i].electeurs[j]) {

                console.log("CIN electeur  deja exist");
                return;
            }
        }
    }

    // Si le CIN n'existe pas, demander le CIN du candidat
    const cinducandidat = prompt("Entrer le CIN du candidat");

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cinducandidat) {

            candidats[i].electeurs.push(proprecin);

            console.log("Vote enregistre avec succes");
            return;
        }
    }

    console.log("Candidat introuvable");



}
    function modifierCandidat(){

    console.log(`
1 - Modifier le parti politique
2 - Modifier l'âge d'un candidat
`);

const choix = prompt("Entrer votre choix : ");

if(choix==="1"){
  const cincandidat=prompt('entrer le cin de candidat pour changer partipolitique');
          const nouveaupartipolitique=prompt('enter nououveau parti politique')
for(i=0;i<candidats.length;i++){
   if(candidats[i].cin===cincandidat){
        candidats[i].partiPolitique=nouveaupartipolitique;
        console.log("Parti politique modifie avec succes",candidats[i]);
            
            return;
    }
      }
}

if (choix==="2"){
    const cincandidat1=prompt('enter  enter un cin du candidat')
const agemodif=parseInt(prompt('entrer un age pour modifer'));
if (isNaN(agemodif) || agemodif < 18) {
    console.log("Age invalide");
    return;
}


    for( let i=0;i<candidats.length;i++){
        if(candidats[i].cin===cincandidat1){
candidats[i].age=agemodif;
console.log('age modifer avec succes ',candidats[i]);

return;
}

 }
}
}

function rechercheCandidat(){
//   count=0;
    const nomcandidatRechercher=prompt('entrer le nom de candidat ')
    for( let i=0;i<candidats.length;i++){
        if(candidats[i].nom===nomcandidatRechercher){
     console.log(candidats[i]);

     
        //   count++;
        //   if (count===2){
        //     break;
        //   }
           
        }
        else if(nomcandidatRechercher!==candidats[i].nom){
console.log('candidat no trouve')
break;
     }

    }
}





function suppCandidat(){
const cincandidatsupp=prompt('enter le cin s il vous plait que vous supprimer');
for(i=0; i<candidats.length;i++){
   
if(candidats[i].cin===cincandidatsupp){
for (j=0;j<candidats.length-1;j++){
    candidats[j]=candidats[j+1];

candidats.length=candidats.length-1;
  console.log("Candidat supprimé");
break
}
}
}
}
function statistiqueelecteurs(){
    const choix=prompt(`
      1-afficher le nombre total de candidats
      2-afficher le nombre total de votes exprimes dans toutes l election
      3-afficher le top3 des candidats ayant le plus votes
      4-afficher le nombre de candidats par parti polotique  
        `);
        if(choix==="1"){
           let count=0;
            for(i=0;i<candidats.length;i++){
count++;

            }
            console.log( " le nombre de candidats est:",count);
        }

        if(choix==="2"){
               let total =0;
for( let i=0;i<candidats.length;i++){

total =total + candidats[i].electeurs.length;
// ila bghina ghir candidat whed mkndiroch total
    
   
}
 console.log(' le nombre total de electeurs votes',total)

        }

        if(choix==="3"){
            
            for( let i=0;i<candidats.length;i++){
               for (let  j = i + 1 ; j < candidats.length ; j++ ){
                if (candidats[i].electeurs.length < candidats[j].electeurs.length){
                   let swap = candidats[i] ;
                   candidats[i] = candidats[j];
                   candidats[j] = swap
                }
               }
            }
            for (let i = 0 ; i < 3 ; i ++){
                console.log(`
                    CIN : ${candidats[i].cin}
                    Le candida : ${candidats[i].nom}  ${candidats[i].prenom}
                    Âge : ${candidats[i].age}
                    Parti politique : ${candidats[i].partiPolitique}
                    Les votes : ${candidats[i].electeurs.length}
                    `)
            
            }

















            
        }
        if(choix==="4"){
            const nompartipolitique=prompt('enter partie politique pour affichage');
            let count=0;
            for(i=0;i<candidats.length;i++){
              
                    if(candidats[i].partiPolitique===nompartipolitique){
                        count++;
                    }
                }
                 console.log("Nombre de candidats du parti", nompartipolitique, ":", count);
            }
        }







    


    

    
    
    
