import style from './Pagination.module.scss'
const Pagination = (props) => {

  const {test} = props
  return (
    <div className={style.container}>
      <ul>
      {test.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
};

export default Pagination;