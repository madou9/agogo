let m;
const affichageMinuteur = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons=document.querySelectorAll('[data-time]');


function timer(seconds){
  //effacer les buttons excistant pour qu'un button fonctionne à la fois
  clearInterval(m); 
 const now = Date.now(); 
 const momentPrecis = now + seconds * 1000;
 // j'ai mis le restantAffichage ici pour que ca affiche immediatement dey que la function est appèlé
 restantAffichage(seconds);
 displayEndTime(momentPrecis);
 
 m = setInterval(() => {
   const secondsRestant = Math.round((momentPrecis - Date.now()) / 1000);
   //stop de l'interval
   if (secondsRestant < 0){
     clearInterval(m);
     return;
   }

   //afficher le
   restantAffichage(secondsRestant)
 }, 1000);

}

function restantAffichage(seconds){
  //convertion minute et seconds et affichage de la minute 
  const minutes = Math.floor(seconds / 60);
  // affichage de la second restant
  const remainderSeconds = seconds % 60;
  const affichage = `${minutes}:${remainderSeconds}`;
  //affiche sur le titre de la page
  document.title = affichage;
  affichageMinuteur.textContent = affichage;
  
}

//affichage de be back at

function displayEndTime(temporels){
const fin = new Date(temporels);
const hour = fin.getHours();
const minutes = fin.getMinutes();
endTime.textContent = `Be Back at ${hour}:${minutes}`; 

}

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button=>button.addEventListener('click',startTimer));
document.querySelector("#but").addEventListener("click", () => {
  var entree = document.getElementById("entree").value
  clearInterval(m);
  a = entree;
  timer(a, "timer")
  restantAffichage(seconds);
})
