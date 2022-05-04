import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
const TextBG = () => {
    const [wText, setWText] = useState('')

    const write = (event) => {
        event.preventDefault()
        const text = event.target.txt.value
        setWText(text)
        event.target.reset()
    }
    return (
        <div className='container'>
            <div className="image-here mb-3">
                <div className="text ">{wText}</div>
            </div>
            <Form className='w-50 mx-auto' onSubmit={write}>
                <Form.Group className="">
                    <Form.Control type="text" name='txt' placeholder="Type it Will Display" required/>
                </Form.Group>
                <Button className='mt-2' variant="primary" type="submit">
                    Type
                </Button>
            </Form>
        </div>
    );
};

export default TextBG;