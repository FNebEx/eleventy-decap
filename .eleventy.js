module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("admin/config.yml");

  return {
    dir: {
      input: "src", 
      output: "_site", 
      includes: "/_includes",
      layouts: "/_includes/layouts",
    }
  }
};