/*Note: I'm using localhost8088 to serve json */

import { EntryListComponent } from './journalEntryList.js'
EntryListComponent()

import { getEntries, useJournalEntries, saveJournalEntry } from './journalDataProvider.js'
getEntries()
useJournalEntries()
const test = saveJournalEntry()
console.log(test)

import { JournalFormComponent } from './form/JournalForm.js'
JournalFormComponent()

import "./journalEntryList.js"