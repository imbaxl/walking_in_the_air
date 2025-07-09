// plugins/remark/inlineDoubleDollarDisplay.ts
import type { Plugin } from "unified"
import { visit } from "unist-util-visit"
import type { InlineMath, Math } from "mdast"

/** 将 $$a+b=c$$ 这类行内公式转成块级 <math display> 节点 */
export const inlineDoubleDollarDisplay: Plugin = () => {
  return (tree) => {
    visit(tree, "inlineMath", (node: InlineMath, idx, parent: any) => {
      const raw = node.value.trim()
      // 只有形如 $$ ... $$ 的才转换；$ ... $ 保持行内
      if (raw.startsWith("$$") && raw.endsWith("$$")) {
        const content = raw.slice(2, -2).trim() // 去掉前后 $$
        const displayNode: Math = { type: "math", value: content } // mdast 的块级 math
        parent.children[idx] = displayNode
      }
    })
  }
}