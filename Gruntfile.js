'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.initConfig({
		clean: ['dist/styles'],
		sass: {
			dist: {
				options: {
					'style': 'expanded'
				},
				files: {
					'dist/styles.css': 'assets/styles/styles.scss'
				}
			}
		},
		watch: {
			files: ['assets/styles/**/*.scss'],
			tasks: ['clean', 'sass']
		}
	});	

	grunt.registerTask('default', ['watch']);
};