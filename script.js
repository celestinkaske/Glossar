const terms = [
    { term: "API" },
    { term: "API1" },
    { term: "API2" },
    { term: "API3" },
    { term: "Backend" },
    { term: "Cross-Docking" },
    { term: "Data-Driven-Marketing" },
    { term: "Data-Warehouse" },
    { term: "HTTPS" },
]

const alphabet = ['A', 'B', 'C', 'D', 'H']



const input = document.getElementById('search')
input.addEventListener('input', function (event) {
    const currentValue = event.target.value;
    const firstCharacter = currentValue.charAt(0).toUpperCase()
    const isEmpty = currentValue === ""
    console.log(currentValue)


    console.log(firstCharacter)

    // hide letter sections
    alphabet.forEach((letter) => {
        const sectionElement = document.getElementById(letter)
        if (letter === firstCharacter || isEmpty) {
            sectionElement.classList.remove('hidden')
        } else {
            sectionElement.classList.add('hidden')
        }
    })

    // hide terms in sections
    terms.forEach((item) => {
        const itemExists = item.term.toLowerCase().startsWith(currentValue.toLowerCase())
        const element = document.getElementById(item.term)
        console.log(itemExists, element, isEmpty)
        if (itemExists || isEmpty) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    })

})

// place formatted last modified date
const date = new Date(document.lastModified);
const formattedDate = new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
}).format(date)

document.getElementById("last-modified-date").innerHTML = "Letzte Speicherung : " + formattedDate;