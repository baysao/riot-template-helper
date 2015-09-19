Lets you easily include Riot components in Meteor templates. Pass the
component class through the `component` argument.

Examples:
Your riotjs tag component
```
<todo>
  <h3>{ opts.title }</h3>
  <ul>
    <li each={ data.books }>
      <label>
           { author }
           { name }
      </label>

    </li>
  </ul>
  <script>
    this.getMeteorData = function() {
      return {
        books: Books.find().fetch()
      };
    }
    this.mixin('RiotMeteorData');
  </script>
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

Check out the [Riot in Meteor guide](http://riot-in-meteor.readthedocs.org/en/latest/) to learn how to use Meteor and Riot
together to build awesome apps.
