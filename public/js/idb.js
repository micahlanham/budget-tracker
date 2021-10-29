// create variable for db connection
let db;

// establish connection to IndexedDB called 'budget-tracker' and set it to version 1
const request = indexedDB.open('budget_tracker', 1);

// this event will emit if the database version changes
request.onupgradeneed = function(event) {

    // save a reference to db
    const db = event.target.result;

    // create an object store called 'new_transaction' and set it for auto incrementing primary key
    db.createObjectStore('new_transaction', { autoIncrement: true});
};