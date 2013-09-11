module.exports = function(grunt) {
	
	grunt.initConfig({
		clean: [
			'img',
			'css',
			'js'
		],
		
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
	        "css/site.css": ["dist/css/*.css"]
	      }
	    }
	  },
	  
	  uglify: {
	    my_target: {
	      files: {
	        'dist/js/scripts.min.js': ['build/js/scripts.js']
	      }
	    }
	  },
	  
	  watch: {
	    gruntfile: {
	      files: 'gruntfile.js',
	      tasks: [],
	    },
	    src: {
	      files: ['build/js/*.js', 'build/css/**/*.sass', 'bower_components/jquery/jquery.js', 'dist/assets/img'],
	      tasks: ['default'],
	    }
	  },
	  
		copy: {
		  main: {
		    files: [
		      {expand: true, cwd: 'vendor/bootstrap/css/', src: ['bootstrap.min.css', 'bootstrap-responsive.min.css'], dest: 'css/vendor/bootstrap/'},
		      {expand: true, cwd: 'vendor/bootstrap/js/', src: ['bootstrap.min.js'], dest: 'js/vendor/bootstrap/'},
		      {expand: true, cwd: 'vendor/jquery/', src: ['jquery.min.js'], dest: 'js/vendor/jquery/'},
		      {expand: true, cwd: 'dist/assets/img/', src: ['**/*'], dest: 'img'},
		      {expand: true, cwd: 'dist/js/', src: ['**/*'], dest: 'js'}
		    ]
		  }
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-mincss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  
	grunt.registerTask('default', ['uglify', 'clean', 'sass', 'mincss', 'copy', 'watch']);
};