module.exports = function (grunt) {
    grunt.initConfig({

       jshint: {
        all: [
        "Gruntfile.js",
        "src/**/*.js",
        "test/**/*.js",
        "!test/helpers/*.js"
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

        test:{
            src: ['src/**/*.js'],
            options: {
                outfile: 'logs/javascript/jasmine.html',               
                vendor: ['test/helpers/jquery-2.1.1.js','test/helpers/jasmine-jquery.js'],
                specs: 'test/**/*spec.js'
               
            }
        } 
},  

connect: {
  

    FeedTestSite: {
      options: {
        port: 9001,
        livereload: true,
        hostname:'localhost',
        base: 'src/FeedTestSite',
        open: true     
      }
    },

    ProjectIntroductionSite: {
      options: {
        port: 9000,
        livereload: true,
        hostname:'localhost',
        base: 'src/ProjectIntroductionSite',
        open: true     
      }
    }

  },
  
watch: {
    options: {
      livereload: true,
    },
    html: {
        files: ['src/**/*.html'],
        tasks: ['jshint', 'jasmine','validation',]
    },
    less: {
        files: ['src/**/*.less'],
        tasks: ['less']
    },

    js: {
        files: ['src/**/*.js','test/**/*.js'],
        tasks: ['jshint', 'jasmine'] 
    } ,
    grunt: {
        files: ['gruntfile.js'],
        tasks: ['jshint', 'jasmine','validation','less'] 
    } 
}

 
}); 


    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Unit Testing Task
    grunt.registerTask('default', ['jshint','jasmine','validation','less']);  

    // Unit Testing Task
    grunt.registerTask('server', ['connect:ProjectIntroductionSite','connect:FeedTestSite','watch']);  

    // Travis CI task.
    grunt.registerTask('travis',  ['jshint','connect', 'jasmine','validation','less']);

};
