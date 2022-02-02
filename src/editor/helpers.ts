import { ReactEditor } from 'slate-react'
import { Editor as SlateEditor, Node as SlateNode, Transforms } from 'slate'

export function setLocalStorage (key: string, value: any) {
  const stringValue = JSON.stringify(value)
  localStorage.setItem(key, stringValue)
}

export function getLocalStorage (key: string) :any {
  const stringValue = localStorage.getItem(key) ?? 'null'
  return JSON.parse(stringValue)
}

export function selectNodeLast (editor: ReactEditor, node: SlateNode) {
  const nodePath = ReactEditor.findPath(editor, node)
  const [lastNode, lastPath] = SlateNode.last(node, [])
  const point = {
    path: nodePath.concat(lastPath), offset: SlateNode.string(lastNode).length
  }
  Transforms.select(editor, point)
}
