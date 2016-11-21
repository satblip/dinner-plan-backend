import BPromise from 'bluebird';
import models from '../src/models';
import _ from 'lodash';
require('chai').should();

describe('syntax', () => {
  it('conforms to standard', require('mocha-standard/semistandard'))
    .timeout(10000);
});

before(() => models.sequelize.sync({force: true}));

require('fs').readdirSync(`${__dirname}/../src/controllers`).forEach(filename => {
  const fixture = require(`./fixtures/${filename}`);
  const controller = require(`../src/controllers/${filename}`);

  describe(filename.split('.')[0], () => {
    _.keys(fixture).forEach(key => {
      fixture[key].forEach(test => {
        it(test.name, done => {
          BPromise.resolve(controller[key](test.in))
            .then(out => {
              if (_.isFunction(test.out)) {
                test.out(out);
                return done();
              }

              if (_.isArray(out) && out.length && out[0].toJSON) {
                out = out.map((outItem, i) => _.pick(outItem.toJSON(), _.keys(test.out[i])));
              } else if (out.toJSON) {
                out = _.pick(out.toJSON(), _.keys(test.out));
              } else if (_.isObject(out)) {
                for (let key in out) {
                  if (_.isArray(out[key]) && out[key].length && out[key][0].toJSON) {
                    out[key] = out[key].map((outItem, i) => _.pick(outItem.toJSON(), _.keys(test.out[key][i])));
                  }
                }
              }

              out.should.deep.equal(test.out);
              done();
            })
            .catch(done);
        });
      });
    });
  });
});
