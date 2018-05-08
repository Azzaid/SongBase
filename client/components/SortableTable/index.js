/**
 * Created by Johanas on 06.05.2018.
 */
import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import SortableTableHeader from './header';

class SortableTable extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      order: 'asc',
      sortedBy: "none",
      page: 0,
      rowsPerPage: 5,
    };
  }
  
  sortData = (columnId) => {
    const sortedBy = columnId;
    let order = 'desc';
    
    if (this.state.sortedBy === columnId && this.state.order === 'desc') {
      order = 'asc';
    }
    
    if (this.props.data.length > 0) {
      const data =
        order === 'desc'
          ? this.props.data.sort((a, b) => (b[sortedBy] < a[sortedBy] ? -1 : 1))
          : this.props.data.sort((a, b) => (a[sortedBy] < b[sortedBy] ? -1 : 1));
      this.setState({ data, order, sortedBy });
    } else {
      this.setState({order, sortedBy});
    }
  };
  
  changePage = (page) => {
    this.setState({ page });
  };
  
  changeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  
  render() {
      let data = this.props.data;
      const {order, sortedBy, rowsPerPage, page } = this.state;
      const emptyRows = rowsPerPage - data.length;
    
      return (
        <Paper>
          <Table>
            <SortableTableHeader order={order} sortedBy={sortedBy} columns={this.props.columns} sortData={this.sortData}/>
            <TableBody>
              { data.length > 0 ?
                data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(entry => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={entry.id}
                    >
                      {this.props.columns.map(column => {
                        return (
                          <TableCell key={column.id + entry.id}>
                            {entry[column.id]}
                            </TableCell>
                        )})}
                    </TableRow>
                  );})
               :
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={1}
                    >
                      <TableCell colSpan={this.props.columns.length}><h3>No such data</h3></TableCell>
                    </TableRow>
              }
              {emptyRows > 0 && (
                <TableRow >
                  <TableCell rowSpan ={emptyRows} colSpan={this.props.columns.length} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={data.length > 0 ? data.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.changePage}
            onChangeRowsPerPage={this.changeRowsPerPage}
          />
        </Paper>
      )
  }
}

export default SortableTable;
