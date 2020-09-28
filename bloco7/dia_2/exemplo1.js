const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkillsk = Object.keys(student);
    const arrayOfSkillsv =  Object.values(student)
    console.log(arrayOfSkillsk, arrayOfSkillsv)
    for(let i = 0 ; i <= arrayOfSkillsv.length ; i+= 1){
        console.log(`${arrayOfSkillsk[i]} é ${arrayOfSkillsv[i]}`)
    }
  }


  
  console.log('Estudante 1');
  listSkills(student1);
  
  //console.log('Estudante 2');
  //listSkills(student2);