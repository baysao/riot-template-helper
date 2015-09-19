Package.describe({
  name: 'baysao:riot-template-helper',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Use Riot components in native Meteor templates',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/baysao/riot-template-helper.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');

  api.use([
    'templating',
    'baysao:riotjs',
    'underscore'
  ]);

  api.addFiles(['riot-template-helper.js'], 'client');
});

