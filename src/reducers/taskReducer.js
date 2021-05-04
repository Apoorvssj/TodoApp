const initialState = { AllTasks: [] };
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT":
      return { AllTasks: [action.payload.value, ...state.AllTasks] };
    default:
      return state;
  }
};

export default taskReducer;
