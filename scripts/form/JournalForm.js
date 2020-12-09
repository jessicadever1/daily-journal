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
const contentTarget = document.querySelector(".form")

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
                            <option value="elated">Elated</option>
                            <option value="happy">Happy</option>
                            <option value="content">Content</option>
                            <option value="peaceful">Peaceful</option>
                            <option value="calm">Calm</option>
                            <option value="neutral">Neutral</option>
                            <option value="perplexed">Perplexed</option>
                            <option value="confused">Confused</option>
                            <option value="frustrated">Frustrated</option>
                            <option value="angry">Angry</option>
                            <option value="valleyOfDispair">Valley of Dispair</option>
                    </select>
                </fieldset>
                <fieldset>
                    <button>Record Journal Entry</button>
            </fieldset>
    `
}

export const JournalFormComponent = () => {
    render()
}