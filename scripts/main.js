/*Note: I'm using localhost8080 to serve json */

import { EntryListComponent } from './journalEntryList.js'
EntryListComponent()

import { getEntries, useJournalEntries, saveJournalEntry } from './journalDataProvider.js'
getEntries()

import { JournalFormComponent } from './form/JournalForm.js'
JournalFormComponent()

import "./journalEntryList.js"