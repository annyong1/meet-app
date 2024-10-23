import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the user opened the app', () => {

        });

        when('the list of events are rendered', () => {

        });

        then('event details should not show', () => {

        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        given('the user is seeing the events rendered', () => {

        });

        when('the user clicks the show details button', () => {

        });

        then('the event details should be shown', () => {

        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        given('the user has clicked the show details button', () => {

        });

        when('the user clicks the hide details button', () => {

        });

        then('the event details should be hidden', () => {

        });
    });

});