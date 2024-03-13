
// 42-3 Set Layout And Make React Responsive

import profile from '../../../src/assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 p-4'>
            <h1 className='text-4xl font-extrabold text-center text-red-500'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;