#Guide to set up an automated workflow

##Repository

1. create a new repo on github
2. 

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

## package.json

1. Create a package.json file with following structure

```
{
    "name" : "Playground",
    "version" : "0.0.1",
    "author" : "Michael Zangerle",
    "private" : true,

    "devDependencies" : {
        
    } 
}
```

2. Install dependencies with with --save-dev flag to add them automaticalliy to the package.json

```
npm install grunt --save-dev
```

3. Add node_modules direcotry to .gitignore