let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  
info["recorrente"] = "sim"
info["personagem"] += " e Tio Patinhas "
info["origem"] += " e Christmas on Bear Mountain, Dell's Four Color Comics #178 "
info["nota"] += "Namorada do personagem principal nos quadrinhos do Pato Donald e o último MacPatinhas "



for(let valor in info){
    if(info[valor] === "sim"){
        return false
    }
    else
        console.log(info[valor])
    }




  
  
  