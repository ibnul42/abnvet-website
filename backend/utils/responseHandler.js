const responseHandler = (
  res,
  success = true,
  message = "Request successful",
  data = null,
  statusCode = 200
) => {
  let response;

  switch (statusCode) {
    case 400:
      response = { status: "fail", code: 400, reason: message };
      break;
    case 401:
      response = { status: "unauthorized", code: 401, reason: message };
      break;
    case 404:
      response = { status: "not_found", code: 404, reason: message };
      break;
    case 409:
      response = { status: "conflict", code: 409, reason: message };
      break;
    case 500:
      response = {
        status: "error",
        code: 500,
        reason: "Internal Server Error",
      };
      break;
    default:
      response = {
        success,
        message,
      };
      if (data !== null) response.data = data;
      break;
  }

  res.status(statusCode).json(response);
  return response;
};

module.exports = responseHandler;
