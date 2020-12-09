/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./journalDataProvider.js"
import { JournalEntryComponent } from "./journalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")
const eventHub = document.querySelector(".journal")

eventHub.addEventListener("click", () => {
    EntryList()
})

export const EntryListComponent = () => {
    eventHub.addEventListener("journalStateChanged", () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        const entryHTML = JournalEntryComponent(entry)
        entryLog.innerHTML += entryHTML
    }
    })
}
const theEntries =  EntryListComponent()
// eventHub.addEventListener("click", (clickEvent) => {
//     if (clickEvent.target.id === "recordJournalEntry") {
    export const EntryList = () => {
        getEntries()
        .then(() => {
            const allJournalEntries = useJournalEntries()
            EntryListComponent(allJournalEntries)
    })
}
            
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "journalEntryRecordBtn") {
        return theEntries
    }
})