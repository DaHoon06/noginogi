'use client';

import { ReactElement } from 'react';
import styled from '@emotion/styled';
import { ChannelItemType } from '../typings';

const ChannelButtonContainer = styled.div`
  display: inline-block;
  width: fit-content;
  padding: 0.25rem 0.825rem;
  border: 1px solid #ccc;
  border-radius: 50px;
  background-color: #ededed;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0.8rem;
  }
`;

interface ChannelButtonProps {
  onClick: (channel_name: string) => void;
  channelItem: ChannelItemType;
}

export const ChannelButton = (props: ChannelButtonProps): ReactElement => {
  const { channelItem, onClick } = props;
  return (
    <ChannelButtonContainer>
      <button onClick={() => onClick(channelItem.channel_name)}>
        <img
          width={14}
          height={14}
          src={channelItem.icon}
          alt={channelItem.channel_value}
        />
        {channelItem.channel_name}
      </button>
    </ChannelButtonContainer>
  );
};
