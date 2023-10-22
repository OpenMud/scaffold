import React from 'react';
import {useState} from "react";
import * as DOMPurify from 'dompurify';

interface NewMessage {
    (message: string): void
}

export interface ChatLogProperties {
    log_messages: string[]
}

export function ChatLog(props : ChatLogProperties) {
    console.log(props.log_messages);
    return (
        <div className="chat-dialog">
            {
                props.log_messages.map((m, i) =>
                    (  
                        <div key={"el_" + i} className="chat-message">
                            <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(m)}} />
                        </div>
                    )
                )
            }
        </div>
    );
}