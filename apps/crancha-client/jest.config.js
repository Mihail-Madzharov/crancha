module.exports = {
  name: 'crancha-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/crancha-client',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
