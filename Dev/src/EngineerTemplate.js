function EngineerCard(engineer) {
    return ` 
    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-header">
        ${engineer.getName()}<br>
        <i class="fas fa-glasses"></i>${engineer.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: ${engineer.getEmail()}</li>
      <li class="list-group-item">GitHub: ${engineer.getGithubId()}</li>
    </ul>
  </div>
`
};

module.exports = EngineerCard;