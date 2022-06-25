import React from 'react';
import PropTypes from 'prop-types';

function CatBlock({ data }) {
  return (
    <div className="cat">
      <img src={data.url} alt="" />
    </div>
  );
}

CatBlock.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CatBlock;
