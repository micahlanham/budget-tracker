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

// when successful
request.onsuccess = function(event) {

    // when db is created succesfully with its object store
    db = event.target.result;

    // check if app is online
    if (navigator.online) {

    }
};

request.onerror = function(event) {
    // log error
    console.log(event.target.errorCode);
};

// Function will be executed if we try to submit a new transaction and there is no internet
function saveRecord(record) {

    // open new transaction with read and write permissions
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    // access the object store for 'new_transaction'
    const budgetObjectStore = transaction.objectStore('new_transaction');

    // add record to your store
    budgetObjectStore.add(record);
}