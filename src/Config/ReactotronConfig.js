import Config from '../Config/DebugConfig'
import Immutable from 'seamless-immutable'
import Reactotron, { trackGlobalErrors } from 'reactotron-react-js'
import apisaucePlugin from 'reactotron-apisauce'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

if (Config.useReactotron) {
  Reactotron
    .configure({ name: 'RIW' })
    // register apisauce so we can install a monitor later
    .use(apisaucePlugin())

    // forward all errors to Reactotron
    .use(trackGlobalErrors({
      // ignore all error frames from react (for example)
      veto: (frame) =>
        frame.fileName.indexOf('/node_modules/react/') >= 0
    }))

    // setup the redux integration with Reactotron
    .use(reactotronRedux({ onRestore: Immutable }))

    // register the redux-saga plugin so we can use the monitor in CreateStore.js
    .use(sagaPlugin())

    // let's connect!
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-js
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron
} else {
  // a mock version should you decide to leave console.tron in your codebase
  console.tron = {
    log: () => false,
    warn: () => false,
    error: () => false,
    display: () => false,
    image: () => false
  }
}
