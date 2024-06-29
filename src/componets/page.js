import Head from "next/head";

function Page({ title, description, children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/icon.png" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </div>
  );
}
export default Page;
