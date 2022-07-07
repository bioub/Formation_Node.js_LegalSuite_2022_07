function find() {
  return Promise.resolve([{id: 1, title: 'ABC', completed: true}]);
}

exports.find = find;
