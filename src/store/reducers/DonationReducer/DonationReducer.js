import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,
  name: '',
  email: '',
  phone: '',
  company: '',
  frequency: 'One Time',
  donationType: '',
  amount: '',
  paymentType: 'cash',
  cardNumber: '',
  expDate: '',
  cvv: '',
  brand: '',
  condition: '',
  model: '',
  quantity: '',
  details: '',
  donationFrequency: '',
  startDate: '',
  startMonth: '',
  success: false,
  error: false,
  errorMessage: ''
};

const donation = createSlice({
  name: 'Donation',
  initialState,
  reducers: {
    prev: (state) => {
      state.currentStep -= 1;
    },
    next: (state) => {
      state.currentStep += 1;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setFrequency: (state, action) => {
      state.frequency = action.payload;
    },
    setDonationType: (state, action) => {
      state.donationType = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setPaymentType: (state, action) => {
      state.paymentType = action.payload;
    },
    setCardNumber: (state, action) => {
      state.cardNumber = action.payload;
    },
    setExpDate: (state, action) => {
      state.expDate = action.payload;
    },
    setCvv: (state, action) => {
      state.cvv = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setCondition: (state, action) => {
      state.condition = action.payload;
    },
    setModel: (state, action) => {
      state.model = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setDonationFrequency: (state, action) => {
      state.donationFrequency = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setStartMonth: (state, action) => {
      state.startMonth = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    }
  }
});

export default donation.reducer;
export const {
  prev,
  next,
  setCurrentStep,
  setAmount,
  setBrand,
  setCardNumber,
  setCompany,
  setCondition,
  setCvv,
  setDetails,
  setDonationFrequency,
  setDonationType,
  setEmail,
  setExpDate,
  setFrequency,
  setModel,
  setName,
  setPaymentType,
  setPhone,
  setQuantity,
  setStartDate,
  setStartMonth,
  setSuccess,
  emailVerification,
  setError,
  setErrorMessage
} = donation.actions;
