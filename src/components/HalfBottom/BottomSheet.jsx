import Modal from 'react-modal';
import WifiButton from '../Buttons/WifiButton';
import Airplane from '../Buttons/Airplane'
import SOS from '../Buttons/SOS'
import Battery from '../Buttons/Battery'

export default function BottomSheet({ isOpen, onClose }){
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}s
      contentLabel="Bottom Sheet"
      className="bottom-sheet" 
    >
      <h2 className='header'></h2>
      <div className="bottom-sheet-content">
        <div className="buttons">
          <WifiButton/>
          <Airplane/>
          <SOS/>
          <Battery/>
        </div>
      </div>
      <button onClick={onClose} className="close-button">
      ↩
      </button>
    </Modal>
    
  );
}




