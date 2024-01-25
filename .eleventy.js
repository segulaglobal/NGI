const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // watch sass
    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })


    // Filter for dates in footer
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
  };