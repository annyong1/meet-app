import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {

    test('User does not type in the number-of-events field', ({ given, when, then }) => {
        given('I am a user,', () => {

        });

        when('I have not typed a number on number-of-events field', () => {

        });

        then(/^I should see a list of (\d+) events$/, (arg0) => {

        });
    });

    test('User types a number in the number-of-events field', ({ given, when, then }) => {
        given('I am a user,', () => {

        });

        when('I type a number on number-of-events field', () => {

        });

        then('I should be able to see a list of events with the number I typed as the length', () => {

        });
    });
});
