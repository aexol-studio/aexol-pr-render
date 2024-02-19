// module.exports = {
//   exportPathMap: function () {
//     const paths = {
//       "/": { page: "/" },
//     };
//     return paths;
//   },
//   distDir: "build",
// };
module.exports = {
  exportPathMap: function () {
    const paths = {
      "/": { page: "/" },
    };
    return paths;
  },
  output: "export",
  distDir: "build",
};
