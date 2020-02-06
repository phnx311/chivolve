import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens:4,
  mens: 5
}

const shopSelector = (state) => state.collections;

export const collectionsSelector = createSelector([shopSelector], (collections) => collections)

export const collectionSelector = collectionId => createSelector([collectionsSelector], (collections) => {
  return collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionId]).items
})