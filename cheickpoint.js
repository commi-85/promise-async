//Tâche 01:Itérer avec Async/Await: Ecrire une fonction async iterateWithAsyncAwait qui prend un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde entre les enregistrements.

async function iterateWithAsyncAwait (arr){
    for(let i=0; i<arr.length;i++){
        await new Promise((res)=>{
            setTimeout(res,1000)
        });
        console.log(arr[i]);
    }
}

iterateWithAsyncAwait([1,2,3,4,5]);



/*Tâche 02:
Attendre un appel: Créer une fonction asynchrone awaitCall qui simule l'obtention de données à partir d'une API. 
Utilisez await pour attendre la réponse de l'API, puis enregistrez les données. ( interroger une API)*/
const { default: axios } = require ("axios");

async function awaitcall() {
    try {
        let books = await axios.get("https://library-api.postmanlabs.com/books");
        console.log(books)
    } catch (error) {
        console.log(error);
    }
}

awaitcall();

/* Tâche 03:

Gérer les erreurs avec Async/Await:Modifiez la fonction awaitCall pour gérer les erreurs de manière élégante. Si l'appel à l'API échoue, attrapez l'erreur et enregistrez un message d'erreur convivial.

Chaîner Async/Await: Écrivez une fonction chainedAsyncFunctions qui appelle trois fonctions asynchrones distinctes de manière séquentielle. Chaque fonction doit enregistrer un message après un délai d'une seconde. Enchaînez ces fonctions en utilisant await.*/

async function toChain1(){
    await new Promise((res)=>{
        setTimeout(() => {
            res();
            console.log("there is first call");
        },1000);
    })
}

async function toChain2(){
    await new Promise((res)=>{
        setTimeout(() => {
            res();
            console.log("there is second call");
        },1000);
    })
}

async function toChain3(){
    await new Promise((res)=>{
        setTimeout(() => {
            res();
            console.log("there is third call");
        },1000);
    })
}

async function chainedAsyncFunctions() {
    await toChain1;
    await toChain2;
    await toChain3;
}
