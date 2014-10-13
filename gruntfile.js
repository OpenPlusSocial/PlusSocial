module.exports = function (grunt) {
    grunt.initConfig({



        validation: {
    options: {
        reset: grunt.option('reset') || false,
        stoponerror: false, 
        path:'logs/html/html-status.json',
        reportpath:'logs/html/html-report.json'
    },
    files: {
        src: ['src/ProjectIntroductionSite/*.html']
    }
},

        less: {
            ProjectIntroductionSite: {
                options: {
                    paths: ["assets/css"]
                },
                files: { "src/ProjectIntroductionSite/css/site.css": "src/ProjectIntroductionSite/css/less/site.less" }
            }
            
        },

	watch: {
		files: ["src/ProjectIntroductionSite/css/less/*.less",'src/ProjectIntroductionSite/*.html'],
		tasks: ['less','validation']
	}
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-validation');
    
    grunt.registerTask('default', ['less','validation']);
    // Travis CI task.
    grunt.registerTask('travis',  ['less','validation']);
};
