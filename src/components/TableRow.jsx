import TableCell from "./TableCell";
import { formatGender, formatStatus } from "../lib"
const TableRow = ({ character, formatDate, onViewDetail }) => (
    <tr>
      <TableCell>
        <img src={character.image} alt={character.name} className="h-10 w-10 rounded-full" />
      </TableCell>
      <TableCell><strong>{character.name}</strong></TableCell>
      <TableCell><i>{formatGender(character.gender)}</i></TableCell>
      <TableCell>{formatStatus(character.status)}</TableCell>
      <TableCell>
        <button onClick={() => onViewDetail(character)} className="text-blue-500">Ver Detalle</button>
      </TableCell>
    </tr>
  );

export default TableRow;