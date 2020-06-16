import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../Redux/shop/shopActions';
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverview.container';
import CollectionContainer from '../../components/Collection/Collection.container';

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCollectionsStart,
};
export default connect(null, mapDispatchToProps)(Shop);
