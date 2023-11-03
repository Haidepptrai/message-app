import React from 'react';
import InputBox from "./InputBox";
import "./MessageBox.css";

const MessageBox = ({ user, addMessage, messageHistory }) => {
    return (
        <div className="message-box">
            {user && user.map(person => (
                <div key={person.id} className="message-each-person">
                    <h2 className="person-name">{person.name}'s view</h2>
                    <div className="messages-container">
                        {messageHistory.map(record => (
                            <div key={record.message} className={`message-detail ${record.name === person.name ? 'personal-message' : ''}`}>
                                {record.message}
                            </div>
                        ))}
                    </div>
                    <InputBox addMessage={addMessage} person={person.name} />
                </div>
            ))}
        </div>
    )
}

export default MessageBox;
