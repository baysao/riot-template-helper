Lets you easily include Riot components in Meteor templates. Pass the
component class through the `component` argument.

[Demo](http://simple-todos-riot-meteor-data.meteor.com/)
[Code](https://github.com/baysao/simple-todos-riot-meteor-data.git)

Examples:
Your riotjs tag component

```
<todo>
  <h3>{ opts.title }</h3>
  <h3>{ opts.books }</h3>
</todo>
```
```html
<template name="Home">
 {{#if Template.subscriptionsReady}}
  <div>
      {{> Riot component="todo" title="Hello papa" books=books}}
    </div>
  {{else}}
    <div class="loading">Loading ... </div>
  {{/if}}
</template>
```

```js
Template['Home'].rendered = function(){
    var instance = this;
  instance.subscribe('books');
  
}
Template['Home'].helpers({
  books: function(){
    return 'books';
  }
})
```
