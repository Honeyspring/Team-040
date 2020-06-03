/* eslint-disable import/prefer-default-export */
/**
 * Headers for API REQUEST
 * @func HEADERS
 * @desc Headers options to pass at all the request API
 * @param {string} contentType
 * @returns Headers<object>
 */
export const HEADERS = (contentType = 'application/json') => new Headers({
  'Content-Type': contentType,
  Accept: 'application/json',
  Authorization: 'Bearer APIKey'
});

/** Domain API
 * @const API_URI
 */
export const API_URI = 'https://sdg-team-40.herokuapp.com';
