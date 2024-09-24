import Head from "next/head";

const MetaHead = () => {
  return (
    <Head>
      <title>노기노기</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=0"
      />
      <meta httpEquiv="Subject" content="노기노기" />
      <meta httpEquiv="Title" content="노기노기" />
      <meta httpEquiv="Author" content="dahoon06" />
      <meta httpEquiv="Other Agent" content="노기노기" />
      <meta httpEquiv="Copyright" content="dahoon06" />
      <meta httpEquiv="Distribution" content="노기노기" />
      <meta
        name="keywords"
        content="노기노기, 마비노기"
      />
      <meta name="description" content={"마비노기 놀이터"} />
      <meta httpEquiv="Imagetoolbar" content="no" />
      <meta
        httpEquiv="Page-Enter"
        content="revealtrans(Duration=1,Transition=12)"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-web-app-capable" content="yes" />

      <meta name="color-scheme" content="dark light" />
      <meta
        name={"theme-color"}
        content={"#fff"}
        media={"(prefers-color-scheme: light)"}
      />
      <meta
        name={"theme-color"}
        content={"#fff"}
        media={"(prefers-color-scheme: dark)"}
      />
    </Head>
  );
};

export default MetaHead;
