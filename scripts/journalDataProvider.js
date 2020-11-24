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
        id: 4,
        date: "11/12/2020",
        concept: "GitHub & Git",
        entry: "Went over how GitHub is a mind-boggling huge place for things to be stored/ shared on the Internet. How Git lives in the computer. And the ways that you save locally, push to GitHub, do PR's, merge, then Pull from GitHub and merge your local main.",
        mood: "Neutral"
    }, 
    {
        id: 5,
        date: "11/13/2020",
        concept: "Terminal & Lab Day",
        entry: "Worked on commands and navigating terminal, then started on first group project <strong>Hello World</strong>.",
        mood: "Content"
    }, 

    {
        id: 6,
        date: "11/16/2020",
        concept: "Lab Day - Hello World, Animation Durations",
        entry: "Worked together to finish project. Got all of our pages to look professional, similar and navigate from one to the other. Images take up all the same amt of space.",
        mood: "Content"
    }, 

    {
        id: 7,
        date: "11/17/2020",
        concept: "Review & starting into Javascript",
        entry: "Started out with presentation. Greg did a great job on ours! Reviewed Const vs Let vs Var. DRY - Don't Repeat Yourself. undefined is a datatype. script tags are usually at the bottom, incase they need to reference something in the body. .slice() allows you to take some portion of an array and add it to a new array; if left empty it will return all.",
        mood: "Content"
    }, 

    {
        id: 8,
        date: "11/18/2020",
        concept: "Lab Day & The introduction of Lightning Exercises",
        entry: "worked on finsihing journal, and starting modern farm. Lab Day.",
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
    },

    {
        id: 11,
        date: "11/23/2020",
        concept: "Lab Day - Hello World Group Project",
        entry: "Started with the lightning exercise about the Painter. Lab Day. The Animation Durations worked on automating all of their cities, landmarks and citizens. Almost got all things pushed and merged.",
        mood: "Content"

    },

    {
        id: 12,
        date: "11/24/2020",
        concept: "Lab Day - Finish Hello World",
        entry: "Lab Day. Got everyone's edits pushed/ merged. Couldn't get hover to work in my England section, so updated journal instead.",
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