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
    EntryListComponent()
})

let journalEntryCards = []

export const EntryListComponent = () => {
    eventHub.addEventListener("journalStateChanged", () => {
    // Use the journal entry data from the data provider component
        getEntries().then( () => {
            let entries = useJournalEntries()

            for (const entry of entries) {
                /*
                    Invoke the component that returns an
                    HTML representation of a single entry
                */
                journalEntryCards.push(JournalEntryComponent(entry))
            }
            entryLog.innerHTML += journalEntryCards.join("")
        }) 
    })
}
