let React       = require('react');
let mui         = require('material-ui');
let RosterStore = require('../stores/roster');
let Actions     = require('../actions');

let ListItem = mui.ListItem;
let Avatar   = mui.Avatar;

let RosterItem = React.createClass({

  render () {
    let user   = RosterStore.extractDisplayData(this.props.user);
    let avatar = <Avatar>{user.initial}</Avatar>;

    if (user.photo !== '') {
      avatar = <Avatar src={user.photo} />;
    }

    return (
      <ListItem leftAvatar={avatar} primaryText={user.name} secondaryText={user.status} onClick={Actions.openChat.bind(this, user.jid)}/>
    );
  },

});

module.exports = RosterItem;