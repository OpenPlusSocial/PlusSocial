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
        host: 'http://127.0.0.1:8001/',
        specs: 'test/**/*spec.js'
    } 
},  

connect: {
  
    test: {
      options: {
        port: 8001,
        base: ''
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
        tasks: ['validation']
    },
    less: {
        files: ['src/**/*.less'],
        tasks: ['less']
    },

    js: {
        files: ['src/**/*.js','test/**/*.js'],
        tasks: ['jshint','connect:test', 'jasmine'] 
    } ,
    grunt: {
        files: ['gruntfile.js'],
        tasks: ['jshint','connect:test', 'jasmine','validation','less'] 
    } 
}

 
}); 


    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Unit Testing Task
    grunt.registerTask('default', ['jshint','connect:test', 'jasmine','validation','less']);  

    // Unit Testing Task
    grunt.registerTask('server', ['connect:ProjectIntroductionSite','watch']);  

    // Travis CI task.
    grunt.registerTask('travis',  ['jshint','connect', 'jasmine','validation','less']);

};
