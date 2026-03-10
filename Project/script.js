// Mock database of existing usernames
const users = [
"admin",
"john123",
"prasad",
"alex",
"emma",
"david",
"mike",
"rohan",
"akash",
"raj"
]

// DOM elements
const input = document.getElementById("username")
const message = document.getElementById("message")
const button = document.getElementById("checkBtn")

// Async function to check username availability
function checkUsernameAvailability(username){

return new Promise((resolve,reject)=>{

// simulate network delay
setTimeout(()=>{

if(users.includes(username.toLowerCase())){
reject("❌ Username is already taken")
}
else{
resolve("✅ Username is available")
}

},1500)

})

}

// validation function
async function validateUsername(){

const username = input.value.trim()

// prevent empty validation
if(username === ""){
message.textContent="Please enter a username"
message.style.color="orange"
return
}

// minimum length validation
if(username.length < 3){
message.textContent="Username must be at least 3 characters"
message.style.color="orange"
return
}

// loading state
message.textContent="Checking availability..."
message.style.color="blue"

try{

// await promise result
const result = await checkUsernameAvailability(username)

message.textContent=result
message.style.color="green"

}

catch(error){

message.textContent=error
message.style.color="red"

}

}

// trigger validation on button click
button.addEventListener("click",validateUsername)
