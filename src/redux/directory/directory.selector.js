import { createSelector } from 'reselect';

const directoryDataSelector = (state) => state.directory;

export const directorySectionsSelector = createSelector([directoryDataSelector], (data) => data)

