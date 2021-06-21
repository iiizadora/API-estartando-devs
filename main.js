async function main(){  
  try{ 
    const responseAsync = await fetch("https://reqres.in/api/users?page=1");
    const response = await responseAsync.json();
    
    return registrationCreation(response);
  }catch(error) { 

    console.log("Algo está errado!!", error);
  }
}
main();


function createFullName(parentElement){

  const userFullName = document.createElement('p');
  userFullName.setAttribute('class', 'username');
  parentElement.appendChild(userFullName);

  return userFullName;
}

function createEmail(parentElement){
  const emailComplete = document.createElement('span');
  emailComplete.setAttribute('class','email-dev');
  parentElement.appendChild(emailComplete);

  return emailComplete;
}



function registrationCreation(user){
  
  const containerInformation = document.querySelector('#containerInformation');  

  for(const users of user.data){
   
    const userFullName = createFullName(containerInformation);
    userFullName.textContent = users.first_name + " " + users.last_name;

    const userEmail = createEmail(containerInformation);
    userEmail.textContent = users.email;


    const imgAvatar = document.createElement('img');
    imgAvatar.setAttribute('src', users.avatar);
    imgAvatar.setAttribute('class', 'avatar-dev');
        containerInformation.appendChild(imgAvatar);
  
}
  }
    


registrationCreation();
