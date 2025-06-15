import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Mathbook",
    pageTitleSuffix: "Walking in the air",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
    lightMode: {
      light: "#F5F0FA",
      lightgray: "#E2D5ED",
      gray: "#B2A2C2",
      darkgray: "#4A3A5A",
      dark: "#5A3D80",
      secondary: "#61398F",
      tertiary: "#000000",
      highlight: "#D6C6E1",
      textHighlight: "#000000"
    },
    darkMode: {
      light: "#1F1630",
      lightgray: "#34294A",
      gray: "#6A5F7F",
      darkgray: "#E8DFF5",
      dark: "#9A73C5",
      secondary: "#e0e0e0",
      tertiary: "#FF6600",
      highlight: "#4d425f",
      textHighlight: "#FF6600"
    },
  },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),

      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),

      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax",
  mathjaxOptions: {
    loader: { 
      load: ['[tex]/ams'] 
    },
    tex: {
      packages: {'[+]': ['ams']},
      inlineMath: [              
        ['$', '$'],
        ['\\(', '\\)']
      ],
      displayMath: [             
        ['$$', '$$'],
        ['\\[', '\\]']
      ],
      processEscapes: true       
    },
    svg: {
      fontCache: 'global'        
    }
  } }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
