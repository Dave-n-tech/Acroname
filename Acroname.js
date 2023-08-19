const button = document.getElementById("button")
const wrapper = document.querySelector("#wrapper")
const paragraph_holder = document.querySelector("#paragraph")
const meaning_holder = document.querySelector("#name_meaning")
const input = document.querySelector("#area")
const adjectives = [
  ["amazing","altruistic","aesthetic","authentic","articulate"],["beautiful","bold"],["champion","caring","charming","calm","cute"] ,["dauntless","dominant","daring","determined"],["ecstatic","energetic","easygoing","exemplary"],["funny","finesse","faithful","fabulous"],["great","glorious"],["hospitable","happy","headstrong"],["indomitable","iconic","introverted","intelligent"],["just","jovial","judicious","joyous"],["kingly","kind","keen","knowledgeable"],["loving","laudable","luxurious","loyal","lively"],["mature","merciful","mysterious","magical","moderate"],["noble","nurturing","nice"],["obedient","opportunistic","optimistic","opulent","observant"],["productive","positive","playful","poetic","peaceful","popular"],["quick-thinking","quiet","quirky"],["responsible","romantic","radiant","rich"],["strong","secure","superb","serious"],["truthful","trustworthy","tranquil","tactical"],["unyielding","unwavering"],["vibrant","virtuous","vast"],["wise"],["xenacious"],["youthful","young"],["zealous"]]
var count = 0
  // when the button is clicked
 button.onclick = (e) => {
    count++
     e.preventDefault()
     name = input.value.toLowerCase()
   let nameJson = JSON.stringify(name)
     localStorage.setItem("name",nameJson)
     console.log(localStorage)
     
     if(count>1){
     // document.location.reload()
      name = localStorage.getItem("name")
      name = name.slice(1,-1)
      wrapper.style.display = "none"
      let elements = document.querySelectorAll("p")
      let results = document.querySelectorAll(".meaning")
      for (unit of elements){
        unit.remove()
      }
      for(box of results){
        box.remove()
      }
     }
     
     let i = 0
  if(name.length > 0){
     wrapper.style.display = "block"
     if(name[name.length-1] === " "){
        name = name.slice(0, -1)
      }
      
    for(letter of name){
      // writing to the divs  
      
    adjectives.forEach((word) => {
      if (word.length >= 1){
        let the_word = word[Math.floor(Math.random() * word.length) ]
        
        if(the_word.startsWith(letter)){
        means = document.createTextNode(the_word)
       // console.log(word)
        }
      }
      
      
    })
       
  //creating the paragraph to hold the letters
     const element = document.createElement("p")
       text = document.createTextNode(letter)
       element.appendChild(text)
       paragraph_holder.appendChild(element)
  // creating the space for the meaning 
      const box = document.createElement("section")
       box.className = "meaning"
       box.appendChild(means)
       meaning_holder.appendChild(box)
        
       //console.log(letter)
    }
     
    input.value = ""
  }
     
    }
