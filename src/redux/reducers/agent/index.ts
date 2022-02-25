import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AgentFormStatus, AgentFormType, AgentStatus, SignatureI} from './types'
import {SignatureEx} from './siganature.example'

export interface AgentStateI {
  identity: {
    name: string | undefined,
    date: string | undefined,
    lastEpoch: number | undefined,
    lastWeek: number | undefined,
    poAccumulated: number | undefined,
    coAccumulated: number | undefined,
    lastWeekMissionPercentage: number | undefined,
    accumulatedMissionPercentage: number | undefined,
    lastEpochDirectVol: number | undefined,
    lastEpochReferralVol: number | undefined,
    accumulatedDirectVol: number | undefined,
    accumulatedReferralVol: number | undefined,
    isProductOfficer: boolean
    isCommunityOfficer: boolean
  }
  status: AgentStatus
  formIsOpen: boolean
  formType: AgentFormType
  formRFID: string | undefined,
  formStatus: AgentFormStatus,
  signature: SignatureI | undefined
  signedData: string | undefined
  QRLinkIsOpen: boolean
}

const initialState: AgentStateI = {
  identity: {
    name:  undefined,
    date:  undefined,
    lastEpoch:  undefined,
    lastWeek:  undefined,
    poAccumulated:  undefined,
    coAccumulated:  undefined,
    lastWeekMissionPercentage:  undefined,
    accumulatedMissionPercentage:  undefined,
    lastEpochDirectVol:  undefined,
    lastEpochReferralVol:  undefined,
    accumulatedDirectVol:  undefined,
    accumulatedReferralVol:  undefined,
    isProductOfficer: true,
    isCommunityOfficer: false,
  },
  status: AgentStatus.logout,
  formIsOpen: false,
  formType: AgentFormType.default,
  formRFID: undefined,
  formStatus: AgentFormStatus.signSignature,
  // signature: undefined,
  signature: {
    domain: SignatureEx.domain,
    types: SignatureEx.types,
    value: SignatureEx.message,
  }, // todo: for testing
  signedData: undefined,
  QRLinkIsOpen: false,
}

export const AgentSliceName = 'Agent'

const AgentSlice = createSlice({
  name: AgentSliceName,
  initialState,
  reducers: {
    signedDate: (
      state: AgentStateI,
      action: PayloadAction<{ signedData: string }>
    ) => {
      const { signedData } = action.payload
      state.signedData = signedData
      state.formStatus = AgentFormStatus.apply
      return state
    },
    rejectSignedDate: (
      state: AgentStateI,
    ) => {
      state.formStatus = AgentFormStatus.signSignature
      return state
    },
    formStatus: (
      state: AgentStateI,
      action: PayloadAction<{ formStatus: AgentFormStatus }>
    ) => {
      const { formStatus } = action.payload
      state.formStatus = formStatus
      return state
    },
    form: (
      state: AgentStateI,
      action: PayloadAction<{ formIsOpen: boolean, formType: AgentFormType, formRFID?: string, formStatus?: AgentFormStatus}>
    ) => {
      const { formIsOpen, formRFID, formType, formStatus } = action.payload
      state.formIsOpen = formIsOpen
      state.formRFID = formRFID
      state.formType = formType
      if(formStatus) state.formStatus = formStatus
      return state
    },
    QRLink: (
      state: AgentStateI,
      action: PayloadAction<{ QRLinkIsOpen: boolean }>
    ) => {
      const { QRLinkIsOpen } = action.payload
      state.QRLinkIsOpen = QRLinkIsOpen
      return state
    },
    login: (
      state: AgentStateI,
      action: PayloadAction<{ r: object }>
    ) => {
      state.status = AgentStatus.logout
      return state
    },
    logout: (
      state: AgentStateI,
    ) => {
      state.status = AgentStatus.logout
      return state
    },
    logging: (
      state: AgentStateI,
      action: PayloadAction<{ address: string }>
    ) => {
      state.status = AgentStatus.logout
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const AgentSliceAction = AgentSlice.actions
export const AgentSliceReducer = AgentSlice.reducer
