# GUIDE

# Requirements

Requirements for developing hoodie is a non-windows machine, because I ran into problems trying to do it in Windows.
I managed to get it working just by getting rid of the hoodie-cli global package, as that is blocking the hoodie name also used by this release. Type this if you installed hoodie-cli on a global scale```npm -g uninstall hoodie-cli```else just omit the -g. 
You'll need

`node >= version 4`
`npm >= version 3`

# Initialize it

First off, you want to have an empty directory to initialize your project in, then run 
```npm init```
This will prompt you for some things to fill in. It's okay to enter a name and skip the rest for now. This creates your package.json.
You can look at the package.json of the hoodie-app-tracker application to see what else can fit in there.
But you don't need a full package.json yet. Still, there is one thing that you need to have in there.

First and foremost, you will need to add the hoodie#tent branch as a dependency.
Just below of license, you'll need to paste this:

# Dependencies

```
"dependencies": {
    "hoodie": "git://github.com/hoodiehq/hoodie#tent"
  }
```

Don't forget the comma behind license, since we're dealing with a [json](http://json-schema.org/example1.html) file.

# Hoodie to the start

Open your `package.json` and replace your `script`statement with this:
``` 
"scripts": {
    "start": "hoodie"
  },
```

And we're read to go. Run `npm install` to install the dependency and `npm start` to start your hoodie server.

# Just like frontend development

We can now create a `public` directory in our root dir. Then we can proceed to start our project just like we would start a usual frontend project.
Create a `index.html` and create an `assets` folder which will hold our css and js.

# Don't forget hoodie.

There is one thing we still need to do to access hoodie inside our `assets/js/app.js`. We will need to include the `hoodie/client.js` script in our `index.html`

```
<script type="text/javascript" src="hoodie/client.js"></script>
```
