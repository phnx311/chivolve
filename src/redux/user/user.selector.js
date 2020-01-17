import { createSelector } from 'reselect';

const userInputSelector = (state) => state.user;

const currentUserSelector = createSelector([userInputSelector], (user) => user.currentUser)

export default currentUserSelector;