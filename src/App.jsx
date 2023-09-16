import { useState } from 'react';
import BottomSheet from './components/HalfBottom/BottomSheet';
import './App.css';
import FullBottomSheet from './components/FullBottom/FullBottomSheet';


function App() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isBottomSheetFullOpen, setIsBottomSheetFullOpen] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };
  const openBottomSheetFullOpen = () => {
    setIsBottomSheetFullOpen(true);
  };
  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };
  const closeBottomSheetFull = () => {
    setIsBottomSheetFullOpen(false);
  };

  return (
    <div className="App">
      <h1>Bottom Sheet App</h1>
      <div className="flex">
      <button onClick={openBottomSheet} className="open-button">
      half-open Bottom Sheet
      </button>
      <button onClick={openBottomSheetFullOpen} className="open-button">
      fully open Bottom Sheet
      </button>
      </div>
      <BottomSheet className="Edge" isOpen={isBottomSheetOpen} onClose={closeBottomSheet} />
      <FullBottomSheet isOpen={isBottomSheetFullOpen} onClose={closeBottomSheetFull}/>
    </div>
  );
}
export default App