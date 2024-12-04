import styled from "@emotion/styled";
import {motion} from "framer-motion";

export const ModalLayout = styled(motion.dialog)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.54);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 9999;
  border: none;
  margin: 0;
`;

export const ModalBody = styled(motion.div)<{
  $showClose?: boolean;
  $maxWidth?: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $showClose }) =>
  $showClose ? "flex-start" : "center"};
  align-items: center;
  width: max-content;
  min-width: 500px;
  max-width: ${({ $maxWidth }) => $maxWidth || 800}px;
  min-height: 200px;
  height: auto;
  border-radius: 4px;
  box-shadow: 1px 10px 10px -4px rgba(0, 0, 0, 0.1);
  background-color: white;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ModalCloseButtonWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.8em 1em;
`;


export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 8px;
    border: 1px solid #f1f1f1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media screen and (max-width: 769px) {
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const ModalContentsBox = styled.div`
  width: 100%;
  height: auto;
`;