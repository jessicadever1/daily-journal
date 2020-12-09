/*Note: I'm using localhost8088 to serve json */

import { EntryListComponent } from './journalEntryList.js'
EntryListComponent()

import { getEntries } from './journalDataProvider.js'
getEntries()

import { JournalFormComponent } from './form/JournalForm.js'
JournalFormComponent()