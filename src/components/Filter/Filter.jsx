import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const searchTerm = e.target.value;
    dispatch(setFilter(searchTerm));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Type to search"
      />
    </label>
  );
};

export default Filter;
