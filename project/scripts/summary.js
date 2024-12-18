const memberFile = "./data/members.json";
const roster = document.querySelector("#singlepage");

currentMemberID = "0007";

getMemberData();

async function getMemberData() {
  try {
    const response = await fetch(memberFile);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    data.members.forEach(member => {
        if (member.id == currentMemberID) {
            getMemberSummary(member)
        }
    });
  }

  catch (error) {
    console.error(error.message);
  }
}

function getMemberSummary(currentMember){
    let missingInfo = 0;
    Object.keys(currentMember).forEach(key => {
        console.log(key, currentMember[key]);
        if (currentMember[key] == "") {
            missingInfo++;
        }
    });

    console.log(`missing info: ${missingInfo}`);
    
    const welcomeMessage = document.createElement("h3");
    if (missingInfo = 0){
        welcomeMessage.textContent = `Hi ${currentMember.fname}. Welcome to your interface.`;
    }
    else if (missingInfo < 2){
        welcomeMessage.textContent = `Hi ${currentMember.fname}. Looks like we're missing some information. Maybe you could take some time to update your info.`;
    }
    else {
        welcomeMessage.textContent = `Hi ${currentMember.fname}. We're missing just a few pieces of info for you. If you have time today, let's get that updated.`;
    }
    welcomeMessage.setAttribute("class", ".welcomeMessage");

    const personalInfo = document.createElement("div");
    personalInfo.innerHTML = `
        <div id="personalInfo">
        <p>ID: <span>${currentMember.id}</span></p>
        <p>First Name: <span>${currentMember.fname}</span></p>
        <p>Last Name: <span>${currentMember.lname}</span></p>
        <p>Address: <span>${currentMember.address}</span></p>
        <p>Phone Number: <span>${currentMember.phone}</span></p>
        <p>Email: <span>${currentMember.email}</span></p>
        <p>Date of Birth: <span>${currentMember.DOB}</span></p>
        <p>Status: <span>${currentMember.status} team member</span></p>
        </div>
    `;

    roster.appendChild(personalInfo);

    let profilePic = document.createElement("img");
    profilePic.setAttribute('class', 'profilePic');
    if (currentMember.photo == "") {
        profilePic.setAttribute('src', "./images/blankProfile.webp");
    }
    else {
        profilePic.setAttribute('src', currentMember.photo);
    }
    profilePic.setAttribute('alt', `${currentMember.fname} ${currentMember.lname}'s Profile Picture`);
    profilePic.setAttribute('loading', 'lazy');
    profilePic.setAttribute('width', '200');
    profilePic.setAttribute('height', '200');
    roster.appendChild(profilePic);

    roster.appendChild(welcomeMessage);

}

