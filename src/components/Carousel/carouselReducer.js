import { cardData } from '../../sections/Testimonials/internals/card/cardData';

export const types = {
  TOUCHSTART: 'TOUCHSTART',
  TOUCHEND: 'TOUCHEND',
  NEXT: 'NEXT',
  PREV: 'PREV',
  PAYLOAD_CUSTOM: 'PAYLOAD_CUSTOM'
};
const { NEXT, PREV, PAYLOAD_CUSTOM, TOUCHSTART, TOUCHEND } = types;

export const initialState = {
  touchStartEvent: null,
  touchEndEvent: null,
  slideIndex: 2
};

export const slideReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEXT:
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % cardData.length
      };
    case PREV:
      return {
        ...state,
        slideIndex: state.slideIndex === 0 ? cardData.length - 1 : state.slideIndex - 1
      };
    case PAYLOAD_CUSTOM:
      return {
        ...state,
        slideIndex: payload
      };
    case TOUCHSTART: {
      return {
        ...state,
        touchStartEvent: payload
      };
    }
    case TOUCHEND: {
      return {
        ...state,
        touchEndEvent: payload
      };
    }
    default:
      return state;
  }
};
