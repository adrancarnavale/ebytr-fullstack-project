import { v4 as uuidv4 } from 'uuid';
import { ITaskTableElements } from '../../types';

export function TaskTable({ tasks }: ITaskTableElements) {
  return (
    <div>
      <table>
        <thead>
          {Object.keys(tasks[0]).map((task) => (
            <tr>
              <th key={uuidv4()}>{task}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={uuidv4()}>
              {Object.values(task).map((element) => (
                <td key={uuidv4()}>{element}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
