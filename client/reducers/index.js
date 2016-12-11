function note(state, action) {
  switch (action.type) {
    case 'ADD_NOTE': {
      return {
        id: action.id,
        text: action.text,
        color: action.color
      };
    }

    case 'DELETE_NOTE': {
      return state.id !== action.id;
    }

    default: {
      return state;
    }
  }
};

export default function notes(state = [], action) {
  switch (action.type) {
    case 'ADD_NOTE': {
      return [
        ...state,
        note(undefined, action)
      ];
    }

    case 'DELETE_NOTE': {
      return state.filter(item => note(item, action));
    }

    default: {
      return state;
    }
  }
};
