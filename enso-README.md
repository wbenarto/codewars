EnsoData React Take-home Project
This project will help us gauge your expertise in building interactive React applications.
Background
You will be recreating a simplified version of EnsoData's Scoring Viewer. The Viewer is used by sleep clinicians to annotate biological signals collected during sleep.




Concepts
Event
Each Event can be represented by a start time, and a duration, both in seconds. You can calculate the end time by adding the start plus the duration. In the example below, the start is 1, the duration is 2, therefore the end is 3.
Getting Started
We have initialized a project and git repo that you will need to download here.

You have been provided a basic React application that contains a single channel displaying a sine wave. Go ahead and run npm install followed by npm start.


Milestones
For each milestone::
Implement the milestone using the given specifications
Commit your work with git, stating the milestone in your commit message
Your committed code should be able to run without errors
Unit testing is not required, but manual testing is encouraged to ensure everything is working as expected

Milestone 1: Creating Events


Events shall be created by clicking and dragging within the provided channel
Each Event shall be displayed as it’s being created (before releasing click)
Once drawn, Events should persist
Multiple Events may be drawn, do not worry about overlapping events
The height of the Event shall be roughly the same height as the channel

Hints:
First, try to just create a rectangularly shaped component that you can specify the position and width of.  Then write event handlers to create this component as needed.
The MouseEvent API will help you determine the coordinates of the cursor.
Milestone 2: Resizing Events (optional)

Note: this milestone is extra credit if you have time! Your submission will still be considered complete if you don’t complete this milestone.

Events may be resized by placing the mouse cursor on the right or left border of the event and clicking/dragging to the desired width

Constraints & Recommendations
Keep your use of external libraries to a minimum. A general rule is that you can use libraries that do not implement the core functionality we are asking for. For example, lodash would be a good library to install, but react-konva or draggable.js would be unacceptable since they provide all of the interactive functionality for dragging and resizing events. If we feel you offloaded too much of the functionality to other libraries, we will ask you to re-write your solution. The author's solution did not use any npm packages besides styled-components.
You may use the styling solution you are most comfortable with, but no CSS preprocessor has been provided out-of-the-box. "React-esque" as possible. Meaning, only use React and vanilla JavaScript and no other UI libraries such as JQuery. 
Using React.useRef hook to retrieve the desired properties and update state to perform any changes to position such as  the offsetLeft, offsetTop, and clientHeight properties should all prove useful to you if you choose to work with the DOM.
Submitting
Zip up the project folder and email it back within 24 hours of when you started.
Please do not include the node_modules in the zip
Please include the .git folder so we can see your milestones
