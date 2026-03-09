let allIssues = [];
// modals    
const accessModal = document.getElementById("my_modal_5")
const modalTitle = document.getElementById("modal-title")   
const modalStatus = document.getElementById("modal-status")     
const modalOpenDate = document.getElementById("open-date")   
const modalLabelOne = document.getElementById("modal-label-one")   
const modalLabelTwo = document.getElementById("modal-label-two")   
const modalDescription = document.getElementById("modal-description")   
const modalAssine = document.getElementById("assine")   
const modalAuthor = document.getElementById("modal-author")   
const mPriorityStatus = document.getElementById("m-priority-status")  
// cardsContainer
const cardsContainer = document.getElementById("cards-container")

// loading spinner 
const loadingSpinner = document.getElementById("loading-spinner")
function showLoading(){
loadingSpinner.classList.remove("hidden")
}
showLoading()

function hideLoading(){
loadingSpinner.classList.add("hidden")
}

const loadAllIssues = async() =>{
    const fetchAllIssues = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues") 
   const data = await fetchAllIssues.json()
     allIssues = data.data;
     displayAllIssues(allIssues)
    hideLoading()
    cardsContainer.classList.remove("hidden")

    
}


const displayAllIssues = (allIssues) =>{
    // console.log(allIssues)
    // const cardsContainer = document.getElementById("cards-container")
    cardsContainer.innerHTML= "";
    allIssues.forEach(issue => {
    const borderColor = issue.status === "open" ? "border-green-700" : "border-purple-700"
// console.log(borderColor)
        const cardDiv = document.createElement("div")
        cardDiv.innerHTML = `
        <div onClick="loadSingleIssue(${issue.id})" class=" bg-base-100 p-4 space-y-3 rounded-md border-t-4 ${borderColor} shadow-sm">
                    <!-- status  -->
                    <div class="flex justify-between items-center">
                        <img  src="assets/Open-Status.png" alt="">
                        <p class="bg-red-100 rounded-full px-6 py-1 text-red-500 font-medium text-xs">${issue.priority}</p>
                    </div>
                    <!-- titles -->
                    <div class="space-y-3">
                        <h3 class="font-semibold text-[14px]">${issue.title}</h3>
                        <p class="text-xs">${issue.description}</p>
                        <!-- labels -->
                        <div class="flex justify-between items-center ">
                            <p class="bg-red-100 rounded-full px-4 py-1 text-red-500 font-medium border border-red-500 text-xs"><i class="fa-solid fa-bug "></i>${issue.labels[0]}</p>
                            <p class="bg-yellow-100 rounded-full px-4 py-1 text-yellow-600 font-medium border border-yellow-600 text-xs"><i class="fa-solid fa-life-ring"></i>${issue.labels[1]}</p>
                        </div>
                    </div>
                    <!-- end of card  -->
                    <span class="text-gray-300"><hr></span>
                    <div class="mt-1 space-y-1">
                        <p class="text-gray-400 text-xs">${issue.author}</p>
                        <p class="text-gray-400 text-xs">${issue.createdAt}</p>
                    </div>
                </div>`
        cardsContainer.appendChild(cardDiv)
    });

    

}

const toogleBtn=(clicked)=>{
    const allBtn = document.querySelectorAll(".status-btn")
    // console.log(allBtn)
    allBtn.forEach(btn =>{
        // console.log(btn)
        btn.classList.remove("bg-[#4A00FF]", "text-white")
        btn.classList.remove("bg-white", "text-gray-500") 
        
    })
    clicked.classList.add("bg-[#4A00FF]", "text-white")
    const tab = clicked.innerText
    const allIssueCount = document.getElementById("all-issue-count")


if(tab === "All"){
    loadAllIssues()
        allIssueCount.innerText= allIssues.length;
    }
else if(tab === "Open"){
       const openIssues = allIssues.filter(issue => issue.status === "open")
       displayAllIssues(openIssues)
       allIssueCount.innerText= openIssues.length;
    }
else if(tab === "Closed"){
       const closedIssues = allIssues.filter(issue => issue.status === "closed")
       //    console.log(closeCount)
       displayAllIssues(closedIssues)
       allIssueCount.innerText= closedIssues.length;
    }
}

const loadSingleIssue = async (id)=>{
    accessModal.showModal()
   const fetchSingleIssue = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
   const singleIssue = await fetchSingleIssue.json()
//    console.log(singleIssue.data)
modalTitle.textContent = `${singleIssue.data.title}`
modalStatus.textContent = `${singleIssue.data.status}`
modalOpenDate.textContent = `${singleIssue.data.updatedAt}`
modalLabelOne.textContent = `${singleIssue.data.labels[0]}`
modalLabelTwo.textContent = `${singleIssue.data.labels[1]}`
modalDescription.textContent = `${singleIssue.data.description}`
modalAssine.textContent = `${singleIssue.data.assignee}`
modalAuthor.textContent = `${singleIssue.data.author}`
mPriorityStatus.textContent = `${singleIssue.data.priority}`

}
loadAllIssues()
const searchBtn = document.getElementById("search-btn").addEventListener("click", function (){
    const searchInput = document.getElementById("search-input")
    searchValue = searchInput.value.trim().toLowerCase();
    const fetchSeach = fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
    .then(res => res.json())
    .then(searchedData =>{ 
        const filterdIssue = searchedData.data;
    document.getElementById("filterd-issue").innerText= `${filterdIssue.length} Issues Found`;
        displayAllIssues(searchedData.data)}) 
})

