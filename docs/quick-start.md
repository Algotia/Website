
# Quick Start Guide

### Requirements
  - Node.js
  - Windows/Linux/MacOS/Docker
 
### Install Algotia

From your console, run the following command

```bash 
 $ git clone https://github.com/Algotia/Algotia.git
```


Change directories into `Algotia` and create a configuration file. Algotia
searches the root of the project for a file named `config.yaml`, we recommend
you put it in a directory named `config`.  

```bash 
 $ cd Algotia
 $ mkdir config
 $ touch ./config/config.yaml
```
Install the dependencies

```bash
 $ npm install
```

Link the bin script to local /bin/

```bash
 $ npm link
```

From inside the project directory, you can now run Algotia.

```bash
 $ algotia [command] [options]
``
