#Guide to set up an automated workflow

##Repository

1. create a new repo on github
2. connect local and remote repo

  * create new local repo an touch
  * adjust readme file - [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
  * add [.gitignore file](https://help.github.com/articles/ignoring-files)

```
push README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:michaelzangerle/playground.git
git push -u origin master
```

  * ... or push an existing repo 

```
git remote add origin git@github.com:michaelzangerle/playground.git
git push -u origin master
```

## NPM

  * Install [npm](http://nodejs.org/) from here (included in nodejs)
  * or update existing npm 

```
 npm update npm -g
```

### package.json

* Create a package.json file with ```npm init```

```
{
    "name" : "Playground",
    "version" : "0.0.1",
    "author" : "Michael Zangerle",
    "private" : true,

    "devDependencies" : {
       ... 
    } 

    ...
}
```

* Install dependencies with with --save-dev flag to add them automaticalliy to the package.json (config follows later on)
* more info on [versions](https://npmjs.org/doc/misc/semver.html#Ranges)
* more info on [package.json](https://npmjs.org/doc/json.html)

```
npm install grunt --save-dev
```
**Maybe interesting**
  * [jshint](https://github.com/gruntjs/grunt-contrib-jshint)
  * [concat](https://github.com/gruntjs/grunt-contrib-concat)
  * [uglify](https://github.com/gruntjs/grunt-contrib-uglify)
  * [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
  * [watch](https://github.com/gruntjs/grunt-contrib-watch)
  * [html-validation](https://github.com/praveenvijayan/grunt-html-validation)
  * [compass](https://github.com/gruntjs/grunt-contrib-compass)
  * [requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)
  * [clean](https://github.com/gruntjs/grunt-contrib-clean)
  * [copy](https://github.com/gruntjs/grunt-contrib-copy)
  * [yuidoc](https://github.com/gruntjs/grunt-contrib-yuidoc)
  * ...

* Add node_modules direcotry to .gitignore

##Grunt and Gruntfile.js

* add a [gruntfile](http://gruntjs.com/getting-started#the-gruntfile) and configure tasks (look at Gruntfile.js)

```
module.exports = function(grunt) {

  // load all modules starting with "grunt-"
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', []);

};
```
###SCSS with compass

* get the ruby version manager (rvm) [on ubuntu](http://ryanbigg.com/2010/12/ubuntu-ruby-rvm-rails-and-you/)
* gem update --system
* gem install compass
* add grunt-contrib-compass

```
compass: {
    dev: {
        options: {
            sassDir: 'scss/',
            specify: 'scss/base.scss',
            cssDir: 'dist/',
            relativeAssets: false
        }
    }
}
```

##Bower

* Install bower
* run ```bower init```
* get libs/frameworks

```
bower install jquery --save-dev
```

##TODO
  * grunt-contrib-imageoptim
  * grunt-newer?
  * grunt-uncss?
