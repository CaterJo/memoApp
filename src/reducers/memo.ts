import {Memo} from '../models'
import * as types from '../actions/types'

export interface MemoState {
  memos: Memo[],
  deletedMemos: Memo[],
}

const initialState: MemoState = {
  memos: [],
  deletedMemos: [],
}


export interface FetchMemoListAction {
  type: typeof types.FETCH_MEMO_LIST.REQUEST
}

export interface FetchMemoListSuccessAction {
  type: typeof types.FETCH_MEMO_LIST.SUCCESS
  payload: Memo[]
}

export interface FetchDeletedMemoListAction {
  type: typeof types.FETCH_DELETED_MEMO_LIST.REQUEST
}

export interface FetchDeletedMemoListSuccessAction {
  type: typeof types.FETCH_DELETED_MEMO_LIST.SUCCESS
  payload: Memo[]
}

export interface FetchMemoAction {
  type: typeof types.FETCH_MEMO.REQUEST
  payload: number
}

export interface FetchMemoSuccessAction {
  type: typeof types.FETCH_MEMO.SUCCESS
  payload: Memo
}

export interface FetchDeletedMemoAction {
  type: typeof types.FETCH_DELETED_MEMO.REQUEST,
  payload: number
}

export interface FetchDeletedMemoSuccessAction {
  type: typeof types.FETCH_DELETED_MEMO.SUCCESS
  payload: Memo
}

export interface AddMemoAction {
  type: typeof types.ADD_MEMO.REQUEST
  payload: Memo
}

export interface AddMemoSuccessAction {
  type: typeof types.ADD_MEMO.SUCCESS,
  payload: Memo
}

export interface DeleteMemoAction {
  type: typeof types.DELETE_MEMO.REQUEST
  payload: number
}

export interface DeleteMemoSuccessAction {
  type: typeof types.DELETE_MEMO.SUCCESS,
  payload: number
}

export interface RestoreMemoAction {
  type: typeof types.RESTORE_MEMO.REQUEST
  payload: number
}

export interface ResotreMemoSuccessAction {
  type: typeof types.RESTORE_MEMO.SUCCESS,
  payload: number
}

type MemoActionTypes = FetchMemoListSuccessAction 
  | FetchDeletedMemoListSuccessAction
  | FetchMemoSuccessAction
  | FetchDeletedMemoSuccessAction
  | AddMemoSuccessAction
  | DeleteMemoSuccessAction
  | ResotreMemoSuccessAction

  
  const memoReducer = (state = initialState, action: MemoActionTypes): MemoState => {
    switch (action.type) {
      case types.FETCH_MEMO_LIST.SUCCESS:
        return {
          ...state,
          memos: action.payload.map(memo => ({
            ...memo
          }))
        }
      case types.FETCH_DELETED_MEMO_LIST.SUCCESS:
        return {
          ...state,
          deletedMemos: action.payload
        }
      case types.FETCH_MEMO.SUCCESS:
        return {
          ...state,
          memos: state.memos.map(memo => {
            if (memo.id !== action.payload.id) return memo
            return { ...action.payload }
          })
        }
      case types.FETCH_DELETED_MEMO.SUCCESS:
        return {
          ...state,
          deletedMemos: state.deletedMemos.map(memo => {
            if (memo.id !== action.payload.id) return memo
            return { ...action.payload }
          })
        }
      case types.ADD_MEMO.SUCCESS:
        return {
          ...state,
          memos: [action.payload, ...state.memos]
        }
      case types.DELETE_MEMO.SUCCESS:
        if (!action.payload) return state;
        return {
          ...state,
          memos: state.memos.filter(memo => {
            return memo.id !== action.payload
          })
        }
      case types.RESTORE_MEMO.SUCCESS:
        if (!action.payload) return state;
        return {
          ...state,
          deletedMemos: state.deletedMemos.filter(memo => {
            return memo.id !== action.payload
          })
        }
      default: 
        return state
    }
  }

export default memoReducer