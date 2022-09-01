import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component<any, any, {}> {
  render(): React.ReactNode {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div>
        <b>{user.name}</b>
      </div>
    );
  }
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    users: state.users.find((user: any) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserHeader);
