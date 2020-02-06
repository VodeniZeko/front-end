export const DATA_START = "DATA_START";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";
export const FORM_CHANGE = "FORM_CHANGE";
export const RESET_FORM = "RESET_FORM";
export const EDIT_CHANGE = "EDIT_CHANGE";
const uuidv4 = require("uuid/v4");

const setid = window.localStorage.getItem("CURRENTUSER");

const initialState = {

  currentuser: JSON.parse(setid) ?? { id: 3 },

//   currentuser: JSON.parse(setid),

  loggedin: false,
  item: {
    // id: uuidv4(),
    item_name: "",
    description: "",
    availability: true,
    daily_rate: Number,
    condition: "",
    location: "",
    imgs: ""
  },
  isloading: false,
  data: [],
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_START:
      return {
        ...state,
        isloading: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        isloading: false,
        data: action.payload
      };
    case DATA_FAILURE:
      return {
        ...state,
        isloading: false,
        data: action.payload
      };
    case FORM_CHANGE:
      return {
        ...state,
        item: {
          ...state.item,
          [action.name]: action.value
        }
      };
    case "RATE_CHANGE":
      return {
        ...state,
        item: {
          ...state.item,
          daily_rate: {
            ...state.item.rentalPrice,
            [action.name]: action.value
          }
        }
      };

    case RESET_FORM: {
      return {
        ...state,
        item: {
          id: uuidv4(),
          item_name: "",
          description: "",
          availability: true,
          daily_rate: Number,
          condition: "",
          location: ""
        }
      };
    }
    case "LOGGED_STATUS":
      return {
        ...state,
        loggedin: action.payload
      };
    case "CURRENT_USER":
      return {
        ...state,
        currentuser: action.payload
      };
    case EDIT_CHANGE:
      return {
        ...state,
        item: {
          id: action.id,
          item_name: action.name,
          description: action.description,
          availability: action.availability,
          daily_rate: action.rate,
          condition: action.condition,
          location: action.location
        }
      };

    default:
      return state;
  }
};
