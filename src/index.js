const responseCodes = {
  created:                   201,
  deleted:                   200,
  updated:                   200,
  no_content:                204,
  invalid_request:           400,
  unsupported_response_type: 400,
  invalid_scope:             400,
  temporarily_unavailable:   400,
  invalid_grant:             400,
  invalid_credentials:       400,
  invalid_refresh:           400,
  no_data:                   400,
  invalid_data:              400,
  access_denied:             401,
  unauthorized:              401,
  invalid_client:            401,
  forbidden:                 403,
  resource_not_found:        404,
  not_acceptable:            406,
  resource_exists:           409,
  conflict:                  409,
  resource_gone:             410,
  payload_too_large:         413,
  unsupported_media_type:    415,
  too_many_requests:         429,
  server_error:              500,
  unsupported_grant_type:    501,
  not_implemented:           501,
};

module.exports = (req, res, next) => {
  res.respond = (data = null, status = 200, message = '') => {
    
    res.statusCode = status;
    if (data === null)
      res.end(message);
    else 
      res.json(data);
  };

  res.fail = (messages, status = 400, code = null, customMessage = '') => {
    if (Array.isArray(messages))
      messages = {error: messages};

    const response = {
      status:   status,
      error:    code || status,
      messages: messages
    };

    res.respond(response, status, customMessage);
  };

  res.respondCreated = (data = null, message = '') => {
    res.respond(data, responseCodes.created, message);
  };

  next();
};