// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
         response.json().then(function(json) {
           //console.log(json);
             const container = document.getElementById("container");
             
             container.innerHTML = `<h3>Number of Astronauts: ${json.length}</h3>`;

             json.sort((a1, a2) => a2.hoursInSpace - a1.hoursInSpace);
             
             for(astronaut of json){
                 let activeClass = '';
                 if(astronaut.active === true) {
                     activeClass = 'active';
                 }
                 
                 container.innerHTML += `
                 <div class="astronaut" id=${astronaut.id}>
                 <div class="bio">
                 
                 <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                 <ul>
                 <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                 <li><span class=${activeClass}>Active: ${astronaut.active}</span></li>
                 <li>Skills: ${astronaut.skills.join(", ")}</li>
                 </ul>
                 </div>
                 <img class="avatar" src="${astronaut.picture}">
                 </div>
                 
                 `;
                
             }
             
        });
});
});
