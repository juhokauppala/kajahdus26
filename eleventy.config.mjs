import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import { encryptHTML } from "pagecrypt";

const resolvePassword = () => {
    if (process.env.PASSWORD) return process.env.PASSWORD;

    console.warn(`No environment variable called PASSWORD!`)
    return "asd"
}

export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPlugin(EleventyVitePlugin);
    eleventyConfig.addTransform("encrypt-participant", async function (content) {
        const isSensitive = this.page.outputPath?.includes("participant")
        if (isSensitive) return encryptHTML(content, resolvePassword());

        return content
    })
};
