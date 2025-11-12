import PropTypes from 'prop-types';

import './toolbar.css';

export function ToolbarComponent(props) {
  return (
    <ul className='toolbar'>
      {props.filters.map((el) =>
          <li
            onClick={props.onSelectFilter}
            className={`toolbar-item ${props.selected === el ? 'toolbar-item_selected' : ''}`}
            key={el}
          >
            {el}
          </li>
        )
      }
    </ul>
  );
}

ToolbarComponent.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default ToolbarComponent;
