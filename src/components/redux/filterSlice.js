const initialState = '';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/updateFilter':
      return action.payload;

    default:
      return state;
  }
};

export const updateFilter = filterText => {
  return {
    type: 'filter/updateFilter',
    payload: filterText,
  };
};
