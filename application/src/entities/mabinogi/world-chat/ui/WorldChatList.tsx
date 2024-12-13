import {
  useWorldChatInfinityScroll,
  useWorldChatQuery,
} from '@shared/state/queries/hooks/useWorldChatQuery';
import { useIntersectionObserver } from '@shared/hooks/useIntersectionObserver';
import { Fragment, useState } from 'react';
import { SelectBox } from '@shared/ui/boxes';
import { queryClient } from '@shared/lib/tanstack';
import styled from '@emotion/styled';
import { queryKeys } from '@shared/state/queries/key';

const WorldChatListLayout = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  div {
    margin-bottom: 12px;
    padding: 12px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #333;

    &:first-child {
      font-weight: bold;
      color: #0077cc;
      margin-bottom: 4px;
    }

    &:nth-child(2) {
      margin-bottom: 6px;
    }

    &:last-child {
      font-size: 12px;
      color: #888;
    }
  }
`;

const OPTIONS = [
  { value: '류트', label: '류트' },
  { value: '만돌린', label: '만돌린' },
  { value: '하프', label: '하프' },
  { value: '울프', label: '울프' },
];

export const WorldChatList = () => {
  const [channel, setChannel] = useState(OPTIONS[0].value);
  const worldChatQuery = useWorldChatQuery(channel);
  const {
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    data: wordChatScrollLists,
    isLoading: wordChatIsLoading,
  } = useWorldChatInfinityScroll(10, worldChatQuery?.data || []);

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (worldChatQuery?.isLoading && wordChatIsLoading) {
    return null;
  }

  const handleChangeSelectBox = async (value: any) => {
    setChannel(value.value);
    await queryClient.invalidateQueries({
      queryKey: [queryKeys.wordChatKeys.hornBugleInfinityScrollList],
    });
  };

  return (
    <div>
      <SelectBox
        value={channel}
        options={OPTIONS}
        onChange={handleChangeSelectBox}
      />

      <WorldChatListLayout>
        {wordChatScrollLists?.pages.map((v, index) => {
          return (
            <Fragment key={`row_${index}`}>
              {v.map((vv, idx) => {
                return (
                  <div key={`${idx}_TEST`}>
                    <p>{vv.character_name}</p>
                    <p>{vv.message}</p>
                    <p>{new Date(vv.date_send).toString()}</p>
                  </div>
                );
              })}
            </Fragment>
          );
        })}
        {isFetchingNextPage ? (
          <div>스피너</div>
        ) : (
          <div ref={setTarget} style={{ height: '1px' }} />
        )}
      </WorldChatListLayout>
    </div>
  );
};
