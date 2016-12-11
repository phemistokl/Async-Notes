const DEFAULT_COLOR = 'yellow';

export const addNote = text => {
  return {
    type: 'ADD_NOTE',
    id: Date.now(),
    color: DEFAULT_COLOR,
    text
  };
};

export const deleteNote = id => {
  return {
    type: 'DELETE_NOTE',
    id
  };
};
