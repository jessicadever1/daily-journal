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
    }, 

    {
        id: 9,
        date: "11/19/2020",
        concept: "Automating Objects",
        entry: "3 qualificiations of a function: 1. Does it work? 2. Is it readable? 3. Is this a good way to solve the problem?; went over the remainder operator (%) (which divides the number and then returns the value that is left over after beign divided; added three more fish, and then listed them in the order of Martin's preference.",
        mood: "Content"
    },

    {
        id: 10,
        date: "11/20/2020",
        concept: "Lab Day - Start Modern Farm",
        entry: "Lab Day. Worked on Modern Farm, and was able to get through the first two parts pretty easily. Things got hard once I started working in the field.js and tractor.js. Left off there.",
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