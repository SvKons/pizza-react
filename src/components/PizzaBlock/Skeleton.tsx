import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => (
    <ContentLoader className="pizza-block" speed={2} width={280} height={500} viewBox="0 0 280 500" backgroundColor="#b0b0b0" foregroundColor="#8f8f8f">
        <circle cx="136" cy="136" r="125" />
        <rect x="0" y="280" rx="10" ry="10" width="280" height="29" />
        <rect x="0" y="324" rx="10" ry="10" width="280" height="73" />
        <rect x="2" y="416" rx="10" ry="10" width="85" height="30" />
        <rect x="111" y="413" rx="20" ry="20" width="169" height="37" />
    </ContentLoader>
);

export default Skeleton;
