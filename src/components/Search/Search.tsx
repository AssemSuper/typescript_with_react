// import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
// import "./Search.css";
// type SearchProps ={parenSearchTerm:string, setParentSearchTerm:(value:string)=>void};
// const Search = (props:SearchProps): ReactElement => {
//   const [searchTerm, setSearchTerm] = useState<string>(props.parenSearchTerm);
//   const [valid, setValid] = useState<boolean>(false);
//   const [touched, setTouched] = useState<boolean>(false);
 
//   const doSearch = (event: FormEvent<HTMLElement>): void => {
//     event.preventDefault();
//     console.log(searchTerm);
//     if(valid){
//       props.setParentSearchTerm(searchTerm)
//     }
//   };
//   const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     setSearchTerm(event.target.value);
//     setTouched(true);
//     setValid(event.target.value.trim().length > 0);
//   };
//   return (
//     <div className="searchBox">
//       <form onSubmit={doSearch}>
//       <label htmlFor="orderId"> Order id:</label>
//       <input
//         id="orderId"
//         type="text"
//         value={searchTerm}
//         onChange={handleChange}
//         className={touched && !valid ? 'searchBoxError' : ''}
//       />
//       <button type="submit" onClick={doSearch}> Search </button>
//       </form>
//     </div>
//   );
// };
// export default Search;



import "./Search.css";
import { ChangeEvent, useState, FormEvent } from "react";

type SearchProps = { parentSearchTerm: string; setParentSearchTerm : (value:string)=>void};
const Search = (props:SearchProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>(props.parentSearchTerm);
  const [valid, setValid] = useState<boolean>(false)
  const [touched, setTouched] = useState<boolean>(false)

  const doSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(searchTerm);
    if (valid){
      props.setParentSearchTerm(searchTerm)
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.trim());
    setTouched(true)
    setValid(event.target.value.trim().length > 0)
  };

  return (
    <div className="searchBox">
      <form onSubmit={doSearch}>
        <label htmlFor="orderId">Order Id:</label>
        <input
          id="orderId"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className={touched && !valid?"searchBoxError":""}
        />
        {touched && !valid && <p>Search element should be longer than 0 characters</p>}
        <button type="submit" disabled={!valid}>Search</button>
      </form>
    </div>
  );
};

export default Search;

