import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



const columns = [
    { id: 'name', label: 'Description', minWidth: 170 },
    { id: 'code', label: 'Project Value (In ₹)', minWidth: 100 },
];

function createData(name, code) {
    return { name, code };
}

const rows = [
    createData(`Fabrication of Structural Steel for Structural work of 5th stream Alumina Refinery at
  Damanjodi Odisha and related facilities at Vishakhaptnam Port.`, '53,58,650.00 Lakh'),

    createData(`Hankuk Construction Trading Pvt Ltd , Worked in Brick Work , Plaster Work , Paint works`, '6.5 Cr'),

    createData(`Health Care Pvt.Ltd Patna Worked in ful civil Construction.`, '70.00 Lakh'),

    createData(`Dr Santosh Kumar Hospital Buxar, Worked in Full Civil Construction.`, '2.4 Cr'),

    createData(`Alankar Marine Institute Patliputra Industrial Area Patna, Worked in full civil construction`, '2.5 Cr'),

    createData(`V2 Mall Madhubani, Dr Saroj Pandey, Worked in full civil construction.`, '5.8 Cr'),

    createData(`Civil & Other Civil related works on items rate basis for memu Bhusawal Projects`, '45.00 Lakh'),

    createData(`Pulse Hospital Dr Santosh Kumar Globespan Design Studio`, '1.2 Cr'),

    createData(`Thomathu Infra Projects Earth work excavation in hard rock.`, '1.2 Cr'),

    createData(`Bridge and roof co. India Lta. NALCO Fabrication of Structural Steel for Structural work`, '269,783,06.08 Lakh'),

    createData(`Magnus Enterprises Electro-Mechanical , Civil Work.`, '5.8 Cr'),

    createData(`Civil & Other Civil related works on items rate basis for memu Bhusawal Projects`, '45.00 Lakh'),

    createData(`Hankuk Construction, Trading Pvt Ltd, Worked in Brick Work, Plaster Work, Paint Works`, '6.5 Cr'),

    createData(`Tata Group Electrical Work, Bhagalpur, From Tata Group`, '53 Lakh'),

    createData(`Pradsdideal Real Estate Developers Pvt Ltd. Worked in full Civil Construction`, '53,58,650.00 Lakh'),

    createData(`Ford Hospital Patna, Worked in full Civil Construction`, '70 Lakh'),

];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align="left"
                                    style={{ minWidth: column.minWidth, backgroundColor: "black", color: "white" }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * 7, page * 7 + 7).map((row, index) => (
                            <TableRow hover key={index}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.code}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[]} // Remove rows per page options
                component="div"
                count={rows.length}
                rowsPerPage={7} // Display 7 rows per page
                page={page}
                onPageChange={handleChangePage}
            />
        </Paper>
    );
}
