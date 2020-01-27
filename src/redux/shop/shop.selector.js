import { createSelector } from "reselect";

const shopSelector = (state) => state.collections;

export const collectionsSelector = createSelector([shopSelector], (collections) => collections)