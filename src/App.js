import { useEffect, useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import './card.css';
import LibraryCard from './components/librarycard.js';

const MAX_LIBRARY_SIZE = 15;

function App() {
  const [sizes, setSizes] = useState([
    150,
    '30%'
  ]);

  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=2&limit=${MAX_LIBRARY_SIZE}`)
      .then(response => response.json())
      .then(data => {
        setImageData(data);
      });
  }, []);

  const imageArray = imageData.map((image, index) => {
    return (
      <LibraryCard key={index} image={image.download_url} index={index}/>
    )
  });

  return (
    <div style={{ height: '50em' }}>

      <SplitPane
        split='vertical'
        sizes={sizes}
        onChange={setSizes}
      >
        <Pane minSize={'12%'} maxSize='40%'>
          <div style={{ height: '30%' }} className='background-card'>
            pane1
          </div>
          <div style={{ height: '70%', marginTop: '5px', overflow: 'scroll', flexDirection: 'column', overflowX: 'hidden' }} className='background-card'>
            <p style={{ marginLeft: "8px" }}>
              Your Library
            </p>
            <ul>
              {imageArray}</ul>
          </div>
        </Pane>
        <div style={{ height: '100%' }} className='background-card'>
          pane3
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
// git remote add origin https://github.com/tapanmeena/React-Demos.git
// git branch -M main
// git push -u origin main