import React from "react";
import { BrowserRouter } from "react-router-dom";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <BrowserRouter
      exact
      path={`$(match.path)`}
      component={CollectionOverview}
    />
  </div>
);

export default ShopPage;
