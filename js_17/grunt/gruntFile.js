module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
		options: {
		  separator: ';',
		},
		dist: {
		  src: ['src/js/*.js'],
		  dest: 'dist/js/built.js',
		},  
	},
	cssmin: {
	  options: {
		mergeIntoShorthands: false,
		roundingPrecision: -1
	  },
	  target: {
		files: {
				'dist/css/output.css': ['src/scss/*.scss']
			}
		}
	},
		copy: {
	  main: {
		expand: true,
		cwd: 'src',
		src: '*.html',
		dest: 'dist/',
	  },
	},
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'cssmin', 'copy']);

};