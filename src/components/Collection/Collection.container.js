import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionLoaded } from '../../Redux/shop/shop.selectors';
import Collection from './Collection';
import WithSpinner from '../WithSpinner/WithSpinner';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
