/*
On this page, I am getting switching (my beautiful)
HTML, so that it is no longer hard coded in 
index.html. Rather, it will now be rendered in 
JavaScript in this file. So. I know how I want it
to look. I'm going to copy/paste the return from
the index.html. Momentarily, I'm leaving it in 
index.html also, just so it looks exactly how I
want it to look. But now I'm going to tell it 
where I want it to render said HTML on the doc.
*/
import { saveJournalEntry } from '../journalDataProvider.js'

const contentTarget = document.querySelector(".form")
const eventHub = document.querySelector(".journal")

const render = () => {
    contentTarget.innerHTML = `
            <fieldset>
                    <label for="journalDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
                <fieldset>
                    <label for="conceptsCovered">Concepts Covered</label>
                    <input type="text" name="conceptsCovered" id="conceptsCovered">
                </fieldset>
                <fieldset>
                    <label for="journalEntry">Journal Entry</label>
                    <textarea name="journalEntry" id="journalEntry" cols="40" rows="5"></textarea>
                </fieldset>
                <fieldset>
                    <label for="mood">Mood</label>
                    <select name="mood" id="mood">
                            <option value="😆">Elated</option>
                            <option value="😄">Happy</option>
                            <option value="😊">Content</option>
                            <option value="🙂">Peaceful</option>
                            <option value="😌">Calm</option>
                            <option value="neutral">Neutral</option>
                            <option value="🤔">Perplexed</option>
                            <option value="🧐">Confused</option>
                            <option value="😠">Frustrated</option>
                            <option value="😡">Angry</option>
                            <option value="🤬">Valley of Dispair</option>
                    </select>
                </fieldset>
                <fieldset>
                    <button id="journalEntryRecordBtn">Record Journal Entry</button>
            </fieldset>
    `
}

export const JournalFormComponent = () => {
    render()
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "journalEntryRecordBtn") {
        const date = document.querySelector("#journalDate").value
        const concept = document.querySelector("#conceptsCovered").value
        const entry = document.querySelector("#journalEntry").value
        const mood = document.querySelector("#mood").value    
    
        const newJournalEntry = {
            date: date,
            concept: concept,
            entry: entry,
            mood: mood
        }
        saveJournalEntry(newJournalEntry)    
    }

})

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "journalEntryRecordBtn") {
        const customEvent = new CustomEvent("journalEntryRecorded")
        eventHub.dispatchEvent(customEvent)
    }
})