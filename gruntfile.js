module.exports = function (grunt) {
    grunt.initConfig({

        less: {
            ProjectIntroductionSite: {
                options: {
                    paths: ["assets/css"]
                },
                files: { "src/ProjectIntroductionSite/css/site.css": "src/ProjectIntroductionSite/css/less/site.less" }
            }
            //,            production: {
            //    options: {
            //        paths: ["assets/css"],
            //        cleancss: true
            //    },
            //    files: { "path/to/result.css": "path/to/source.less" }
            //}
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};