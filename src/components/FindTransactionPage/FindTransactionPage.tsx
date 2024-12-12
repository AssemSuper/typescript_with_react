// import { useState } from "react";
// import Search from "../Search/Search";
// import Transactions from "../Transactions/Transactions";
// import { useNavigate } from "react-router-dom";

// const FindTransactionPage =() => {
//     const [parentSearchTerm, setParentSearchTerm]=useState<string>('')
//     console.log("FindTransactionPage was invoked with", parentSearchTerm)
//     const navigate = useNavigate()
//     const applySearchTerm= (searchTerm:string):void=>{
//         console.log('parent search term was invoked')
//         setParentSearchTerm(searchTerm)
//         navigate(`/find/${searchTerm}`)
//     }
//     return(
//         <>
//             <Search parentSearchTerm={parentSearchTerm} setParentSearchTerm={applySearchTerm} />
//             <Transactions/>;
//         </>
//     );
// }
// export default FindTransactionPage




import { useState } from "react";
import Search from "../Search/Search"
import Transactions from "../Transactions/Transactions";
import { useNavigate } from "react-router-dom";

const FindTransactionPage = () => {

    const [parentSearchTerm, setParentSearchTerm] = useState<string>('')
    console.log('FindTransactionPage invoked with search term ' , parentSearchTerm)

    const navigate = useNavigate()
    
    const applySearchTerm = (searchTerm:string):void => {
        console.log('parent search term function invoked')
        setParentSearchTerm(searchTerm)
        navigate(`/find/${searchTerm}`)
    }

    return (
      <>
        <Search parentSearchTerm={parentSearchTerm} setParentSearchTerm={applySearchTerm}/>
        <Transactions  />
      </>
    );
}

export default FindTransactionPage