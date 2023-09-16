import Modal from 'react-modal';
import './Full-Bottom.css'
import WifiButton from '../Buttons/WifiButton';
import Airplane from '../Buttons/Airplane';
import Battery from '../Buttons/Battery';
import Bluethooth from '../Buttons/Bluethooth';
import Music from '../Buttons/Music';
import Notification from '../Buttons/Notification';
import Share from '../Buttons/Share';
import SOS from '../Buttons/SOS';
import Sound from '../Buttons/Sound';
import Images from '../ImagesScroll/Images';

export default function FullBottomSheet({ isOpen, onClose }) {
    return(
        <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Bottom Sheet"
      className="bottom-sheet-full"
    >
      <div className="bottom-sheet-full-content">
        <div className="buttons1">
          <WifiButton/>
          <Airplane/>
          <Battery/>
          <Bluethooth/>
          <Music/>
          <Notification/>
          <Share/>
          <SOS/>
          <Sound/>
          <Images/>
        </div>
        <div className="ImgFull">
        
        </div>
      </div>
      <button onClick={onClose} className="close-button">
      ↩
      </button>
    </Modal>
    
    )
}
