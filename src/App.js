import React from 'react'
//edit imports here 
import Source11 from './tutorial/1-useState/setup/1-error-example'
import Source12 from './tutorial/1-useState/setup/2-useState-basics'
import Source13 from './tutorial/1-useState/setup/3-useState-array'
import Source14 from './tutorial/1-useState/setup/4-useState-object'
import Source15 from './tutorial/1-useState/setup/5-useState-counter'

import Source21 from './tutorial/2-useEffect/setup/1-useEffect-basics'
import Source22 from './tutorial/2-useEffect/setup/2-useEffect-cleanup'
import Source23 from './tutorial/2-useEffect/setup/3-useEffect-fetch-data'

import Source31 from './tutorial/3-conditional-rendering/setup/1-multiple-returns'
import Source32 from './tutorial/3-conditional-rendering/setup/2-short-circuit'
import Source33 from './tutorial/3-conditional-rendering/setup/3-show-hide'

import Source41 from './tutorial/4-forms/setup/1-controlled-inputs'
import Source42 from './tutorial/4-forms/setup/2-multiple-inputs'
import Final42 from './tutorial/4-forms/final/2-multiple-inputs'

function App() {
  return (
  <>
  {/* Same as React.Fragment  */}
    <Source11/>
    <Source12/>
    <Source13/>
    <Source14/>
    <Source15/>

    <Source21/>
    <Source22/>
    <Source23/>

    <Source31/>
    <Source32/>
    <Source33/>

    <Source41/>
    <Source42/>
    {/* <Final42/> */}
  </>
  )
}

export default App
