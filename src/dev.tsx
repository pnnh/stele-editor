import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { SFEditorModel } from './editor/nodes/node'
import { SFXEditor } from './editor/editor'

const initialValue = {
  children: [{
    name: 'paragraph',
    children: [{ name: 'text', text: '' }]
  }]
}

function DevApp () {
  // initialValue = JSON.parse('{"children":[{"children":[{"name":"text","text":""}],"name":"paragraph"},{"children":[{"name":"code","text":"#aaaaa\\n\\n```shell\\nls /home\\n```\\nconsole.log(\\"dddd\\")22"}],"language":"markdown","name":"code-block"}]}')
  const [editorValue, setEditorValue] = useState<SFEditorModel>(initialValue)
  return <div>
    <SFXEditor value={editorValue} onChange={(value) => {
      console.debug('onChange222')
      setEditorValue(value)
    }} />
    <button onClick={() => {
      console.log(editorValue)
    }}>打印值</button>
  </div>
}

ReactDOM.render(<DevApp />, document.getElementById('root'))
