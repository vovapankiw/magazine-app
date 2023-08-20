import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => (
  <Helmet title={title ? `${title} | Volo Magazine` : undefined} defaultTitle="Volo Magazine">
    <meta name="description" content={description} />
  </Helmet>
);
