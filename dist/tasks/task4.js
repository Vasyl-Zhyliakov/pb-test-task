function isNotEmptyArray(data) {
  if (Array.isArray(data) && data.length > 0) {
    return data;
  }

  return false;
}
