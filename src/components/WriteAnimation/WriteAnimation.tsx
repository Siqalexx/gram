import { cn } from '@bem-react/classname';
import React, { FC } from 'react';
import './WriteAnimation.scss';
interface WriteAnimationProps {
    text: string;
}

const WriteAnimation: FC<WriteAnimationProps> = ({ text }) => {
    const animationClass = cn('Animation');
    return (
        <div className={animationClass()}>
            <div className={animationClass('Dots')}>
                <span
                    className={animationClass('Dots', {
                        circle1: true,
                    })}
                ></span>
                <span
                    className={animationClass('Dots', {
                        circle2: true,
                    })}
                ></span>
                <span
                    className={animationClass('Dots', {
                        circle3: true,
                    })}
                ></span>
            </div>
            <p className={animationClass('Text')}>{text}</p>
        </div>
    );
};

export default WriteAnimation;
