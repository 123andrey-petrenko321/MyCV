import React from 'react';
import s from './Progress.module.css';

const Progress = ({ done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <div className={s.progress}>
            <div className={s.progress_done} style={style}>
                {done}%
                </div>
        </div>
    )
}

export default Progress;