function InternCard(intern) {
    return ` 
    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-header">
        ${intern.getName()}<br>
        <i class="fas fa-mug-hot"></i>${intern.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: ${intern.getEmail()}</li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>
  `
};

module.exports = InternCard;