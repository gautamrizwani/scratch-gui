import React from 'react';
import ReactModal from 'react-modal';
import Box from '../box/box.jsx';
import styles from './task6-modal.css';

const task6Modal = () => (
    <ReactModal
        isOpen
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
    >
        <div>
            <Box className={styles.body}>
                <h1>Welcome</h1>
                <p>
                    Meow, meow meow meow meow!
                </p>
                <Box className={styles.buttonRow}>
                    <button>
                        Ok
                    </button>                    
                </Box>
                <Box className={styles.buttonRow}>
                    <button>
                        Close
                    </button>
                </Box>
            </Box>
        </div>
    </ReactModal>
);

export default task6Modal;
