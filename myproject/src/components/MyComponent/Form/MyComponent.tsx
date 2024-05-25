
import React, { useState, useEffect } from 'react';
import './MyComponent.css';

interface MyComponentProps {
    // define props here
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
    const [state, setState] = useState<string>("");

    useEffect(() => {
        setState("Welcome to my component");
    }, []);

    return (
        <div className="mycomponent">
            <h1>{state}</h1>
        </div>
    );
};

export default MyComponent;
