module.exports = function(grunt) {
	
	grunt.initConfig({
	  sass: {                              // Task
	    dist: {                            // Target
	      options: {                       // Target options
	        style: 'compressed',
	        lineNumbers: true,
	        cacheLocation: '.sass-cache'
	      },
	      files: {                         // Dictionary of files
	        'dist/css/base.css': 'build/css/sass/*.scss'
	      }
	    }
	  },
	  
	  mincss: {
	    compress: {
	      files: {
	        "public/cat/css/site.css": ["dist/css/*.css"]
	      }
	    }
	  },
	  
	  watch: {
	    gruntfile: {
	      files: 'gruntfile.js',
	      tasks: ['jshint:gruntfile'],
	    },
	    src: {
	      files: ['lib/*.js', 'build/css/**/*.scss', '!lib/dontwatch.js'],
	      tasks: ['default'],
	    }
	  }
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-mincss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  
	grunt.registerTask('default', ['sass', 'mincss', 'watch', 'clean', 'jshint']);
};