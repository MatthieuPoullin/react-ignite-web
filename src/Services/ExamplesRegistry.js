import React from 'react'
import R from 'ramda'
import DebugSettings from '../Config/DebugSettings'
let globalExamplesRegistry = []

export const addExample = (title, usage: () => {}) => { if (DebugSettings.includeExamples) globalExamplesRegistry.push({title, usage}) }

const renderExample = (example) => {
  return (
    <div key={example.title}>
      <h2>{example.title}</h2>
      {example.usage.call()}
    </div>
  )
}

export const renderExamples = () => R.map(renderExample, globalExamplesRegistry)

// Default for readability
export default {
  render: renderExamples,
  add: addExample
}
