module.exports = {
  name: 'feature-path-upload',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-path-upload',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
