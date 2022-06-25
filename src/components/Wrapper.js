import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Header from './Header';
import LeftCategoriesMenu from './LeftCategoriesMenu';
import { getCategoriesRequest, getCatsRequest } from '../store/actions/home';

function Wrapper({ children }) {
  const dispatch = useDispatch();
  const id = new URLSearchParams(window.location.search).get('category');
  const { categories, cats } = useSelector((store) => store.home);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (_.isEmpty(categories)) {
      dispatch(getCategoriesRequest());
    }
  }, []);

  useEffect(() => {
    if ((_.isEmpty(cats) && id) || page !== 1) {
      dispatch(getCatsRequest({ id, page }));
    }
  }, [page]);

  return (
    <>
      <Header />

      <div className="wrapper_content">

        <LeftCategoriesMenu categories={categories} />

        {children}

      </div>

      {
        id ? (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="see_more_btn"
            type="button"
          >
            See More
          </button>
        ) : null
      }
    </>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
