# grio-counter

### Take-home assignment
1. Choose a frontend framework.
2. Choose a backend technology.
3. Build the following feature using the provided stories.
4. Push it up to github and let us know when it’s ready and where to find it!

### Notes
- the formula should be implemented on the server.
- Api calls must be authenticated, using token­based authentication.
- Stub-out a dummy user; there’s no need for a database layer.
- Reach out if you have questions!

### Feature: Increment counter

**`Scenario:`**`User can login`\
**` ` ` ` ` ` `Given`**`the User is not logged in`\
**` ` ` ` ` ` ` ` ` ` `And`**`the User enters username and password`\
**` ` ` ` ` ` ` ` `Then`**`the User is logged in`\
**` ` ` ` ` ` ` ` ` ` `And`**`the User sees the home page`\
**` ` ` ` ` ` ` ` ` ` `And`**`credentials are available for subsequent api calls`

**`Scenario:`**`Counter is zero on start`\
**` ` ` ` ` ` `Given`**`the User is looking at the home page`\
**` ` ` ` ` ` ` ` `Then`**`the User sees “Count: 0” label centered vertically and horizontally on the page`\
**` ` ` ` ` ` ` ` ` ` `And`**`there is a button labelled “Increment” immediately to the right of the label`

**`Scenario:`**`Next counts are determined by formula`\
**` ` ` ` ` ` `Given`**`the current count`\
**` ` ` ` ` ` ` ` `When`**`the view needs the next count`\
**` ` ` ` ` ` ` ` `Then`**`the next count is the greater of 1 and current count * 2`

**`Scenario:`**`Increment button`\
**` ` ` ` ` ` `Given`**`the User views the page`\
**` ` ` ` ` ` ` ` ` ` `And`**`the Count is 0`\
**` ` ` ` ` ` ` ` `When`**`the User clicks on the increment button`\
**` ` ` ` ` ` ` ` `Then`**`a popup is displayed`\
**` ` ` ` ` ` ` ` ` ` `And`**`the popup displays the current count of 0`\
**` ` ` ` ` ` ` ` ` ` `And`**`the popup displays the next count 1`\
**` ` ` ` ` ` ` ` ` ` `And`**`there is a Cancel button`\
**` ` ` ` ` ` ` ` ` ` `And`**`there is a Confirm button`
  
**`Scenario:`**`Increment count popup Cancel button`\
**` ` ` ` ` ` `Given`**`the increment count popup is open`\
**` ` ` ` ` ` ` ` ` ` `And`**`the current count is 1`\
**` ` ` ` ` ` ` ` ` ` `And`**`the next count is 2`\
**` ` ` ` ` ` ` ` `When`**`the User clicks on the Cancel button`\
**` ` ` ` ` ` ` ` `Then`**`the popup is closed`\
**` ` ` ` ` ` ` ` ` ` `And`**`the User sees a “Count: 1” label`
  
**`Scenario:`**`Increment count popup Confirm button`\
**` ` ` ` ` ` `Given`**`the increment count popup is open`\
**` ` ` ` ` ` ` ` ` ` `And`**`the current count is 2`\
**` ` ` ` ` ` ` ` ` ` `And`**`the next count is 4`\
**` ` ` ` ` ` ` ` `When`**`the User clicks on the Confirm button`\
**` ` ` ` ` ` ` ` `Then`**`the popup is closed`\
**` ` ` ` ` ` ` ` ` ` `And`**`the User sees a “Count: 4” label`\
