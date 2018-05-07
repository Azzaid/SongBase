/**
 * Created by Johanas on 06.05.2018.
 */
import React from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';

class SortableTableHeader extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    
    const {order, sortedBy, columns, sortData} = this.props;
    
    return (
      <TableHead>
        <TableRow>
          {columns.map(column => {
            return (
              <TableCell
                key={column.id}
                padding={column.disablePadding ? 'none' : 'default'}
              >
                <Tooltip
                  title="Sort"
                  placement={column.alignTooltipToLeft ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                <TableSortLabel
                  active={sortedBy === column.id}
                  direction={order}
                  onClick={()=>{sortData(column.id)}}
                >
                {column.label}
                </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
    );
  }
};

export default SortableTableHeader