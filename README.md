# Shopping list

Shopping list to keep track of your items in your basket

# Created with

1. React
2. Redux toolkit
3. SCSS

# How to set up:

Install dependencies:

```bash
 cd .\shopping-list\
 npm install
```

Install SASS-Compiler:

```bash
npm install -g sass
```

Watch for SCSS files:

```bash
sass --watch src/sass:src/css
```

Start the server:

```bash
 cd .\shopping-list\
```

```bash
npm start
```

# Troubleshooting

If you get the following error message:

```bash
sass : File C:\Users\xxx\AppData\Roaming\npm\sass.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
```

you can run the following command in the Windows PowerShell to fix it:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```
