/* eslint-disable import/prefer-default-export */
import * as types from '../constants/contestantActionTypes';

// ASYNC ACTIONS CREATORS
/**
 * GET CONTESTANTS
 * @func getContestants
 * @description indiquely to the app that he makes load the result who will come from the api at get contestant action moment
 * @returns object
 */
 export const getContestants = () => ({
   type: types.GET_ALL_CONTESTANT,
   loading: true
 });

 /**
  * GET CONTESTANTS SUCCESS
  * @func getContestantsSuccess
  * @param {array} contestants
  * @description indiquely to the app that the request has been successfully completed
  * @returns object
  */
 export const getContestantsSuccess = (contestants) => ({
    type: types.GET_ALL_CONTESTANT_SUCCESS,
    payload: contestants,
    loading: false
 });

 /**
  * GET CONTESTANTS FAILED
  * @func getContestantsFailed
  * @param {string} error
  * @description indiquely to the app that the request failed
  * @returns object
  */
 export const getContestantsFailed = (error) => ({
   type: types.GET_ALL_CONTESTANT_ERROR,
   loading: false,
   error
 });

// SYNC ACTIONS CREATORS
 /**
  * GET CONTESTANTS BY PARTY
  * @func getContestantsByParty
  * @param {string} party
  * @description Find all contestants in store by party
  * @returns object
  */
 export const getContestantsByParty = (party) => ({
   type: types.GET_ALL_CONTESTANT_BY_PARTY,
   party
 });

 /**
  * GET CONTESTANTS BY CATEGORY
  * @func getContestantsByCategory
  * @param {number} category
  * @description Find all contestants in store by category
  * @returns object
  */
 export const getContestantsByCategory = (category) => ({
   type: types.GET_ALL_CONTESTANT_BY_CATEGORY,
   category
 });