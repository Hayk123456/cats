import React from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Wrapper from './components/Wrapper';
import CatBlock from './components/CatBlock';

function App() {
  const { cats, catsRequestStatus } = useSelector((store) => store.home);
  return (
    <Wrapper>

      <div className={catsRequestStatus === 'request' ? 'loading_block' : 'content'}>
        { catsRequestStatus === 'request'
          ? <ClipLoader color="#006000" size={60} /> : null }
        {
          // eslint-disable-next-line no-nested-ternary
          cats.length ? cats.map((cat) => (
            <CatBlock data={cat} key={cat.id} />
          )) : catsRequestStatus !== 'request'
            ? <p className="def_text">Please select Category</p> : null
        }
      </div>

    </Wrapper>
  );
}

export default App;
