const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a page container',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the base component type:',
    default: 'React.Component',
    choices: () => ['React.PureComponent', 'React.Component'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'plop',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  },{
    type: 'confirm',
    name: 'wantActionsAndReducer',
    default: true,
    message: 'Do you want an actions/reducer tuple for this page?',
  }, {
    type: 'confirm',
    name: 'wantSaga',
    default: true,
    message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
  }, {
    type: 'confirm',
    name: 'wantService',
    default: false,
    message: 'Do you want service to make API call?',
  }],
  actions: (data) => {
    var componentTemplate; // eslint-disable-line no-var

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './page/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './page/class.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../src/pages/{{name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/pages/{{name}}/tests/index.test.js',
      templateFile: './page/test.js.hbs',
      abortOnFail: true,
    },{
      type: 'add',
      path: '../../src/pages/{{name}}/index.scss',
      templateFile: './page/style.scss.hbs',
      abortOnFail: true,
    }];

    // If they want actions and a reducer, generate actions.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../src/redux/actions/{{name}}.js',
        templateFile: './page/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/redux/actions/tests/{{name}}.test.js',
        templateFile: './page/actions.test.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../src/redux/reducers/{{name}}.js',
        templateFile: './page/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/redux/reducers/tests/{{name}}.test.js',
        templateFile: './page/reducer.test.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../src/sagas/{{name}}.js',
        templateFile: './page/saga.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/sagas/tests/{{name}}.test.js',
        templateFile: './page/saga.test.js.hbs',
        abortOnFail: true,
      });
    }

    // Services
    if (data.wantService) {
      actions.push({
        type: 'add',
        path: '../../src/services/{{name}}.js',
        templateFile: './page/service.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/services/tests/{{name}}.test.js',
        templateFile: './page/service.test.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
