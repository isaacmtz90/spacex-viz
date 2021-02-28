## Stack

The project uses plain Reactjs and MaterialUI as the UI library of choice.
the main decision here was familiarity with React, but also wanting to try something new with the UI library.

To make development more enjoyable, `eslint` and `prettier` are implemented so that the code will
have consistent and automatic formatting. `Husky` takes care of the pre-commit hook that will format the code before it gets pushed to the codebase.

## Assumptions and Considerations

While tests are not included, most of the code was written with a TDD mentality, focusing on smaller components that can be easily tested, and functions that handle the "business" logic that are also independent and testable.

## Design patterns

The main design pattern implemented here is the Adapter pattern. Each of the responses of the SpaceX API returns wildly different payloads, the bulk of the work was writting small adapter functions that could parse a specific request into a "generic" structure that we defined. That structure is the one being sent to the cards and dialogs that we display on the interface, making it so that we don't need to build a different UI component for each different api object.

