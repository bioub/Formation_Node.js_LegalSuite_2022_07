function throwError(sendError = false) {
  if (sendError) {
    throw new Error('Example Error');
  }
}

exports.throwError = throwError
