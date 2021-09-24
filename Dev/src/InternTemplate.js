function InternCard(intern){
    return ` 
    <div class="team-card-container">
        <div class="team-container">
           <div class="team-card">
             <h3 class="">${intern.getName()}</h3>
             <p>${intern.getId()}</p>
             <p>${intern.getEmail()}</p>
             <p>${intern.getOfficeNumber()}</p>
           </div>
         </div>
       </div>`
};

module.exports = InternCard;