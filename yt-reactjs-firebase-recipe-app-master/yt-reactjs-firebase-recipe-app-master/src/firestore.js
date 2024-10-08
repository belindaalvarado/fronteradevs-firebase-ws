import {
    collection,
    onSnapshot,
    doc,
    addDoc,
    deleteDoc
  } from "firebase/firestore"
  import { db } from "./firebase.config"
  const Recipe_Book= "recipes";
  
 export function addRecipe(title,desc,ingredients,steps) {
    addDoc(collection(db,Recipe_Book),{title,desc,ingredients,steps});
 }

 export async function getRecipe(title) {//if we end up using user id we can switch title to that and it should work
    const recipesQuery = query(collection(db,Recipe_Book),where("title","==",title),orderBy("title"));
    
    
    const unsubscribe=onSnapshot(recipesQuery, async(snapshot)=>{
        let allRecipes=[];
        for (const documentSnapshot of snapshot.docs) {
            const recipe = documentSnapshot.data();
            await allRecipes.push({
                title: recipe.title,
                desc: recipe.desc,
                ingredients: recipe.ingredients,
                steps: recipe.steps,
                id: documentSnapshot.id,
                //imageUrl: await DownloadURL(recipe['imageBucket'])
            });
        }
        setRecipes(allRecipes);
        setIsLoadingRecipes(false);
        });
    return unsubscribe;
 }

 export function updateRecipe(docId,title,desc,ingredients,steps){
    setDoc(doc(db,Recipe_Book,docId),{title,desc,ingredients,steps});
 }
 export function deleteRecipe(id){
    deleteDoc(doc(db,Recipe_Book,id));
 }