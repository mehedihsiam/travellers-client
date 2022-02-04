import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import UserModal from './UserModal/UserModal';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            />
            {
                isOpen && <UserModal/>
            }
        </div>
    );
};

export default Home;