import React, { ReactElement, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import * as Base from './styles/BaseModal.styled';


interface FadeModalProps {
  isOpen: boolean;
  showClose?: boolean;
  outClickEvent?: (e: React.MouseEvent) => void;
  onCloseModal: () => void;
  outClick?: boolean;
  ele: any;
  maxWidth?: number;
  children: ReactNode;
}

export const FadeModal = (props: FadeModalProps): ReactElement => {
  const { isOpen, showClose, outClick = true, ele, maxWidth, children } = props;
  const { onCloseModal, outClickEvent } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <Base.ModalLayout
          key={"fade-modal"}
          onClick={outClick ? outClickEvent : () => {}}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Base.ModalContainer>
            <Base.ModalBody ref={ele} $showClose={showClose} $maxWidth={maxWidth}>
              {!!showClose && (
                <Base.ModalCloseButtonWrapper>
                  <button
                    type={"button"}
                    aria-label={"modal-close-button"}
                    onClick={onCloseModal}
                  >
                    X
                  </button>
                </Base.ModalCloseButtonWrapper>
              )}
              <Base.ModalContentsBox ref={ele}>{children}</Base.ModalContentsBox>
            </Base.ModalBody>
          </Base.ModalContainer>
        </Base.ModalLayout>
      )}
    </AnimatePresence>
  );
};
