/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const eventHub = document.querySelector(".journal")
const journal = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    ).slice()
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        .then(entries => {
            entries = journal
        })
}

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const saveJournalEntry = (entryObj) => {
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newjournalEntry)
    })
        .then(getEntries())
        .then(dispatchStateChangeEvent())
}