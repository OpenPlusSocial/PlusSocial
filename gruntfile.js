module.exports = function (grunt) {
    grunt.initConfig({

        less: {
            ProjectIntroductionSite: {
                options: {
                    paths: ["assets/css"]
                },
                files: { "src/ProjectIntroductionSite/css/site.css": "src/ProjectIntroductionSite/css/less/site.less" }
            }
            
        },

	watch: {
		files: "src/ProjectIntroductionSite/css/less/*.less",
		tasks: ["less"]
	}
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less']);
};