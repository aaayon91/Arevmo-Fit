import sendRequest from './send-request';
const BASE_URL = '/api/sessions'

// export function getAll() {
//     return sendRequest(BASE_URL);
// }

// export function getOne(exerciseId) {
//     return sendRequest(`${BASE_URL}/${exerciseId}`)
// }

export function addSession(sessionData) {
    return sendRequest(BASE_URL, 'POST', sessionData);
}

// export function deleteExercise(exerciseId) {
//     return sendRequest(BASE_URL, 'DELETE', exerciseId);
// }

// export function updateExercise(exerciseId, updatedExerciseData) {
//     return sendRequest(`${BASE_URL}/${exerciseId}`, 'PUT', updatedExerciseData);
// }