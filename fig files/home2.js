let apiData = [];
// const loadingSpinner = document.getElementById("loading-spinner")
// console.log(loadingSpinner)
const loadAllIssues = async() =>{
    // loadingSpinner.classList.remove("hidden")
    // loadingSpinner.classList.add("flex")
    const fetchAllIssues = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues") 
   const data = await fetchAllIssues.json()
    apiData = data.data;
//    console.log(apiData)
//    const data = await issues.data
    // .then(res => res.json())
    // .then(issues => displayStatusOnBtn(issues.data))
    // console.log(data)
    //  displayStatusBtn(data.data)
    //  displayAllIssues(data.data)
    // return allData
 displayStatusBtn(apiData)
 displayAllIssues(apiData)
}

const  displayStatusBtn = (apiData) =>{
    console.log(apiData)
const btnContainer = document.getElementById("btn-container")
btnContainer.innerHTML = "";
const btnArray = apiData.map(btn => btn.status)
// console.log(btnArray)
const newBtnArray = [...new Set(btnArray)]
// console.log(newBtnArray)

 newBtnArray.forEach(btn =>{
     const newBtn = document.createElement("button")
     newBtn.classList.add("btn",  "bg-white", "text-gray-500", "px-9")
     newBtn.innerText = btn;
    //  newBtn.onclick = () => selectStatus(btn.id)
     btnContainer.appendChild(newBtn)
 })
// loadAllIssues(apiData);
}
// function selectStatus(statusId){
//  console.log(statusId)
// }
// displayStatusBtn()

const displayAllIssues = (apiDatas) =>{
    console.log(apiDatas)
    const cardsContainer = document.getElementById("cards-container")
    cardsContainer.innerHTML= "";
    apiDatas.forEach(issue => {
        const cardDiv = document.createElement("div")
        cardDiv.innerHTML = `
        <div class="hidden bg-base-100 p-4 space-y-3 rounded-md border-t-4 border-green-700 shadow-sm">
                    <!-- status  -->
                    <div class="flex justify-between items-center">
                        <img  src="assets/Open-Status.png" alt="">
                        <p class="bg-red-100 rounded-full px-6 py-1 text-red-500 font-medium text-xs">${issue.priority}</p>
                    </div>
                    <!-- titles -->
                    <div class="space-y-3">
                        <h3 class="font-semibold text-[14px]">${issue.title}</h3>
                        <p class="text-xs">${issue.priority}</p>
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
loadAllIssues()



// const filterStatus = async() =>{
//     const fetchAllIssues = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues") 
//    const data = await fetchAllIssues.json()
//     const apiData = data.data;

//     apiData.map(e =>{
//         console.log
//     })
// //     console.log(apiData[0].status)
// //     if(apiData[0].status === "Open"){
// //         console.log("hey")

// //     showFilterStatus(apiData)
// // }
// }
// filterStatus()

// // const showFilterStatus = (apiData) =>{
// //     console.log("apiData")
// // }
// // showFilterStatus()


// const loadSingleIssue = async ()=>{
//     const fetchSingleIssue = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/33`)
//     const singleIssue = await fetchSingleIssue.json()
    
//     console.log(singleIssue.data)
// }
// loadSingleIssue()
