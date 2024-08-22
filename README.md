# React + Vite

Steps for configuring MSW

- install MSW
- Make Mock Service Folder
- Make Server file
- Make Server handler file
- Write code for API testing
- Call server in test  setup file


helpful links:

https://testing-library.com/docs/queries/about/

https://mswjs.io/docs/concepts/response-resolver


https://docs.google.com/document/d/1usllNjVfdfBbEu511eo9fDPBYsLI3AkiCvwcAdy_QXg/edit?usp=sharing

---------------------------------------------------------------------------------------------

Table of Content	

React Testing
What is Testing
Types of Tesing
Snapshot testing
Naming Convention
Setup
Vite or Jest setup
MSW Setup
Sample Test Case Example
Describe
Definition
Skip
only
Nested Describe
Class Component Testing
Prerequisites
Example
Functional Component Testing
RTL Query
Act function
Debugging


































React Testing
What is Testing

Software testing is the process of finding errors in a software product before it is launched.
We validate functioning and features of software.
Types of Tesing

For Tester
Manual testing
Automation Testing

For Developer
Unit testing: testing individual component or unit.
Integrated Testing: Testing between two units or component
E-2-E Testing: Test start to end complete project

React Testing Tools
Jest Framework
React Testing Library

Creating a test with Javascript
 
Sum.js



What to test in Unit testing for React App.
									
Component rendering: Ensure that the component renders correctly under different conditions.
States and props: Tets the states change and the props being received
Event handling: check if the event (eg: click, input change, select) and handled correctly.
Lifecycle method: validate the lifecycle method are working as expected.


Avoid testing for
External UI library code (Material UI, bootstrap)
No need to test default function of JS and React.
Sometimes we should do mock function rather than testing it in details.


Snapshot testing
In Snapshot testing we create a copy of file/Component into another file.(may not be readable by us).

It is used when your code development is done and you are ready to deployment. Now you will need some minor changes to do only.

It helps when you are deploying, it will tell the changes that you have made. Check if anything is wrong and if not update the snapshot and continue.

Note: Do not write Snapshots at the start of the project.

Naming Convention
We can name the test files as filename.test.js filename.spec.js filename.spec.jsx

You can create a folder with name __test__
Now you can have multiple test files in this without keeping any extension. All files under this extension will be treated as test files.


Setup
	Vite or Jest setup

Install vitest
npm install -D vitest

Add to package.json in script section
“test” : “vitest” 
“Test coverage”: “vitest --coverage”

Install required libraries

npm install -D @testing-library/jest-dom @testing-library/react @testing-library/user-event @jsdom 

Modify vite.config.js



Create a folder in root director not under src
/test/setup.js


MSW Setup
Note: Msw 2 or higher require node 18 or higher.
Install msw
	npm install -D msw
	
Make mock service folder
 -  make server file
 -  make server handler file











Call server in test setup file


Note: You can create a handler, server into test files itself and even call the server there 
only.
 	



Sample Test Case Example



Describe
Definition
Describe is used to handle larger components with multiple UI components, functions, and api call. We can separate them into multiple groups test cases. So that if you want to run a specific test(Eg. Ui test cases) you can do it.
Skip
It is used to skip a particular test.
Syntax.
describe.skip()
only
It is used to run a particular test.
Syntax.
describe.only()
Nested Describe
We can even have a nested describe at multi-level. This is used to create a particular subgroup test.


Class Component Testing
For Class component testing we need react-test-renderer.

Prerequisites 

Npm install react-test-renderer

Example






Functional Component Testing
In functional components most of the functions are tested by the attached event with any of the elements.
Example: <button onclick={handleUpdate}>Update</button>

So here handleUpdate will get tested along with this button testing.

But if we have any function that is not attached with any event of any element, we can take out the function to another file and test it from there. 

RTL Query
It is used to find the UI element. Eg Text, button, input box, etc.

GetBy - to get the element visible in the UI.
QueryBy- to find the element which are hidden in UI because of any state  condition or display property is hidden. It looks into the code.
findBy - when loading page or performing any action (eg: api call), sometimes it takes time to load the element. So here we can use findBy.

Link: https://testing-library.com/docs/queries/byrole

Act function

When you are making an update to state using user event, you need to wrap the action into act().
Debugging
Automatic Debugging: when your test case got failed, so by default we get the errors and some reason behind it. That is knows as AUtomatic debugging.
Pretty Dom: It is used to get the container data(DOM) into html/dom view.
Example: 
	Const container = render(<App />)
	log(prettyDOM(container))
Debug 
Similar to preetyDOM
But this has limit of printing DOM by default 7000.
So if you have more than 7000 line of code into file
DEBUG_PRINT_LIMIT=10000 npm test






















