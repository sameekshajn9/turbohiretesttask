import React, { useState } from "react"
import { Dropdown } from 'react-bootstrap';

export default () => {

    const options = ['Interview', 'Meeting', 'Scrum'];
    const [selectedvalue, setSelectedValue] = useState(options[0]);
    return (<Dropdown class="col-3">
        <Dropdown.Toggle
            variant=""
            id="dropdown-basic"
            className="dropdowntoggle"
        >
            <span style={{
                color: "gray",
                fontWeight: "bold"
            }}>{selectedvalue}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {options.map(item => (
                <Dropdown.Item onClick={() => setSelectedValue(item)}>
                    {item}
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>)
}