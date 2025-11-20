import pugPlugin from "@11ty/eleventy-plugin-pug";
import { HtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(pugPlugin)
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addWatchTarget("_includes/*.pug");
    eleventyConfig.addPassthroughCopy("Merriweather-VariableFont_opsz,wdth,wght.ttf")
    eleventyConfig.addPassthroughCopy("OugkehRegular-DYYrW.otf")
};
