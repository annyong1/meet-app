# meet-app

User Stories:

    Feature 1:
        As a user,
        I should be able to filter events by city
        So that I can see a list of events taking place in that city
    
    Feature 2: Show/Hide Event Details.
        As a user,
        I should be able to see the details of the events
        So that I can see if I would be interested in that event
    
    Feature 3: Specify Number of Events.
        As a user,
        I should be able to see how many events are in my area
        So that I can narrow down the ones I am interested in
    
    Feature 4: Use the App When Offline.
        As a user,
        I should be able to see events in the app even when I am not connected to the internet
        So that I can use the app at any time
    
    Feature 5: Add an App Shortcut to the Home Screen.
        As a user,
        I should be able to create a shortcut to the app on my home screen
        So that I can access it easily and conveniently
    
    Feature 6: Display Charts Visualizing Event Details.
        As a user,
        I should be able to see charts that help me see details
        So that I have all the details all in one place and have a better understanding of them

Scenarios:

    Scenario 1: Filter events by city
        Given: I am on the event listing page
        When: I filter the events by city
        Then: I should see a list of events taking place in that city

    Scenario 2: View event details
        Given: I am on the event listing page
        When: I select an event to view its details
        Then: I should see the event details

    Scenario 3: View number of events in my area
        Given: I am on the event listing page
        When: I view the events in my area
        Then: I should see the total number of events in my area and be able to narrow down the events based on my interests
    
    Scenario 4: View events offline
        Given: I am using the app without an internet connection
        When: I navigate to the event listing page
        Then: I should still be able to view the events that were previously synced or cached, and the app should not display any errors or require an internet connection to function
    
    Scenario 5: Create app shortcut on home screen
        Given: I am using a mobile device
        When: I add the app to my home screen
        Then: I should be able to access the app from the home screen to easily find and launch the app from the home screen

    Scenario 6: View informative charts
        Given: I am viewing a page with chart data
        When: I interact with the chart (e.g. hover, click, zoom)
        Then: I should see detailed information about the data being displayed, and the chart should be visually clear and easy to understand and provide additional context or insights into the data