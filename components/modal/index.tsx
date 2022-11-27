import ReactDOM from 'react-dom';
import { PropsWithChildren } from 'react';
import { ModalBox, Dimmed } from './style';
interface ModalProps {
  onClose: () => void;
}
const ModalBgDimed = (props: ModalProps) => {
  return <Dimmed onClick={props.onClose} />;
};
const Modal = (props: PropsWithChildren<ModalProps>) => {
  const modalElement = document.getElementById('modal');
  if (modalElement === null) {
    return <div></div>;
  } else {
    return (
      <>
        {ReactDOM.createPortal(
          <>
            <ModalBox>
              <div>{props.children}</div>
              <ModalBgDimed onClose={props.onClose}></ModalBgDimed>
            </ModalBox>
          </>,
          modalElement
        )}
      </>
    );
  }
};
export default Modal;
