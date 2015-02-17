module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['src/*.js', 'test/*.js'],
    },
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
      }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jasmine_node', 'jshint']);
  grunt.registerTask('test', ['jasmine_node']);
  grunt.registerTask('hint', ['jshint']);


};