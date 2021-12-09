# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


### Name

Weekly Planner

### Description

An interactive weekly day planning application.

### Link to Deployed Repo



### Visuals

Moment objects have several internal properties that are prefixed with _.

The most commonly viewed internal property is the _d property that holds the JavaScript Date that Moment wrappers.
Frequently, developers are confused by console output of the value of _d.
Moment uses a technique called epoch shifting that causes this property to sometimes differ from the actual date value that the Moment reflects.
In particular if Moment TimeZone is in use, this property will almost never be the same as the actual value that Moment will output from its public .format() function.
As such, the values of _d and any other properties prefixed with _ should not be used for any purpose.

To print out the value of a Moment, use .format(), .toString() or .toISOString().

To retrieve a native Date object from Moment, use .toDate(). This function returns a properly shifted date for interaction with third party APIs.