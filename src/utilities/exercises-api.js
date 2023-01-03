import sendRequest from './send-request';
const BASE_URL = '/api/exercises'

// export function getAll() {
//     return sendRequest(BASE_URL);
// }

// export function getOne(boardId) {
//     return sendRequest(`${BASE_URL}/${boardId}`);
// }

export function add(exerciseData) {
    return sendRequest(BASE_URL, 'POST', exerciseData);
}

// export function deleteBoard(board_id) {
//     return sendRequest(BASE_URL, 'DELETE', board_id);
// }

// export function addScores(board_id) {
//     return sendRequest(BASE_URL, 'PUT', board_id);
// }