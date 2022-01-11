import { v4 as uuidv4 } from 'uuid';

class Table
{
    constructor(name, id)
    {
        this.name = name;
        this.id = uuidv4();
        this.cartContent = [];
    }
}

export default Table;