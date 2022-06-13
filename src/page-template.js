function generateTeam(teamArr){

    return `
      ${teamArr
        .filter(({ name, id, role, email, officeNumber }) => {
          return `
          <div class="col-sm-6 col-lg-4 mb-4">
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${name} ${role}</h5>
              Id number:
              ${id}
            </h5>
            <li class="list-group-item">Office number: ${officeNumber}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
          </div>
        `;
        })
        } `;
}


module.exports = teamArr => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <!-- bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./src/style.css">
    </head>
    <body>
        <header>
            <h1 class="text-center">My Team</h1>
        </header>
        <main class="container">
            <div class="row">
                ${generateTeam(teamArr)}
            </div>
        </main>
    </body>
    </html>`
}
