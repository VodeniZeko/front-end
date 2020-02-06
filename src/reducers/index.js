export const DATA_START = "DATA_START";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";
export const FORM_CHANGE = "FORM_CHANGE";
export const RESET_FORM = "RESET_FORM";
export const EDIT_CHANGE = "EDIT_CHANGE";
// const uuidv4 = require("uuid/v4");

const setid = window.localStorage.getItem("CURRENTUSER");

const initialState = {
  currentuser: JSON.parse(setid) ?? { id: 3 },
  loggedin: false,
  item: {
    // id: "",
    item_name: "",
    description: "",
    availability: 1,
    daily_rate: "",
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
        data: action.payload,
        isloading: false
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
          item_name: "",
          description: "",
          availability: "",
          daily_rate: "",
          condition: "",
          location: "",
          imgs: ""
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
          ...state.item,
          item_name: action.item_name,
          description: action.description,
          availability: action.availability,
          daily_rate: action.daily_rate,
          condition: action.condition,
          location: action.location,
          imgs: action.img
        }
      };

    default:
      return state;
  }
};
