let user = prompt("Please enter any of S, W, G")
let num = Math.floor(Math.random() * 3)
let cpu = ["S", "W", "G"][num]
// console.log(cpu)
const match = (cpu, user)=>{
if (user === cpu){
    return "Nobody"
}   else if(cpu === "S" && user==="W"){
    return "cpu"
  }
  else if(cpu === "S" && user==="G"){
    return "user"
  }
  else if(cpu === "G" && user==="W"){
    return "user"
  }
  else if(cpu === "G" && user==="S"){
    return "cpu"
  }
  else if(cpu === "W" && user==="S"){
    return "user"
  }
  else if(cpu === "W" && user==="G"){
    return "cpu"
  }
}
let result = match(cpu, user)
document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )
