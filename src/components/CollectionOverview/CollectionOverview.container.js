import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching } from '../../Redux/shop/shop.selectors';
import CollectionOverview from './CollectionOverview';
import WithSpinner from '../WithSpinner/WithSpinner';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
