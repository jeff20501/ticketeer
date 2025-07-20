const inputName = document.querySelector(".input-name")
const inputEmail = document.querySelector(".input-email")
const gitUsername = document.querySelector(".git-username")
const errorMsg = document.querySelectorAll(".error-msg")
const info = document.querySelector(".info")
const button = document.querySelector(".button")
const dropArea = document.querySelector(".droparea")
const inputFile = document.querySelector(".input-file")
const imageView = document.querySelector(".image-view")
const userName = document.querySelector(".user-name")
const userEmail = document.querySelector(".user-email")
const avatarDetails = document.querySelector(".avatar-details")
const ticketNumber = document.querySelector("ticket-number")

function validateSize(file){
    const maxSize = 500 * 1024 // 500kb 1kb=1024bytes
    
    if(file.size>maxSize){
        info.innerHTML=
        `
            <div class=error>
                <img src="./assets/images/info-svgrepo-com.svg">
                <span>File too large. Please upload a photo under 500KB</span>
            </div>
        `
        file.value=""
        return false
    }
    return true
    }

if(inputFile&&button){
    inputFile.addEventListener("change", ()=>{
    const file = inputFile.files[0] //File object
    if (!validateSize(file)){
        inputFile.value="" // clear the file input.
        imageView.innerHTML="" // Clear the preview
        return  //  stop executing the rest of the code in that function (inputFile.addEventListener("change", ()...)
    }

    let imglink = URL.createObjectURL(file) // to show image on the page where the generating the ticket
    const reader = new FileReader()
    reader.addEventListener('load', ()=>{
        base64image = reader.result // to make a usable link that can be reached through a useful url
        imageView.innerHTML=
        `
            <div class="avatar-preview">
                <img src=${imglink}>
                <button class="remove-image">
                    Remove image
                </button>

                <button class="change-image">
                    Change image
                </button>
            </div>
            
        `
        localStorage.setItem("avatar", base64image)
        const avatarPreview = document.querySelector(".avatar-preview")
        const removeImage = document.querySelector(".remove-image")
        const changeImage = document.querySelector(".change-image")

        removeImage.addEventListener("click", (e)=>{
            e.preventDefault()//prevents any default action
            e.stopPropagation() //prevents the event from bubbling up like change image event being triggered
            avatarPreview .innerHTML = ""
            inputFile.value=""
        })

        changeImage.addEventListener("click", ()=>{
            inputFile.click()
        })

    }) 
    reader.readAsDataURL(file); // Converts to base64!

    button.addEventListener("click", ()=>{
        let hasError = false // here we do not have any error as we evaluate we turn it to true
        errorMsg.forEach(el=>el.innerHTML="") //to clear previous error message

        if (inputEmail.value.trim()===""){
        inputEmail.nextElementSibling.innerHTML+=`<p class="error">You have entered an invalid email address!<p>`
        //nextElementSibling returns the element immediately following the specified one in its parent's children
        hasError = true // Error found, set the flag
        }

        if (inputName.value.trim()===""){
            inputName.nextElementSibling.innerHTML+=`<p class="error">Enter you name</p>`
            // nextElementSibling returns the element immediately following the specified one in its parent's children
            hasError = true // Error found, set the flag
        }

        if (gitUsername.value.trim()===""){ //trim() removes whitespace
            gitUsername.nextElementSibling.innerHTML+=`<p class="error">Enter you Github username</p>`
            //nextElementSibling returns the element immediately following the specified one in its parent's children
            hasError = true // Error found, set the flag

        }

    if(!hasError){
        localStorage.setItem("name", inputName.value)
        localStorage.setItem("email", inputEmail.value)
        localStorage.setItem("github-username", gitUsername.value)
        window.location.href="ticket.html"
    }
    
})
})

}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return true
  }
    return false
}


if(userName && userEmail && avatarDetails){
    const avatar=localStorage.getItem("avatar")
    const name=localStorage.getItem("name")
    const email=localStorage.getItem("email")
    const github=localStorage.getItem("github-username")
    if(name){
        userName.textContent=` ${name} `
    }

    if(email){
        userEmail.textContent=` ${email} ` 
    }

    if(avatar&&name&&github){
        avatarDetails.innerHTML=
        `
            <div class="avatar-img">
                <img src=${avatar}>
            </div>
            <div class="user-ticket-details">
                <h3>${name}</h3>
                <div class="github-details">
                    <img src="./assets/images/icon-github.svg">
                    <p>${github}</p>
                </div>
            </div>
        `
        let number = Math.floor(Math.random()*10000+1)

        ticketNumber.innerHTML=`<p># ${number} `
    }
}



