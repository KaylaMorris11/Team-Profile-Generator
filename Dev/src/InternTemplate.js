function InternCard(intern) {
    return ` 
    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-header">
        ${intern.getName()}<br>
        <i class="fas fa-user-graduate"></i>${intern.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>
  `
};

module.exports = InternCard;