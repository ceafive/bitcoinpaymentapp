const { warn, debug, error, info, log, write } = require("firebase-functions/lib/logger");

exports.logger = {
  warn,
  debug,
  error,
  info,
  log,
  write,
};
