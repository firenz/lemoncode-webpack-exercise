const React = require("react");
const ReactDOM =  require("react-dom");
const classes = require('../sass/style.scss');

ReactDOM.render(
  <p className={classes.reactFooter}>
    Footer provided by React DOM, made by{" "}
    <a href="mailto:alicia.guardenoalbertos@gmail.com">Alicia G.</a>
  </p>,
  document.getElementById("react-footer")
);
