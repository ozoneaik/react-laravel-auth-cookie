export const ErrorResponse = (error) => {
    let message = 'Server error';
    let status = 500;
    if (error.response) {
        message = error.response.data.message;
        status = error.response.status;
    }
    const data = {
        message: message,
    }
    return {data, status};
}