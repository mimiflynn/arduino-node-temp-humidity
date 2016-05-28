var React = require('react');
// var render = require('react-dom').render;
var render = React.render;
var RecipeApp = require('./recipes/components/RecipeBook');
var RecipeForm = require('./recipes/components/RecipeForm');

render(
  <RecipeApp />,
  document.getElementById('recipe-app')
);

render(
  <RecipeForm csrf_token={ window.csrf } />,
  document.getElementById('recipe-add')
);
