/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="entry__concept"><h2>${entry.concept}</h2></div>
            <div class="entry__date"><h3>${entry.date}</h3></div>
            <div class="entry__entry">${entry.entry}</div>
        </section>
    `
}