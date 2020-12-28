import React, { Suspense } from 'react';

const ComponentLazyLoad = React.lazy(() => import('../components/ComponentLazyLoad'));

const PageWithLazyComponent = () => {

    return (
        <div>
            <h1>Componente com lazy load</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <ComponentLazyLoad />
            </Suspense>
        </div>
    )
}

export default PageWithLazyComponent;