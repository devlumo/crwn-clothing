import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/CollectionItem";

const Collection = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection">
      <h2>collection page</h2>
    </div>
  );
};

const mapStateToPops = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToPops)(Collection);
