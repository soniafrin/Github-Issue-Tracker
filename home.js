const loadAllIssues = () =>{
    const allIssues = "https://phi-lab-server.vercel.app/api/v1/lab/issues" 
    fetch(allIssues)
    .then(res => res.json())
    .then(issues => displayAllIssues(issues.data))

}
// loadAllIssues()

const displayAllIssues = (allIssues) =>{
    const cardsContainer = document.getElementById("cards-container")
    cardsContainer.innerHTML= "";
    allIssues.forEach(issue => {
        const cardDiv = document.createElement("div")
        cardDiv.innerHTML = `
        <p> issue 1</p>
        `
        cardsContainer.appendChild(cardDiv)
    });

}