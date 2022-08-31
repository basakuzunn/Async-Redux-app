import React from 'react';

class UserHeader extends React.Component {
  props!: {
    userId?: number;
  };
  render(): React.ReactNode {
    return <div>User Header</div>;
  }
}

export default UserHeader;
