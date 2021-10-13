function ManagerCard(manager){
    return ` 
    <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-header">
                ${manager.getName()}<br>
                <i class="fas fa-mug-hot"></i>${manager.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">OfficeNumber: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>`
};

module.exports = ManagerCard;