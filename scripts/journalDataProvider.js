/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "11/9/2020",
        concept: "Introductions & Orientation",
        entry: "John Wark did brief intro's of himself, instructors, and team at NSS. Then he did an orientation. After lunch Joe, Andy and Sarah did a deeper intro/orientation of slack, zoom, VS and the terminal.",
        mood: "Content"
    },

    {
        id: 2,
        date: "11/10/2020",
        concept: "Sit in on Demo Day",
        entry: "The first half of the day we sat in on cohort 43's demo day.",
        mood: "Content"
    },

    {
        id: 3,
        date: "11/11/2020",
        concept: "Terminal",
        entry: "Worked on commands and navigating terminal, then started on Martin's Aquarium.",
        mood: "Content"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}