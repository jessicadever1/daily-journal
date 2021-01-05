/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const eventHub = document.querySelector(".journal")
let journal = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    console.log(journal)
    return journal.slice()
}

export const getEntries = () => {
    return fetch("http://localhost:8080/entries")
        .then(response => response.json())
        .then(entries => {
            journal = entries
        })
}

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const saveJournalEntry = (newjournalEntry) => {
    fetch("http://localhost:8080/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newjournalEntry)
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}

