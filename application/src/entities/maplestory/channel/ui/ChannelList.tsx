'use client';

import { ReactElement, useEffect, useState } from 'react';
import { channelCategoriesApi } from '../api';
import { ChannelButton } from './ChannelButton';
import { ChannelItemType } from '../typings';
import { Flex } from '@chakra-ui/react';

export const ChannelList = (): ReactElement => {
  const [channelList, setChannelList] = useState([]);

  useEffect(() => {
    channelCategoriesApi().then((res) => {
      console.log(res);
      setChannelList(res.data);
    });
  }, []);

  return (
    <Flex flexWrap={'wrap'} gap={1}>
      {channelList.map((item: ChannelItemType) => {
        return (
          <div key={item.channel_name}>
            <ChannelButton onClick={() => ({})} channelItem={item} />
          </div>
        );
      })}
    </Flex>
  );
};
