var React = require('react');
var Dom = require('react-dom/server');

var DefaultLayout = require('../layouts/default');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    isAuthenticated: React.PropTypes.bool,
    user: React.PropTypes.object,
    content: React.PropTypes.string,
    scripts: React.PropTypes.array,
    data: React.PropTypes.array,
    csrf_token: React.PropTypes.string
  },
  loggedInGreeting: function () {
    return this.props.user.name;
  },
  guestGreeting: function () {
    return (
      <span>
        <a href="/login">log in</a> or <a href="/signup">sign up</a>
      </span>
    );
  },
  render: function () {
    var greeting = this.props.isAuthenticated ? this.loggedInGreeting() : this.guestGreeting();
    var reactHtml = Dom.renderToString(<List data={ this.props.data } />);
    var data = 'window.data = ' + JSON.stringify(this.props.data) + '';
    return (
      <DefaultLayout title={ this.props.title } scripts={ this.props.scripts } isAuthenticated={ this.props.isAuthenticated } user={ this.props.user }>
        <script dangerouslySetInnerHTML={{__html: data}} />
        <section>
          <h2>Welcome, { greeting }!</h2>
        </section>
        <section>
          { this.props.content }
        </section>
        <section id="app" dangerouslySetInnerHTML={{__html: reactHtml}} />
        { (this.props.isAuthenticated) ? this.renderNewRecipeForm() : ''}
      </DefaultLayout>
    );
  }
});

