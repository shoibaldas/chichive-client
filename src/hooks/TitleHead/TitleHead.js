import React, { useEffect } from 'react';

const TitleHead = title => {
    useEffect(() => {
        document.title = `${title}`;
    },[title])
};

export default TitleHead;
