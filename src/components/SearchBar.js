import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateFilter } from './redux/filterSlice';
export const SearchBar = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(updateFilter(e.target.value))}
      />
    </div>
  );
};
