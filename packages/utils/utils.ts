import type { ComponentInternalInstance } from 'vue'

export function findAncestor(selfInstance: ComponentInternalInstance | null, compName: string) {
  let current = selfInstance
  while (current?.type.name !== compName && current?.type.__name !== compName) {
    if (current?.parent) current = current.parent
  }
  return current
}
