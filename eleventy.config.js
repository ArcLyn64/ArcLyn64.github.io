module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setIncludesDirectory("../_includes");
    eleventyConfig.addCollection("posts", function (collectionsApi) {
        return collectionsApi.getFilteredByTag("posts");
    });
};