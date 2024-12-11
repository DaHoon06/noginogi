'use client';

/**
 *
 * @param param0 @description error 페이지는 꼭 클라이언트 컴포넌트
 * @returns
 */
export default function Error({ error }: { error: Error }) {
  return (
    <main>
      <h1>ERROR !!</h1>
      <p>{error.message}</p>
    </main>
  );
}
