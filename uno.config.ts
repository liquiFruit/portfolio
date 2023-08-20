import { defineConfig, presetWebFonts, presetWind } from "unocss"
import presetAutoprefixer from "unocss-preset-autoprefixer"
import presetShadcn from "./preset.shadcn"


var presets = [
  presetWind(),
  presetShadcn(),
  presetWebFonts({
    provider: "fontshare",
    fonts: {
      sans: {
        name: "Satoshi",
      },
    }
  })
]
if (process.env.PREFIX) presets.push(presetAutoprefixer())


export default defineConfig({
  presets,
})