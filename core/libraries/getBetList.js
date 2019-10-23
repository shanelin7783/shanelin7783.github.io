// export const getBetList = (itemList, multiple) => {
//     return itemList
//         .keySeq()
//         .toArray()
//         .reduce((prev, curr) => {
//             const {bet_type, bet_detail} = itemList.get(curr);
//             prev.push({
//                 bet_type,
//                 bet_detail,
//                 multiple,
//                 bet_amount: 1,
//             });
//             return prev;
//         }, []);
// };
