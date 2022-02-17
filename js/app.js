console.log('ciao');

// Array Team member

const team = [
    {
      name:'Wayne Barnett',
      role: 'Founder & CE',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


  console.log(team)

  let nomeMembro;
  let role;
  let image;
  const teamContainer = document.querySelector('.team-container')
 

  for (let key in team ){
      const teamMember = team[key];
        nomeMembro = teamMember.name;
        role= teamMember.role;
        image = teamMember.image;
        console.log(image)
  
  
  
        
        teamContainer.innerHTML += `<div class="team-card">
                            <div class="card-image">
                             <img
                                 src="img/${image}"
                                 alt="${nomeMembro}"
                             />
                             </div>
                            <div class="card-text">
                              <h3>${nomeMembro}</h3>
                             <p>${role}</p>
                            </div>
                         </div>`;
        
  }


//   console.log(nomeMembro)