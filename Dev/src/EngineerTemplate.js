function EngineerCard(engineer){
    return ` 
    <div class="team-card-container">
        <div class="team-container">
           <div class="team-card">
             <h3 class="">${engineer.getName()}</h3>
             <p>${engineer.getId()}</p>
             <p>${engineer.getEmail()}</p>
             <p>${engineer.getOfficeNumber()}</p>
           </div>
         </div>
       </div>`
};

module.exports = EngineerCard;