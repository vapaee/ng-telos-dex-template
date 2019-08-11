// global is not defined
// https://github.com/aws-amplify/amplify-js/issues/678
(window as any).global = window;

// Buffer is not defined
// https://stackoverflow.com/a/50377270
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

// process is not defined
// https://github.com/algolia/algoliasearch-client-javascript/issues/691
(window as any).process = {
    env: { DEBUG: undefined },
    version: ""
};