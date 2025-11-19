import pugPlugin from "@11ty/eleventy-plugin-pug";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(pugPlugin)
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addWatchTarget("_includes/*.pug");
    eleventyConfig.addPassthroughCopy("Merriweather-VariableFont_opsz,wdth,wght.ttf")
    eleventyConfig.addPassthroughCopy("OugkehRegular-DYYrW.otf")
};
