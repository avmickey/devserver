class ApiError extends Error {
  constructor(status, message) {
    super();
    this.message = message;
    this.status = status;
  }
  static badRequest(message) {
    return new ApiError(404, message);
  }
  static internes(message) {
    return new ApiError(403, message);
  }
  static forbiten(message) {
    return new ApiError(500, message);
  }
}

module.exports = ApiError;
