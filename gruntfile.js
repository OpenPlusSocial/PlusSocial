module.exports = function (grunt) {
    grunt.initConfig({

     jshint: {
        all: [
        "Gruntfile.js",
        "src/**/*.js",
        "test/**/*.js"
        ],
        options: {
          jshintrc: '.jshintrc'
      },
  },

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

jasmine: {
    src: ['src/**/*.js'],
    options: {
        outfile: 'logs/javascript/jasmine.html',
        host: 'http://127.0.0.1:8000/',
        specs: 'test/**/*spec.js'
    } 
},  

connect: {
    test: {
        port: 8000
    }
},

watch: {
 less: {
        files: ['src/**/*.less'],
        tasks: ['less']
    },

    js: {
        files: ['gruntfile.js','src/**/*.js','test/**/*.js'],
        tasks: ['jshint','connect', 'jasmine']
    } 
}
}); 
 
 

grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch'); 
grunt.loadNpmTasks('grunt-html-validation');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-jasmine');


// Unit Testing Task
grunt.registerTask('default', ['jshint','connect', 'jasmine','validation','less']); 

// Travis CI task.
grunt.registerTask('travis',  ['jshint','connect', 'jasmine','validation','less']);
};
