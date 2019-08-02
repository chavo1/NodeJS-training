# This repo contains Vagrant project with a simple Web "Hello World" app with Ember CLI

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Ember CLI](https://ember-cli.com/)

## Clone the repo
```
git clone https://github.com/chavo1/vagrant-emberjs.git
cd vagrant-emberjs
vagrant up
```
### Setup ember hello world

```
vagrant ssh
sudo su -
```
#### Create an Ember project
```
ember new hello-world
```
#### Change the file "hello-world/app/templates/application.hbs" as follow:
```
<h1>Hello World</h1>

{{outlet}}
```
#### Archive the project directory
```
zip -r /vagrant/ember/hello-world.zip hello-world
cd hello-world
```
#### Just start Ember and click on the link that will appear or open a web browser and access http://localhost:4200:
```
ember serve
```
#### If you have an existing project in ember directory it will start after:
```
vagrant up
```
