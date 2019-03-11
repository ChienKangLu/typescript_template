# TypeScript Template
+ [Install Node.js](#Install-Node.js)
+ [Install local package](#Install-local-package)
+ [Install/uninstall/link/list global package](#Install/uninstall/link/list-global-package)
+ [Create project](#Create-project)

## Install Node.js
1. Install node.js
		https://nodejs.org/en/
## Install local package
1. Install and add to dependencies
	>```npm install --save```
2. Save the module as a development dependency (Instead of global modules)
	>```npm install --save-dev```
3. Install for typescript module locally
	>```npm install --save @types/mathjs```
## Install/uninstall/link/list global package
1. list global package
	>```npm list -g --depth 0```
2. Instal global
	>```npm install -g package-name```
3. Remove global
	>```npm uninstall -g package-name```
4. Use global modules locally (Not Recommanded, Global modules don't be listed as dependencies, even though the project depends on them.)
	>```npm link package-name```

## Create project
1. Create folder
2. Create package.json
	>```npm ini```
3. Install for module locally (typescript,express,body-parser,express-session)
	>```npm install --save-dev typescript```

	>```npm install --save express```

	>```npm install --save body-parser```

	>```npm install --save express-session```
4. Install types of module locally
	>```npm install --save-dev @types/typescript```

	>```npm install --save @types/express```

	>```npm install --save @types/body-parser```

	>```npm install --save @types/express-session```
5. Add tsc Path
	>```D:\data\NodejsProjects\typescript_template\node_modules```
6. Create tsconfig.json
	>```tsc –init```
7. Configure tsconfig.json and compile by tsc
	1. Configure tsconfig.json
		```json
		...
		"target": "es6",
		"outDir": "dist","rootDir": "src"
		...
		"include": ["src"],
		"exclude": []
		```
	2. Create src folder and delete.ts in src
	3. Compile .ts into .js
		>```tsc```
	4. Remove delete.ts and dist