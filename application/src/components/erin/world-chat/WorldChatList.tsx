import styled from "styled-components";
import {useWorldChatInfinityScroll, useWorldChatQuery} from "@state/queries/hooks/useWorldChatQuery";
import {useIntersectionObserver} from "../../../hooks/useIntersectionObserver";
import {Fragment} from "react";

const WorldChatListLayout = styled.div`
    max-height: 400px;
    overflow-y: auto;
`;

export const WorldChatList = () => {
  const worldChatQuery = useWorldChatQuery('류트');
  const {fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    data: wordChatScrollLists,
    isLoading: wordChatIsLoading,} = useWorldChatInfinityScroll(10, worldChatQuery?.data || []);

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (
    worldChatQuery?.isLoading && wordChatIsLoading
  ) {
    return null;
  }


  return (
    <WorldChatListLayout>
      {wordChatScrollLists?.pages.map((v, index) => {
        return (
          <Fragment key={`row_${index}`}>
            {v.map((vv, idx) => {
              return (
                <div key={`${idx}_TEST`}>
                  {index} page
                  <p>{vv.character_name}</p>
                  <p>{vv.message}</p>
                  <p>{vv.data_send}</p>
                </div>
              )
            })}
          </Fragment>
        )
      })}
      {isFetchingNextPage ? (
        <div>스피너</div>
      ) : (
        <div ref={setTarget} style={{ height: "1px" }} />
      )}
    </WorldChatListLayout>
  )
}
