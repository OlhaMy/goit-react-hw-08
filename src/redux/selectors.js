export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filter.name;
export const selectIsError = (state) => state.contacts.isError;
export const selectIsLoading = (state) => state.contacts.isLoading;
