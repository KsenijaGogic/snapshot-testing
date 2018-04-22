// We'll need to import React, as we're generating components

// We'll need to import a named helper called mount from 'enzyme'

// And we'll need to import a default helper called toJson from 'enzyme-to-json'

// We'll import our component here

// And we'll define our test here, using the global "it" helper
// The first argument is a string that will help us _describe_ our test
// The second argument is a function that the test will run

// Within our test block, what we want to test are the following cases:
// 1. Does the component properly generate given our fully passed props? (ideal state)
// 2. Does the component have safe-guards in place to render defaults in case we miss props?
// 3. BONUS: What happens to our component if we pass the wrong kind of information to it?
