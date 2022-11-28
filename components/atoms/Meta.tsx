type MetaType = {
  title: string;
  type?: string;
  description?: string;
  robots?: string;
  imageUrl?: string;
  imageWidth?: string;
  imageHeight?: string;
  children?: any;
};

const Meta = ({
  title,
  type = "website",
  description = "description",
  robots = "index,follow",
  imageUrl,
  imageWidth,
  imageHeight,
  children,
}: MetaType) => {
  const siteName = "サイト名";
  if (title === undefined) {
    title = siteName;
  } else {
    title = `${title} - ${siteName}`;
  }
  const width = imageWidth ? imageWidth : 800;
  const height = imageHeight ? imageHeight : 600;
  const url = process.browser ? location.href : "";
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
      />
      <meta name="robots" content={robots} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta property="og:type" content={type} />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : ""}
      {imageUrl ? (
        <meta property="og:image:width" content={String(width)} />
      ) : (
        ""
      )}
      {imageUrl ? (
        <meta property="og:image:height" content={String(height)} />
      ) : (
        ""
      )}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={url} />
      {children}
    </>
  );
};

export default Meta;
