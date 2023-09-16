import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import BottomSheet from './components/HalfBottom/BottomSheet';
import './App.css';
import FullBottomSheet from './components/FullBottom/FullBottomSheet';

function App() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isBottomSheetFullOpen, setIsBottomSheetFullOpen] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
    setIsBottomSheetFullOpen(false); // Close the full-bottom sheet
  };

  const openBottomSheetFullOpen = () => {
    setIsBottomSheetOpen(false); // Close the half-bottom sheet
    setIsBottomSheetFullOpen(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const closeBottomSheetFull = () => {
    setIsBottomSheetFullOpen(false);
  };

  // Define springs for animations
  const bottomSheetSpring = useSpring({
    height: isBottomSheetOpen ? '100%' : '0%',
  });

  const fullBottomSheetSpring = useSpring({
    height: isBottomSheetFullOpen ? '100%' : '0%',
  });

  return (
    <div className="App">
      <h1>Bottom Sheet App</h1>
      <div className="flex">
        <button onClick={openBottomSheet} className="open-button">
          Half-open Bottom Sheet
        </button>
        <button onClick={openBottomSheetFullOpen} className="open-button">
          Fully open Bottom Sheet
        </button>
      </div>
      <animated.div className="Edge" style={bottomSheetSpring}>
        <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet} />
      </animated.div>
      <animated.div style={fullBottomSheetSpring}>
        <FullBottomSheet isOpen={isBottomSheetFullOpen} onClose={closeBottomSheetFull} />
      </animated.div>
    </div>
  );
}

export default App;
