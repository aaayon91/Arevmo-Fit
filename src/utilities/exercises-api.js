import sendRequest from './send-request';
const BASE_URL = '/api/exercises'

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getOne(exerciseId) {
    return sendRequest(`${BASE_URL}/${exerciseId}`)
}

export function add(exerciseData) {
    return sendRequest(BASE_URL, 'POST', exerciseData);
}

// export function deleteExercise(exerciseId) {
//     return sendRequest(BASE_URL, 'DELETE', exerciseId);
// }

export function updateExercise(exerciseId, updatedExerciseData) {
    return sendRequest(`${BASE_URL}/${exerciseId}`, 'PUT', updatedExerciseData);
}