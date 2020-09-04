import React from 'react';
import logo from './logo.svg';
import './App.css';
import './media/audio-file1.mp3'
import MyPlayer from './components/MyPlayer'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <h1>My Music player</h1>
      <Navigation/>
      <MyPlayer
        urls={[
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
           'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        ]}
      />
      	{/* <div> 



        <figure>
            <figcaption>Listen</figcaption>
            <audio
                controls
                src="./media/audio-file1.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
        </figure>
    
	</div>  */}

    </div>
  );
}

export default App;
