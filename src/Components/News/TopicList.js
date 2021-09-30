import * as React from 'react';

export default function TopicList({ topics }) {
    return (
        <div>
            <ul>
                {topics.map((tag,ind) => (
                    <li key={ind}>
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    )
}