#!/usr/bin/node

exports.converter = function (base) {
  rturn function (val) { return val.toString(base); };
};
