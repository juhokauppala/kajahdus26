import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPlugin(EleventyVitePlugin);
};
