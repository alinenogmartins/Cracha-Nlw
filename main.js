/*criação objeto com os dados que substituiirão os links anteriores*/

const LinksSocialMedia = {
  github: 'alinenogmartins',
  youtube: 'rocketseat',
  instagram: 'rocketseat_oficial',
  facebook: 'rocketseat',
  twitter: 'rocketseat'
}
/*Criando a função*/
function chageSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

/*Chamando a função*/
chageSocialMediaLinks()

/*Trocando os links via API */
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  /*Vai até a Url pega a informação e traz de volta*/
  fetch(url)
    /*PROMESSA é a resposta quando da certo o retorno */
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
