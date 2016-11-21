const { name, version } = require('../../package.json');

export const read = [{
  name: 'name and version are well returned',
  out: { name, version }
}];
