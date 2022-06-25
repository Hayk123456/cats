import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getCatsRequest } from '../store/actions/home';

function LeftCategoriesMenu({ categories }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeId = new URLSearchParams(window.location.search).get('category');

  const handleClick = (id) => {
    navigate(`/?category=${id}`, { replace: true });
    dispatch(getCatsRequest({ id, page: 1 }));
  };

  return (
    <aside className="categories_menu">
      {
        categories.map((c) => (
          <button
            className={+activeId === +c.id ? 'active' : ''}
            onClick={() => handleClick(c.id)}
            key={c.id}
            type="button"
          >
            {c.name}
          </button>
        ))
      }
    </aside>
  );
}

LeftCategoriesMenu.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default LeftCategoriesMenu;
