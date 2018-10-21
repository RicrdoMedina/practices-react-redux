import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_ENTITIES,
  SEARCH_ASYNC_ENTITIES,
  IS_LOADING
}
from '../action-types/index'

export function openModal(mediaId) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}

export function isLoading (value) {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}

export function searchAsyncEntities(query) {
  return (dispatch) => {

    //fetch()
    //XHR
    //TRAE
    // y en el callback colocariamos el dispatch
    dispatch(isLoading(true))

    setTimeout(() => {
      dispatch(isLoading(false))
      dispatch(searchEntities(query))
    }, 5000)
  }
}

export function searchEntities(query) {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query,
    }
  }
}
