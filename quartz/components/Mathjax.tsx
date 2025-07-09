import Script from "unfazed-script"
import { Global } from "@emotion/react"

export default function MathJax() {
  return (
    <>
      {/* 自定义 MathJax 配置 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.MathJax = {
              tex: {
                inlineMath: [['$', '$'], ['\\$$', '\\$$']],
                displayMath: [['$$', '$$'], ['\$$', '\$$']],
                packages: {'[+]': ['base', 'ams']}
              },
              loader: {
                load: ['[tex]/base', '[tex]/ams']
              },
              svg: {
                fontCache: 'global'
              }
            };
          `,
        }}
      />

      {/* 加载 MathJax 主体脚本 */}
      <Script
        src="https://cdn.jsdelivr.net/npm/mathjax @3/es5/tex-svg.js"
        strategy="afterInteractive"
      />
    </>
  )
}

<Global
  styles={{
    ".MathJax": {
      textAlign: "center !important",
      margin: "1em auto",
      display: "block !important",
      width: "100%",
    },
  }}
/>