const getUsers = () => {
    const userInvalid = 'johannes.henkie@gmail.com';
    const passInvalid = 'TestingDetox';
    const userValid1 = 'Tester@bitvavo.com';
    const passValid1 = 'BitcoinMiner1905';
 
    return {userInvalid, passInvalid, userValid1, passValid1};
 }

 const getDashboardNumber = () => {
     const number = '5901';

     return {number};
 }
 
 export { getUsers, getDashboardNumber }