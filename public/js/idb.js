// create variable for db connection
let db;

// establish connection to IndexedDB called 'budget-tracker' and set it to version 1
const request = indexedDB.open('budget_tracker', 1);
